import { MediaSx, Sx } from '../../box/box.types';
import {
	TextSizeName,
	TextTypeName,
	TextVariantName,
} from '../../../common/types';

import { ButtonStateName } from '../button.theme.types';
import { BreakpointName } from '../../../common/constants';

export type BtnStateLayerStyles = {
	sx: Sx | MediaSx;
	stateStyles: { [key in ButtonStateName]: Sx };
};

export type BtnWrapperStyles = BtnStateLayerStyles;

export type ButtonLabelStyle = {
	variant?: TextVariantName;
	type?: TextTypeName;
	size?: TextSizeName;
	sx?: Sx;
};

export type BtnLabelMediaStyles = {
	[key in BreakpointName]?: ButtonLabelStyle;
};

export type BtnTypographyStateStyles = {
	[key in ButtonStateName]: ButtonLabelStyle;
};

export type BtnTyporgaphyStyles = {
	styles: ButtonLabelStyle;
	stateStyles: BtnTypographyStateStyles;
	// size: TextSizeName;
};

export type ButtonStateStyles = { [key in ButtonStateName]: Sx };
export type BtnIconStyles = {
	stateStyles: ButtonStateStyles;
	sx: Sx | MediaSx;
};
