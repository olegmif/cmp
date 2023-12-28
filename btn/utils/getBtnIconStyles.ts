import { BtnIconStyles, ButtonLabelStyle } from './getBtnStyles';
import {
	ButtonSizeName,
	ButtonStateName,
	ButtonTheme,
	ButtonTypeName,
	ButtonVariantName,
} from '../button.theme.types';
import { BUTTON_SIZE_NAMES, BUTTON_STATE_NAMES } from '../btn.const';
import { MediaSx, Sx } from '../../box/box.types';
import { BREAKPOINT_NAMES } from '../../../common/constants';

/**
 * Возвращает набор стилей для оформления иконок кнопки
 * в зависимости от варианта, типа и размера кнопки.
 * Если fixedSize содержит false, в набор не включаются данные для
 * построения медиа-запросов.
 *
 * @param theme
 * @param variant
 * @param type
 * @param size
 * @param fixedSize
 */
export const getBtnIconStyles: (
	theme: ButtonTheme,
	variant: ButtonVariantName,
	type: ButtonTypeName,
	size: ButtonSizeName,
	fixedSize: boolean
) => BtnIconStyles = (theme, variant, type, size, fixedSize) => {
	const stateStyles = BUTTON_STATE_NAMES.reduce<{
		[key in ButtonStateName]: Sx;
	}>((acc, buttonState) => {
		if (theme.variant[variant][type][buttonState].icon) {
			acc[buttonState] = theme.variant[variant][type][buttonState].icon || {};
		}
		return acc;
	}, {});

	if (!fixedSize) {
		const mediaSx = BREAKPOINT_NAMES.reduce<MediaSx>((acc, breakpoint) => {
			if (breakpoint !== 'start') {
				const mediaSize = theme.media[size][breakpoint];

				if (mediaSize) {
					const sizeSx: Sx | undefined =
						theme.size[variant][mediaSize].icon?.sx;
					if (sizeSx) {
						acc[breakpoint] = { ...sizeSx };
					}
				}
			}

			return acc;
		}, {});

		const startMediaSize = theme.media[size].start;
		const start: Sx = startMediaSize
			? theme.size[variant][startMediaSize].icon?.sx || {}
			: {};

		return { sx: { ...start, mlg: mediaSx.mlg }, stateStyles };
	}

	const sx = theme.size[variant][size].icon?.sx || {};

	return { sx, stateStyles };
};
