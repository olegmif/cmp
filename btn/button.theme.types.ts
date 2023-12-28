import {
	BUTTON_SHAPE_NAMES,
	BUTTON_SIZE_NAMES,
	BUTTON_STATE_NAMES,
	BUTTON_TYPE_NAMES,
	BUTTON_VARIANT_NAMES,
} from './btn.const';
import { Sx } from '../box/box.types';
import {
	TextSizeName,
	TextTypeName,
	TextVariantName,
} from '../../common/types';
import { IconSizes } from '../../icons/icons.types';
import { BreakpointName } from '../../common/constants';

export type ButtonVariantName = (typeof BUTTON_VARIANT_NAMES)[number];
export type ButtonStateName = (typeof BUTTON_STATE_NAMES)[number];
export type ButtonTypeName = (typeof BUTTON_TYPE_NAMES)[number];
export type ButtonShapeName = (typeof BUTTON_SHAPE_NAMES)[number];
export type ButtonSizeName = (typeof BUTTON_SIZE_NAMES)[number];
export type ButtonStateStyle = {
	wrapper?: Sx;
	stateLayer?: Sx;
	typography?: {
		variant?: TextVariantName;
		type?: TextTypeName;
		sx?: Sx;
	};
	icon?: Sx;
};
export type ButtonSizeStyle = {
	stateLayerSx?: Sx;
	typography?: {
		sx?: Sx;
		size?: TextSizeName;
	};
	icon?: {
		sx?: Sx;
		size?: IconSizes;
	};
};
export type ButtonStates = {
	[key in ButtonStateName]: ButtonStateStyle;
};
export type ButtonTypes = {
	[key in ButtonTypeName]: ButtonStates;
};
export type ButtonVariantTypes = {
	[key in ButtonVariantName]: ButtonTypes;
};
export type ButtonShapeSize = {
	[key in ButtonSizeName]: Sx;
};
export type ButtonShapes = {
	[key in ButtonShapeName]: ButtonShapeSize;
};
export type ButtonVariantShapes = {
	[key in ButtonVariantName]: ButtonShapes;
};
export type ButtonSizes = {
	[key in ButtonSizeName]: ButtonSizeStyle;
};
export type ButtonVariantSizes = {
	[key in ButtonVariantName]: ButtonSizes;
};
export type ButtonMediaSizes = {
	[key in BreakpointName]?: ButtonSizeName;
};
export type ButtonMedia = {
	[key in ButtonSizeName]: ButtonMediaSizes;
};

export type ButtonTheme = {
	variant: ButtonVariantTypes;
	shape: ButtonVariantShapes;
	size: ButtonVariantSizes;
	media: ButtonMedia;
};
