import { ForwardedRef, ReactElement } from 'react';
import { BoxComponentProps } from '../box/box.types';
import { BreakpointName } from '../../common/constants';
import { TTheme } from '../../common/types';

export type GapMedia = { [key in BreakpointName]?: number | string };
export type SeparatorProps = {
	color?: string | ((theme: TTheme) => string);
	margin?: string;
	width?: string;
};
export type FlexComponentProps = BoxComponentProps & {
	className?: string;
	gap?: (number | string) | GapMedia;
	separator?: boolean | ReactElement | SeparatorProps;
	ref?: ForwardedRef<any>;
};
