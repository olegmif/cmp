import { TTheme } from '../../../common/types';
import {
	ButtonShapeName,
	ButtonSizeName,
	ButtonTypeName,
	ButtonVariantName,
} from '../button.theme.types';
import { getBtnIconStyles } from './getBtnIconStyles';
import { getBoxStyles, getMediaQueriesString } from '../../box/box.component';
import { MediaSx } from '../../box/box.types';

/**
 * Возвращает строку стилей для иконок в кнопке.
 * если fixedSize содержит false, строка не содержит медиа-запросов.
 *
 * @param theme
 * @param variant
 * @param type
 * @param size
 * @param fixedSize
 */
export const getBtnIconStylesString: (
	theme: TTheme,
	variant: ButtonVariantName,
	type: ButtonTypeName,
	size: ButtonSizeName,
	fixedSize: boolean
) => string = (theme, variant, type, size, fixedSize) => {
	const iconStyles = getBtnIconStyles(
		theme.btn,
		variant,
		type,
		size,
		fixedSize
	);

	const defaultStyles = getBoxStyles(theme, {
		...iconStyles.sx,
		...iconStyles.stateStyles.default,
	});
	if (fixedSize) {
		return defaultStyles;
	}

	const mediaQueries = getMediaQueriesString(theme, iconStyles.sx as MediaSx);

	return `${defaultStyles}${mediaQueries}`;
};
