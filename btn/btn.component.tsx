import React, { FC, forwardRef, useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components';
import cn from 'classnames';
import Box from '../box';
import { BtnComponentProps } from './btn.types';
import { getBtnStateLayerStylesAsString } from './utils/getBtnStateLayerStylesAsString';
import { TTheme } from '../../common/types';
import { getBtnWrapperStylesAsString } from './utils/getBtnWrapperStylesAsString';
import { getBtnTypographyStylesAsString } from './utils/getBtnTypographyStylesAsString';
import { getBtnIconStylesString } from './utils/getBtnIconStylesString';
import { MediaSx, Sx } from '../box/box.types';

const StyledButtonWrapper = styled(Box)<{ $stylesString: string }>`
	position: relative;
	box-sizing: border-box;
	display: inline-block;
	${(props) => props.$stylesString}
`;

const StyledButtonStateLayer = styled(Box)<{ $stylesString: string }>`
	border: none;
	margin: 0;
	padding: 0;
	background: none;
	cursor: pointer;
	font: inherit;
	outline: none;
	color: inherit;
	text-decoration: none;
	user-select: none;
	-webkit-user-drag: none;
	-webkit-tap-highlight-color: transparent;

	position: relative;
	inset: 0;
	z-index: 1;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	${(props) => props.$stylesString}
`;

const StyledLabel = styled(Box)<{ $stylesString: string }>`
	white-space: nowrap;
	${(props) => props.$stylesString}
`;

const StyledIcon = styled(Box)<{ $stylesString: string }>`
	display: flex;
	align-items: center;
	${(props) => props.$stylesString}
`;

const BtnComponent: FC<BtnComponentProps> = forwardRef(
	(
		{
			className = '',
			sx = {},
			wrapperSx = {},
			theme,
			caption = '',
			leftIcon,
			rightIcon,
			variant = 'default',
			type = 'primary',
			shape = 'round',
			size = 'medium',
			fixedSize = false,
			href,
			target,
			download,
			value,
			selected = false,
			disabled = false,
			...rest
		},
		ref: React.ForwardedRef<any>
	) => {
		const defaultTheme: TTheme = useContext(ThemeContext);

		const wrapperStylesString = getBtnWrapperStylesAsString(
			theme || defaultTheme,
			variant,
			type,
			shape,
			size,
			fixedSize
		);

		const stateLayerStylesString = getBtnStateLayerStylesAsString(
			theme || defaultTheme,
			variant,
			type,
			shape,
			size,
			fixedSize
		);

		const typographyStylesString = getBtnTypographyStylesAsString(
			theme || defaultTheme,
			variant,
			type,
			size,
			fixedSize
		);

		const iconStylesString = getBtnIconStylesString(
			theme || defaultTheme,
			variant,
			type,
			size,
			fixedSize
		);

		// временно - для того, чтобы иконки принимались как компонент и как тип

		let LeftIcon;
		let LeftIconNode;

		if (typeof leftIcon === 'function') {
			LeftIcon = leftIcon;
		} else if (React.isValidElement(leftIcon)) {
			LeftIconNode = leftIcon;
		}

		let RightIcon;
		let RightIconNode;

		if (typeof rightIcon === 'function') {
			RightIcon = rightIcon;
		} else if (React.isValidElement(rightIcon)) {
			RightIconNode = rightIcon;
		}

		const styledLabelSx: Sx & MediaSx = useMemo(() => {
			const leftPadding = leftIcon ? {} : { paddingLeft: '0 !important' };
			const rightPadding = rightIcon ? {} : { paddingRight: '0 !important' };

			return { ...leftPadding, ...rightPadding };
		}, [rightIcon, leftIcon]);

		return (
			<StyledButtonWrapper
				className={cn(className, { disabled }, { selected })}
				$stylesString={wrapperStylesString}
				sx={wrapperSx}
			>
				<StyledButtonStateLayer
					ref={ref}
					forwardedAs={href ? 'a' : 'button'}
					{...(href ? { href } : {})}
					{...(target ? { target } : {})}
					{...(download ? { download } : {})}
					$stylesString={stateLayerStylesString}
					{...(value ? { 'data-value': value } : {})}
					{...(!href ? { disabled } : {})}
					{...rest}
					sx={sx}
				>
					{LeftIcon && (
						<StyledIcon $stylesString={iconStylesString} className="icon">							
							<LeftIcon size="medium" />
						</StyledIcon>
					)}
					{LeftIconNode && (
						<StyledIcon $stylesString={iconStylesString} className="icon">							
							{LeftIconNode}
						</StyledIcon>
					)}

					{caption && (
						<StyledLabel
							className="caption"
							$stylesString={typographyStylesString}
							sx={styledLabelSx}
						>
							{caption}
						</StyledLabel>
					)}

					{RightIcon && (
						<StyledIcon
							$stylesString={iconStylesString}
							className={cn('icon', 'right-icon')}
						>							
							<RightIcon size="medium" />
						</StyledIcon>
					)}
					{RightIconNode && (
						<StyledIcon
							$stylesString={iconStylesString}
							className={cn('icon', 'right-icon')}
						>							
							{RightIconNode}
						</StyledIcon>
					)}
				</StyledButtonStateLayer>
			</StyledButtonWrapper>
		);
	}
);

BtnComponent.displayName = 'BtnComponent';

export default BtnComponent;
