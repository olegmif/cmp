import React, { CSSProperties, FC, useContext, useMemo } from 'react';
import styled from 'styled-components';
import {
	BREAKPOINT_NAMES,
	BreakpointName,
	BREAKPOINTS,
	DESIGN_MODULE,
} from '../../common/constants';
import {
	BoxComponentProps,
	Sx,
	Margin,
	Padding,
	ADDITIONAL_PADDING_PROPS,
	ADDITIONAL_MARGIN_PROPS,
	AdditionalPaddingProp,
	AdditionalMarginProp,
	MediaSx,
} from './box.types';
import { camelToSnakeCase } from '../../common/utils/utils';
import { TTheme } from '../../common/types';
import ThemeContext from '../theme-context';

const calcIndent = (indent: Margin | Padding) =>
	typeof indent === 'number' ? `${indent * DESIGN_MODULE}px` : indent;

const getColorValue: (
	theme: TTheme,
	color: string | ((theme: TTheme) => string)
) => string = (theme, color) =>
	typeof color !== 'function' ? color : color(theme);

const calcBoxCxProps = (theme: TTheme, sx: Sx) => {
	const color = sx.color ? getColorValue(theme, sx.color) : undefined;
	const fill = sx.fill ? getColorValue(theme, sx.fill) : undefined;
	const backgroundColor = sx.backgroundColor
		? getColorValue(theme, sx.backgroundColor)
		: undefined;

	const colors: CSSProperties = {};

	if (color) {
		colors.color = color;
	}
	if (backgroundColor) {
		colors.backgroundColor = backgroundColor;
	}
	if (fill) {
		colors.fill = fill;
	}

	const indents: Sx = {
		margin: calcIndent(sx?.m),
		marginTop: calcIndent(sx?.mt),
		marginRight: calcIndent(sx?.mr),
		marginBottom: calcIndent(sx?.mb),
		marginLeft: calcIndent(sx?.ml),
		// padding: calcIndent(sx?.p === undefined ? DEFAULT_PADDING : sx?.p),
		padding: sx.padding ? sx.padding : calcIndent(sx?.p),
		paddingTop: sx.paddingTop ? sx.paddingTop : calcIndent(sx?.pt),
		paddingRight: sx.paddingRight ? sx.paddingRight : calcIndent(sx?.pr),
		paddingBottom: sx.paddingBottom ? sx.paddingBottom : calcIndent(sx?.pb),
		paddingLeft: sx.paddingLeft ? sx.paddingLeft : calcIndent(sx?.pl),
	};

	const cssProps = Object.keys(sx).reduce<CSSProperties>((acc, key) => {
		if (
			!ADDITIONAL_PADDING_PROPS.includes(key as AdditionalPaddingProp) &&
			!ADDITIONAL_MARGIN_PROPS.includes(key as AdditionalMarginProp) &&
			key !== 'color' &&
			key !== 'backgroundColor' &&
			key !== 'fill'
		) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			acc[camelToSnakeCase(key as keyof CSSProperties)] = sx[key as keyof Sx];
		}
		return acc;
	}, {});

	const cssIndents = Object.keys(indents).reduce<CSSProperties>((acc, key) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		acc[camelToSnakeCase(key)] = indents[key as keyof Sx];
		return acc;
	}, {});

	const cssColors = Object.keys(colors).reduce<CSSProperties>((acc, key) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		acc[camelToSnakeCase(key)] = colors[key as keyof Sx];
		return acc;
	}, {});

	return { ...cssProps, ...cssIndents, ...cssColors };
};

const stringifySx = (cx: Sx) => {
	return Object.keys(cx).reduce<string>((acc, key) => {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		return cx[key as keyof Sx] ? `${acc}${key}: ${cx[key as keyof Sx]};` : acc;
	}, '');
};

const extractSx: (sx: Sx | MediaSx) => Sx = (sx) => {
	const extractedSx = { ...sx };

	Object.keys(extractedSx).forEach((key) => {
		if (BREAKPOINT_NAMES.includes(key as BreakpointName)) {
			delete (extractedSx as MediaSx)[key as BreakpointName];
		}
	});

	return extractedSx as Sx;
};
export const getBoxStyles = (theme: TTheme, sx: Sx | MediaSx | undefined) => {
	const defaultSx = sx ? extractSx(sx) : {};
	return stringifySx(calcBoxCxProps(theme, { ...defaultSx }));
};

export const getMediaQueriesString = (theme: TTheme, sx: MediaSx) => {
	if (!sx) {
		return '';
	}
	return BREAKPOINT_NAMES.reduce<Array<string>>((acc, breakpoint) => {
		if (sx[breakpoint]) {
			const mediaValues = getBoxStyles(theme, sx[breakpoint] as Sx);
			const mediaQuery = `@media screen and (min-width: ${BREAKPOINTS[breakpoint].min}px) {${mediaValues}}`;
			acc.push(mediaQuery);
		}
		return acc;
	}, []).join('');
};

const StyledBox = styled.div<{ $sx: string; $mediaQueriesString: string }>`
	box-sizing: border-box;
	${(props) => props.$sx}
	${(props) => props.$mediaQueriesString}
`;

const BoxComponent: FC<BoxComponentProps> = React.forwardRef(
	(
		{ theme, className = '', sx, children, as = 'div', ...rest },
		ref: React.ForwardedRef<any>
	) => {
		const defaultTheme: TTheme = useContext(ThemeContext);

		/*
		const mediaQueriesString = useMemo(() => {
			if (!sx) {
				return '';
			}
			return BREAKPOINT_NAMES.reduce<Array<string>>((acc, breakpoint) => {
				if ((sx as MediaSx)[breakpoint]) {
					const mediaValues = stringifySx(
						calcBoxCxProps(
							theme || defaultTheme,
							(sx as MediaSx)[breakpoint] as Sx
						)
					);
					const mediaQuery = `@media screen and (min-width: ${BREAKPOINTS[breakpoint].min}px) {${mediaValues}}`;
					acc.push(mediaQuery);
				}
				return acc;
			}, []).join('');
		}, [sx as MediaSx]);
		 */

		/*
		const boxStyles = useMemo(() => {
			const defaultSx = sx ? extractSx(sx) : {};
			const p = defaultSx.p || DEFAULT_PADDING;
			return stringifySx(
				calcBoxCxProps(theme || defaultTheme, { p, ...defaultSx })
			);
		}, [sx]);
		 */
		const boxStyles = useMemo(
			() => getBoxStyles(theme || defaultTheme, sx),
			[sx]
		);

		const mediaQueriesString = useMemo(
			() => getMediaQueriesString(theme || defaultTheme, sx as MediaSx),
			[sx]
		);

		return (
			<StyledBox
				as={as}
				ref={ref}
				className={className}
				$sx={boxStyles}
				$mediaQueriesString={mediaQueriesString}
				{...rest}
			>
				{children}
			</StyledBox>
		);
	}
);

BoxComponent.displayName = 'BoxComponent';

export default BoxComponent;
