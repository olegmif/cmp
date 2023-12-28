import {
	TextSizeName,
	TextTypeName,
	TextVariantName,
	TTextVariants,
	TTheme,
} from '../../../common/types';
import { MediaSx, Sx } from '../../box/box.types';
import { BREAKPOINT_NAMES } from '../../../common/constants';

/**
 * Возвращает набор стилей из указанной темы в зависимости от варианта, типа и
 * размера текста. Если fixedSize содержит false, то возвращенный результат
 * содержит стили для медиа-запросов, изменяющие размер текста в зависимости от
 * ширины экрана.
 *
 * @param theme
 * @param variant
 * @param type
 * @param size
 * @param fixedSize
 */
export const getStylesFromProps: (
	theme: TTextVariants,
	variant: TextVariantName,
	type: TextTypeName,
	size: TextSizeName,
	fixedSize: boolean
) => Sx = (theme, variant, type, size, fixedSize) => {
	const styles = theme[variant]?.[type]?.[size].msm || {};

	const mediaStyles: MediaSx =
		(!fixedSize &&
			BREAKPOINT_NAMES.reduce((acc, name) => {
				if (theme[variant]?.[type]?.[size][name]) {
					return { ...acc, [name]: theme[variant]?.[type]?.[size][name] };
				}
				return acc;
			}, {})) ||
		{};

	return { ...styles, ...mediaStyles };
};
