import { HTMLProps, PropsWithChildren, ReactElement } from 'react';
import { Sx } from '../box/box.types';

export type ButtonVariant = {
	backgroundColor: string;
	iconColor: string;
	color: string;
	opacity: number;
};

export type ButtonSize = {
	padding: string;
	fontSize: string;
	lineHeight: string;
	labelPadding: string;
	iconSize: string;
	gap: string;
};

export const BUTTON_SHAPE_NAMES = ['square', 'round', 'circle'];
export type ButtonShapeName = (typeof BUTTON_SHAPE_NAMES)[number];
export type ButtonShape = { [key in ButtonSizeName]: number };
export type ButtonShapes = { [key in ButtonShapeName]: ButtonShape };

export const BUTTON_SHAPES: ButtonShapes = {
	square: {
		micro: 0,
		small: 0,
		medium: 0,
		large: 0,
	},
	round: {
		micro: 0,
		small: 6,
		medium: 7,
		large: 8,
	},
	circle: {
		micro: 0,
		small: 16,
		medium: 20,
		large: 24,
	},
};

export const BUTTON_SIZE_NAMES = ['micro', 'small', 'medium', 'large'];
export type ButtonSizeName = (typeof BUTTON_SIZE_NAMES)[number];

export type ButtonSizes = { [key in ButtonSizeName]: ButtonSize };

export const BUTTON_SIZES: ButtonSizes = {
	micro: {
		padding: '0',
		fontSize: '12px',
		lineHeight: '16px',
		labelPadding: '0 2px',
		iconSize: '16px',
		gap: '4px',
	},
	small: {
		padding: '8px 12px',
		fontSize: '12px',
		lineHeight: '16px',
		labelPadding: '0 2px',
		iconSize: '16px',
		gap: '4px',
	},
	medium: {
		padding: '10px 16px',
		fontSize: '14px',
		lineHeight: '20px',
		labelPadding: '0 3px',
		iconSize: '20px',
		gap: '6px',
	},
	large: {
		padding: '12px 20px',
		fontSize: '16px',
		lineHeight: '24px',
		labelPadding: '0 4px',
		iconSize: '24px',
		gap: '8px',
	},
};

export const BUTTON_VARIANT_NAMES = [
	'defaultPrimary',
	'defaultSecondary',
	'defaultTertiary',
	'defaultGhost',
	'textPrimary',
	'textSecondary',
	'textLink',
] as const;
export type ButtonVariantName = (typeof BUTTON_VARIANT_NAMES)[number];

export const BUTTON_STATE_NAMES = [
	'default',
	'hover',
	'focus',
	'active',
	'disabled',
];
export type ButtonStateName = (typeof BUTTON_STATE_NAMES)[number];

export type ButtonStates = { [key in ButtonStateName]: ButtonVariant };

export type StyledButtonProps = {
	variant?: ButtonStates;
	$active?: boolean;
	sizeName: ButtonSizeName;
	size?: ButtonSize;
	$shape?: ButtonShape;
	align?: 'start' | 'center' | 'end';
};

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'size'>;

export type ButtonExProps = {
	className?: string;
	variant?: ButtonStateName;
	active?: boolean;
	size?: ButtonSizeName;
	shape?: ButtonShapeName;
	icon?: ReactElement;
	iconRight?: boolean;
	align?: 'start' | 'center' | 'end';
	sx?: Sx;
	value?: number | string;
	withoutPadding?: boolean;
	wrapContent?: boolean; // true - контент переносится при нехватке места, false - перенос контента запрещен; по умолчанию false
};

export type ButtonComponentProps = PropsWithChildren &
	ButtonProps &
	ButtonExProps;
