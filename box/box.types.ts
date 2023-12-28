import {
	CSSProperties,
	FormEventHandler,
	MouseEventHandler,
	MutableRefObject,
	PropsWithChildren,
	PropsWithRef,
	RefAttributes,
} from 'react';
import { BreakpointName } from '../../common/constants';
import { TTheme } from '../../common/types';

export type Margin = CSSProperties['margin'];
export type Padding = CSSProperties['padding'];

export const ADDITIONAL_PADDING_PROPS = ['p', 'pt', 'pr', 'pb', 'pl'] as const;
export type AdditionalPaddingProp = (typeof ADDITIONAL_PADDING_PROPS)[number];
export type Paddings = { [key in AdditionalPaddingProp]?: Padding };

export const ADDITIONAL_MARGIN_PROPS = ['m', 'mt', 'mr', 'mb', 'ml'] as const;
export type AdditionalMarginProp = (typeof ADDITIONAL_MARGIN_PROPS)[number];
export type Margins = { [key in AdditionalMarginProp]?: Margin };

export type BoxCSSPropsExtension = Paddings & Margins;

export type Sx = Omit<CSSProperties, 'color' | 'backgroundColor' | 'fill'> &
	BoxCSSPropsExtension & {
		color?: ((theme: TTheme) => string) | string;
		backgroundColor?: ((theme: TTheme) => string) | string;
		fill?: ((theme: TTheme) => string) | string;
	};

export type MediaSx = { [key in BreakpointName]?: Sx };

export type StyledBoxProps = {
	sx?: Sx | MediaSx;
};

export type BoxComponentProps = PropsWithChildren &
	StyledBoxProps &
	RefAttributes<any> & {
		className?: string;
		as?: keyof JSX.IntrinsicElements;
		onClick?: MouseEventHandler<any> | FormEventHandler<any>;
		theme?: TTheme;
	};
