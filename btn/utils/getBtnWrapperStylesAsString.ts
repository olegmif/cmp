import {
	ButtonShapeName,
	ButtonSizeName,
	ButtonTypeName,
	ButtonVariantName,
} from '../button.theme.types';
import { getBoxStyles, getMediaQueriesString } from '../../box/box.component';
import { TTheme } from '../../../common/types';
import { BUTTON_STATE_NAMES } from '../btn.const';
import { MediaSx } from '../../box/box.types';
import { getBtnWrapperStyles } from './getBtnWrapperStyles';

/**
 * Возвращает строку стилей нижнего слоя кнопки.
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
export const getBtnWrapperStylesAsString: (
	theme: TTheme,
	variant: ButtonVariantName,
	type: ButtonTypeName,
	shape: ButtonShapeName,
	size: ButtonSizeName,
	fixedSize: boolean
) => string = (theme, variant, type, shape, size, fixedSize) => {
	const styles = getBtnWrapperStyles(
		theme.btn,
		variant,
		type,
		shape,
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

	const stateStyles = BUTTON_STATE_NAMES.reduce((acc, state) => {
		if (!['default', 'selected', 'disabled'].includes(state)) {
			return `${acc}
			&:${state} {
				${getBoxStyles(theme, styles.stateStyles[state])}
			}`;
		}
		if (state !== 'default') {
			return `${acc}		
			&.${state} {
					${getBoxStyles(theme, styles.stateStyles[state])}
			}`;
		}
		return '';
	}, '');

	return `${defaultStylesString} ${defaultStateStylesString} ${stateStyles} ${defaultMediaQueriesString}`;
};
