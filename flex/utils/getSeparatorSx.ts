import { ReactElement } from 'react';
import { MediaSx, Sx } from '../../box/box.types';
import { BREAKPOINT_NAMES } from '../../../common/constants';
import { SeparatorProps } from '../flex.types';
import { TTheme } from '../../../common/types';

/**
 * Возвращает стили разделителя, которые зависят от стилей дочернего
 * компонента Flex слева от разделителя (разделитель скрыт, когда скрыт предыдущий дочерний)
 * и ориентации родительского Flex
 *
 * @param theme - текущая тема
 * @param siblingSx - значение свойства sx элемента слева
 * @param parentSx - значение свойства sx родительского Flex
 * @param separator - разделитель (элемент React, булевое значение или объект с описанием свойств разделителя)
 */
const getSeparatorSx = (
	theme: TTheme,
	parentSx: Sx | MediaSx | undefined,
	siblingSx: Sx | MediaSx | undefined,
	separator: boolean | ReactElement | SeparatorProps
): Sx | MediaSx => {
	const separatorProps: SeparatorProps = (typeof separator === 'object' &&
		(separator as SeparatorProps)) || {
		width: '1px',
		color: theme.colors.border.dividerLight as string,
		margin: '0',
	};

	const defaultHorizontalSx = {
		minWidth: separatorProps.width || '1px',
		minHeight: '100%',
		margin: `0 ${separatorProps.margin || 0}`,
	};

	const defaultVerticalSx = {
		minWidth: '100%',
		minHeight: separatorProps.width || '1px',
		margin: `${separatorProps.margin || 0} 0`,
	};

	// const backgroundColor = 'red';

	let backgroundColor: string = theme.colors.border.dividerLight as string;

	if (separatorProps.color) {
		backgroundColor =
			typeof separatorProps.color === 'function'
				? separatorProps.color(theme)
				: separatorProps.color;
	}

	const separatorSx = {
		p: 0,
		content: '',
		backgroundColor,
		...((parentSx as Sx).flexDirection === 'column'
			? defaultVerticalSx
			: defaultHorizontalSx),
	};

	if (siblingSx) {
		if ((siblingSx as Sx).display === 'none') {
			(separatorSx as Sx).display = 'none';
		}
		return BREAKPOINT_NAMES.reduce((acc, breakpoint) => {
			if ((siblingSx as MediaSx)[breakpoint]?.display) {
				const display =
					(siblingSx as MediaSx)[breakpoint]?.display === 'none'
						? 'none'
						: 'block';
				(separatorSx as MediaSx)[breakpoint] = { display };
			}
			if ((parentSx as MediaSx)[breakpoint]?.flexDirection === 'row') {
				(separatorSx as MediaSx)[breakpoint] = {
					...((separatorSx as MediaSx)[breakpoint] || {}),
					...defaultHorizontalSx,
				};
			}
			if ((parentSx as MediaSx)[breakpoint]?.flexDirection === 'column') {
				(separatorSx as MediaSx)[breakpoint] = {
					...((separatorSx as MediaSx)[breakpoint] || {}),
					...defaultVerticalSx,
				};
			}
			return separatorSx;
		}, separatorSx);
	}
	return {};
};

export default getSeparatorSx;
