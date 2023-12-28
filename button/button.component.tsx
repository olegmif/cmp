import { FC, useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Box from '../box/box.component';
import {
	BUTTON_SHAPES,
	BUTTON_SIZES,
	ButtonComponentProps,
	ButtonShape,
	ButtonSize,
	ButtonStates,
	StyledButtonProps,
} from './button.types';
import { Sx } from '../box/box.types';

export const StyledIcon = styled(Box)<
	Required<{
		size: ButtonSize;
		iconRight: boolean;
		variant: ButtonStates;
		withoutLabel: boolean;
	}>
>`
	width: ${({ size }) => size.iconSize};
	height: ${({ size }) => size.iconSize};
	font-size: ${({ size }) => size.iconSize};
	padding: 0;
	margin-right: ${({ size, iconRight, withoutLabel }) =>
		iconRight || withoutLabel ? 0 : size.gap};
	margin-left: ${({ size, iconRight, withoutLabel }) =>
		!iconRight || withoutLabel ? 0 : size.gap};
	svg {
		fill: ${({ variant }) => variant.default.iconColor};
	}
	&:hover {
		svg {
			fill: ${({ variant }) => variant.hover.iconColor};
		}
	}
	&:focus {
		svg {
			fill: ${({ variant }) => variant.focus.iconColor};
		}
	}
	&:active {
		svg {
			fill: ${({ variant }) => variant.active.iconColor};
		}
	}
	&:disabled {
		svg {
			fill: ${({ variant }) => variant.disabled.iconColor};
		}
	}
`;

export const StyledLabel = styled(Box)<
	Required<{ size: ButtonSize; withIcon: boolean; $wrap: boolean }>
>`
	font-family: Inter;
	white-space: ${(props) => (props.$wrap ? 'normal' : 'nowrap')};
	${({ size, withIcon }) =>
		withIcon ? `padding: ${size.labelPadding}` : 'padding: 0'};
`;

export const StyledButton = styled(Box)<
	Required<StyledButtonProps> & { sx?: Sx }
>`
	display: flex;
	justify-content: ${({ align }) => align};
	align-items: center;
	width: 100%;
	outline: none;
	cursor: pointer;
	border: none;
	text-decoration: none;
	background-color: ${({ variant }) => variant.default.backgroundColor};
	color: ${({ variant }) => variant.default.color};
	opacity: ${({ variant }) => variant.default.opacity};
	border-radius: ${({ $shape, sizeName }) => $shape[sizeName]}px;

	&:hover {
		background-color: ${({ variant }) => variant.hover.backgroundColor};
		color: ${({ variant }) => variant.hover.color};
		opacity: ${({ variant }) => variant.hover.opacity};
	}
	&:focus {
		background-color: ${({ variant }) => variant.focus.backgroundColor};
		color: ${({ variant }) => variant.focus.color};
		opacity: ${({ variant }) => variant.focus.opacity};
	}
	&:active {
		background-color: ${({ variant }) => variant.active.backgroundColor};
		color: ${({ variant }) => variant.active.color};
		opacity: ${({ variant }) => variant.active.opacity};
	}
	&:disabled {
		background-color: ${({ variant }) => variant.hover.backgroundColor};
		color: ${({ variant }) => variant.hover.color};
		opacity: ${({ variant }) => variant.hover.opacity};
	}

	${({ variant, $active }) =>
		$active
			? `
	background-color: ${variant.active.backgroundColor};
	color: ${variant.active.color};
	opacity: ${variant.active.opacity};
	`
			: ''}

	padding: ${({ size }) => size.padding};
	font-size: ${({ size }) => size.fontSize};
	line-height: ${({ size }) => size.lineHeight};
`;

const ButtonComponent: FC<ButtonComponentProps> = ({
	className = '',
	variant = 'defaultGhost',
	active = false,
	children,
	size = 'medium',
	shape = 'round',
	iconRight = false,
	icon = null,
	onClick,
	sx,
	align = 'start',
	withoutPadding = false,
	wrapContent = false,
}) => {
	const theme = useContext(ThemeContext);

	const buttonVariant: ButtonStates = useMemo(
		// eslint-disable-next-line react/destructuring-assignment,@typescript-eslint/no-unsafe-return
		() => theme.buttons[variant],
		[variant, theme]
	);

	const buttonShape: ButtonShape = useMemo(() => BUTTON_SHAPES[shape], [shape]);
	const buttonSize: ButtonSize = useMemo(
		() =>
			withoutPadding
				? { ...BUTTON_SIZES[size], padding: '0' }
				: BUTTON_SIZES[size],
		[size]
	);

	return (
		<StyledButton
			className={className}
			as="button"
			variant={buttonVariant}
			$active={active}
			sizeName={size}
			size={buttonSize}
			$shape={buttonShape}
			onClick={onClick}
			sx={{ ...sx }}
			align={align}
		>
			{!iconRight && icon && (
				<StyledIcon
					size={buttonSize}
					iconRight={false}
					variant={buttonVariant}
					withoutLabel={!children}
				>
					{icon}
				</StyledIcon>
			)}
			{children && (
				<StyledLabel size={buttonSize} withIcon={!!icon} $wrap={wrapContent}>
					{children}
				</StyledLabel>
			)}
			{icon && iconRight && (
				<StyledIcon
					size={buttonSize}
					iconRight
					variant={buttonVariant}
					withoutLabel={!children}
				>
					{icon}
				</StyledIcon>
			)}
		</StyledButton>
	);
};

export default ButtonComponent;
