import React, { FC, useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { TextComponentProps } from './text.types';
import Box from '../box';
import { MediaSx, Sx } from '../box/box.types';
import { TTheme } from '../../common/types';
import { getStylesFromProps } from './utils/getStylesFromProps';
import { getStylesFromV } from './utils/getStylesFromV';
import { BREAKPOINT_NAMES } from '../../common/constants';
import breadcrumbs from '../breadcrumbs';

const TextComponent: FC<TextComponentProps> = ({
	className = '',
	sx = {},
	v,
	children,
	variant = 'body',
	type = 'regular',
	size = 'medium',
	fixedSize = false,
}) => {
	const theme: TTheme = useContext(ThemeContext);

	const computedStyles: Sx | MediaSx = useMemo(() => {
		return v
			? getStylesFromV(theme, v, fixedSize)
			: getStylesFromProps(theme.text, variant, type, size, fixedSize);
	}, [v, variant, type, size, fixedSize]);

	const mediaSx = BREAKPOINT_NAMES.reduce<MediaSx>((acc, breakpoint) => {
		const computedMediaSx = computedStyles as MediaSx;
		const outerMediaSx = sx as MediaSx;
		if (computedMediaSx[breakpoint] && outerMediaSx[breakpoint]) {
			acc[breakpoint] = {
				...computedMediaSx[breakpoint],
				...outerMediaSx[breakpoint],
			};
		} else {
			acc[breakpoint] = computedMediaSx[breakpoint];
		}
		return acc;
	}, {});

	return (
		<Box
			className={className}
			sx={{ p: 0, ...computedStyles, ...sx, ...mediaSx }}
		>
			{children}
		</Box>
	);
};

export default TextComponent;
