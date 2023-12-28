import { TTextMedia, TTheme } from '../../../common/types';
import { MediaSx, Sx } from '../../box/box.types';
import { BREAKPOINT_NAMES } from '../../../common/constants';

/**
 * Возвращает набор стилей из указанной темы в зависимости от значения свойства
 * v. Если fixedSize содержит false, то во0вращенный результат
 * содержит стили для медиа-запросов, изменяющие размер текста в зависимости от
 * ширины экрана.
 *
 * @param v
 * @param fixedSize
 */
export const getStylesFromV: (
	theme: TTheme,
	v: (theme: TTheme) => TTextMedia,
	fixedSize: boolean
) => Sx = (theme, v, fixedSize) => {
	const styles = v(theme);
	const msmStyles = styles.msm || {};
	const mediaStyles: MediaSx =
		(!fixedSize &&
			BREAKPOINT_NAMES.reduce((acc, name) => {
				if (styles[name]) {
					return { ...acc, [name]: styles[name] };
				}
				return acc;
			}, {})) ||
		{};
	return { ...msmStyles, ...mediaStyles };
};
