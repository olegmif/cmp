import {
	Children,
	cloneElement,
	FC,
	forwardRef,
	isValidElement,
	MouseEventHandler,
	ReactElement,
	useContext,
	useMemo,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import Box from '../box';
import { FlexComponentProps, GapMedia, SeparatorProps } from './flex.types';
import {
	BREAKPOINT_NAMES,
	BREAKPOINTS,
	DESIGN_MODULE,
} from '../../common/constants';
import { MediaSx, Sx } from '../box/box.types';

import getMediaEdgesVisibleChildren, {
	MediaFirstLastVisibleIndexes,
} from './utils/getMediaEdgesVisibleChildren';
import getBreakpointsForMediaQueries from './utils/getBreakpointsForMediaQueries';
import getSeparatorSx from './utils/getSeparatorSx';
import { TTheme } from '../../common/types';

type FlexChildProps = {
	child: ReactElement;
	className?: string;
};

const FlexChild = forwardRef<any, FlexChildProps>(
	({ child, className = '' }, ref) => {
		return cloneElement(child, { className, ref });
	}
);

FlexChild.displayName = 'FlexChild';

type FlexChildAsLinkProps = {
	child: ReactElement;
	className?: string;
	href?: string;
	onClick?: MouseEventHandler<any>;
};
const FlexChildAsLink = forwardRef<any, FlexChildAsLinkProps>(
	({ child, className = '', href, onClick }, ref) => {
		return cloneElement(child, { className, ref, href, onClick });
	}
);

FlexChildAsLink.displayName = 'FlexChildAsLink';

const StyledFlexChild = styled(FlexChild)<{
	$gapStyles: string;
	$flexMediaQueries: string;
}>`
  ${(props) => `${props.$gapStyles}`}
	${(props) => `${props.$flexMediaQueries}`}
}
`;

const StyledFlexChildAsLink = styled(FlexChildAsLink)<{
	$gapStyles: string;
	$flexMediaQueries: string;
}>`
  ${(props) => `${props.$gapStyles}`}
	${(props) => `${props.$flexMediaQueries}`}
}
`;

const StyledSeparator = styled(FlexChild)`
	&:last-child {
		display: none;
	}
`;

const getGapStyles: (
	gap: string,
	direction: string,
	firstVisible: boolean,
	lastVisible: boolean
) => string = (gap, direction, firstVisible, lastVisible) => {
	return direction === 'row'
		? `
		margin-top: 0px;
		margin-bottom: 0px;
		${firstVisible ? 'margin-left: 0;' : `margin-left: ${gap};`}
		${lastVisible ? 'margin-right: 0;' : `margin-right: ${gap};`}		
		&:first-child {margin-left: 0;}
		&:last-child {margin-right: 0;}
	`
		: `
		margin-left: 0px;
		margin-right: 0px;		
		${firstVisible ? 'margin-top: 0;' : `margin-top: ${gap};`}
		${lastVisible ? 'margin-bottom: 0;' : `margin-bottom: ${gap};`}				
		&:first-child {margin-top: 0;}
		&:last-child {margin-bottom: 0;}
	`;
};

/**
 * принимает значение gap в виде строки или числа и возвращает
 * строковое значение, которое будет указано в margin
 * дочернего элемента (половина значения gap)
 */
const getGapString = (gap: string | number) => {
	return gap && typeof gap === 'string'
		? `${Math.round(Number(gap.replace('px', '')) / 2)}px`
		: `${((gap as number) * DESIGN_MODULE) / 2}px` || '0px';
};

/**
 * Возвращает строку с медиазапросами, которая добавляется к стилям дочернего элемента.
 * @param sx Стили компонента Flex
 * @param gap Разрыв между дочерними элементами (реализуется с помощью margin)
 */
const getMediaQueriesString: (
	sx: Sx | MediaSx | undefined,
	gap: string | number | GapMedia,
	index: number,
	edgeIndicesByBreakpoint: MediaFirstLastVisibleIndexes
) => string = (sx, gap, index, edgeIndicesByBreakpoint) => {
	const result = BREAKPOINT_NAMES.reduce<Array<string>>((acc, breakpoint) => {
		if (
			getBreakpointsForMediaQueries(
				index,
				gap,
				sx as MediaSx,
				edgeIndicesByBreakpoint
			).includes(breakpoint)
		) {
			const gapValue = getGapString(
				(typeof gap !== 'object' ? gap : gap[breakpoint]) || 0
			);
			const breakpointStyles = getGapStyles(
				gapValue,
				(sx as MediaSx)?.[breakpoint]?.flexDirection ||
					(sx as Sx)?.flexDirection ||
					'row',
				edgeIndicesByBreakpoint[breakpoint]?.first === index,
				edgeIndicesByBreakpoint[breakpoint]?.last === index
			);
			const mediaQuery = `@media screen and (min-width: ${BREAKPOINTS[breakpoint].min}px) {
					${breakpointStyles}
				}`;
			acc.push(mediaQuery);
		}
		return acc;
	}, []);

	return result.join('');
};

const getSeparatorElement = (
	theme: TTheme,
	separator: boolean | ReactElement | SeparatorProps,
	parentSx: Sx | MediaSx,
	siblingSx: Sx | MediaSx
): ReactElement | null => {
	const separatorSx = getSeparatorSx(theme, parentSx, siblingSx, separator);
	if (separator || isValidElement(separator)) {
		return isValidElement(separator) ? (
			separator
		) : (
			<Box
				sx={{
					...separatorSx,
				}}
			/>
		);
	}
	return null;
};

const FlexComponent: FC<FlexComponentProps> = forwardRef(
	(
		{ className = '', children, sx, gap = 0, separator = false, ...rest },
		ref
	) => {
		const theme: TTheme = useContext(ThemeContext);

		const mediaEdgesVisibleChildren = useMemo(
			() => getMediaEdgesVisibleChildren(children),
			[children]
		);

		const flexDirection = (sx as Sx)?.flexDirection
			? (sx as Sx)?.flexDirection
			: 'row';

		const defaultSx = { display: 'flex', flexDirection, ...sx };

		const styledChildren = Children.map(children, (child, index) => {
			if (isValidElement(child)) {
				const mediaQueries = getMediaQueriesString(
					sx,
					gap,
					index,
					mediaEdgesVisibleChildren
				);

				const gapStyles = getGapStyles(
					getGapString((typeof gap !== 'object' ? gap : gap.start) || 0),
					defaultSx.flexDirection || 'row',
					mediaEdgesVisibleChildren.start?.first === index,
					mediaEdgesVisibleChildren.start?.last === index
				);

				const separatorElement = getSeparatorElement(
					theme,
					separator,
					sx || {},
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					(child.props?.sx && (child.props?.sx as Sx | MediaSx)) || {}
				);

				if (child.props.passHref) {
					return (
						<>
							{cloneElement(
								child,
								{},
								<StyledFlexChildAsLink
									className={child.props.className || ''}
									child={child.props.children}
									$gapStyles={gapStyles}
									$flexMediaQueries={mediaQueries}
									ref={child.props.ref}
								/>
							)}

							{separatorElement && <StyledSeparator child={separatorElement} />}
						</>
					);
				}

				return (
					<>
						<StyledFlexChild
							className={child.props.className || ''}
							child={child.props.passHref ? child.props.children : child}
							$gapStyles={gapStyles}
							$flexMediaQueries={mediaQueries}
						/>
						{separatorElement && <StyledSeparator child={separatorElement} />}
					</>
				);
			}

			return child;
		});

		return (
			<Box ref={ref} className={className} sx={defaultSx} {...rest}>
				{styledChildren}
			</Box>
		);
	}
);

FlexComponent.displayName = 'FlexComponent';

export default FlexComponent;
