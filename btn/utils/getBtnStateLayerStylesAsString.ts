import { useMemo } from 'react';
import {
	ButtonShapeName,
	ButtonSizeName,
	ButtonStateName,
	ButtonTheme,
	ButtonTypeName,
	ButtonVariantName,
} from '../button.theme.types';
import { getBtnStateLayerStyles } from './getBtnStateLayerStyles';
import { DEFAULT_PADDING } from '../../box/box.constants';
import { getBoxStyles, getMediaQueriesString } from '../../box/box.component';
import { TTheme } from '../../../common/types';
import { BUTTON_STATE_NAMES } from '../btn.const';
import { MediaSx } from '../../box/box.types';
import { getBtnTypographyStyles } from './getBtnTypographyStyles';
import { getBtnIconStyles } from './getBtnIconStyles';

/**
 * Возвращает строку стилей второго слоя кнопки.
 * Если fixedSize содержит false, строка не содержит медиа-запросы для экранов
 * разного размера.
 *
 * @param theme
 * @param variant
 * @param type
 * @param shape
 * @param size
 * @param fixedSize
 */
export const getBtnStateLayerStylesAsString: (
	theme: TTheme,
	variant: ButtonVariantName,
	type: ButtonTypeName,
	shape: ButtonShapeName,
	size: ButtonSizeName,
	fixedSize: boolean
) => string = (theme, variant, type, shape, size, fixedSize) => {
	const styles = getBtnStateLayerStyles(
		theme.btn,
		variant,
		type,
		shape,
		size,
		fixedSize
	);

	const typographyStyles = getBtnTypographyStyles(
		theme.btn,
		variant,
		type,
		size,
		fixedSize
	);

	const iconStyles = getBtnIconStyles(
		theme.btn,
		variant,
		type,
		size,
		fixedSize
	);

	const defaultStylesString = getBoxStyles(theme, styles.sx);

	const defaultStateStylesString = getBoxStyles(
		theme,
		styles.stateStyles.default
	);

	const defaultMediaQueriesString = getMediaQueriesString(
		theme,
		styles.sx as MediaSx
	);

	const iconStateStyles = iconStyles.stateStyles;

	const typographyStateStyles = typographyStyles.stateStyles;

	const stateStylesString = BUTTON_STATE_NAMES.reduce((acc, state) => {
		const iconStylesStr = iconStateStyles?.[state]
			? `
						& > .icon {
							${getBoxStyles(theme, iconStateStyles[state])}
						}
				`
			: '';
		// строка стилей типографики для состояния кнопки
		const typographyStateStylesStr = typographyStateStyles?.[state]?.sx
			? `
						& > .caption {
							${getBoxStyles(theme, typographyStateStyles[state].sx)}
						}
				`
			: '';

		if (!['default', 'selected', 'disabled'].includes(state)) {
			return `${acc}
			&:${state} {
				${getBoxStyles(theme, styles.stateStyles[state])}
				${typographyStateStylesStr}
				${iconStylesStr}
			}`;
		}
		if (state !== 'default') {
			return `${acc}		
			&.${state} {
					${getBoxStyles(theme, styles.stateStyles[state])}
					${typographyStateStylesStr}
					${iconStylesStr}					
				}`;
		}
		return '';
	}, '');

	return `${defaultStylesString} ${defaultStateStylesString} ${stateStylesString} ${defaultMediaQueriesString}`;
};
