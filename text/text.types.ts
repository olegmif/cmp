import { PropsWithChildren } from 'react';

import { MediaSx, Sx } from '../box/box.types';
import {
	TextSizeName,
	TextTypeName,
	TextVariantName,
	TTextMedia,
	TTheme,
} from '../../common/types';

export type TextComponentProps = PropsWithChildren & {
	className?: string;
	v?: (theme: TTheme) => TTextMedia;
	sx?: Sx | MediaSx;
	variant?: TextVariantName;
	type?: TextTypeName;
	size?: TextSizeName;
	fixedSize?: boolean;
};
