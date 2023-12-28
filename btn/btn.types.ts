import {
	ButtonHTMLAttributes,
	ComponentType,
	MouseEvent,
	FormEvent,
	ReactElement,
	MouseEventHandler,
	FormEventHandler,
} from 'react';
import { IconComponentProps } from '../../icons/icons.types';
import { TTheme } from '../../common/types';
import {
	ButtonVariantName,
	ButtonTypeName,
	ButtonShapeName,
	ButtonSizeName,
} from './button.theme.types';
import { MediaSx, Sx } from '../box/box.types';

export type BtnComponentProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'type' | 'onClick'
> & {
	className?: string;
	theme?: TTheme;
	sx?: Sx | MediaSx;
	wrapperSx?: Sx | MediaSx;
	caption?: string;
	leftIcon?: ComponentType<IconComponentProps> | ReactElement;
	rightIcon?: ComponentType<IconComponentProps> | ReactElement;
	variant?: ButtonVariantName;
	type?: ButtonTypeName;
	shape?: ButtonShapeName;
	size?: ButtonSizeName;
	fixedSize?: boolean;
	href?: string;
	target?: string;
	download?: boolean;
	onClick?: MouseEventHandler | FormEventHandler;
	value?: string | number;
	selected?: boolean;
	disabled?: boolean;
};
