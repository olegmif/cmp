import { BtnStateLayerStyles } from './getBtnStyles';
import {
	ButtonShapeName,
	ButtonSizeName,
	ButtonStateName,
	ButtonTheme,
	ButtonTypeName,
	ButtonVariantName,
} from '../button.theme.types';
import { BREAKPOINT_NAMES } from '../../../common/constants';
import { MediaSx, Sx } from '../../box/box.types';
import { BUTTON_STATE_NAMES } from '../btn.const';

/**
 * Возвращает набор стилей для оформления основного словя кнопки
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
export const getBtnStateLayerStyles: (
	theme: ButtonTheme,
	variant: ButtonVariantName,
	type: ButtonTypeName,
	shape: ButtonShapeName,
	size: ButtonSizeName,
	fixedSize: boolean
) => BtnStateLayerStyles = (theme, variant, type, shape, size, fixedSize) => {
	const stateStyles = BUTTON_STATE_NAMES.reduce<{
		[key in ButtonStateName]: Sx;
	}>((acc, buttonState) => {
		if (theme.variant[variant][type][buttonState]) {
			acc[buttonState] =
				theme.variant[variant][type][buttonState].stateLayer || {};
		}
		return acc;
	}, {});

	if (!fixedSize) {
		const mediaSx = BREAKPOINT_NAMES.reduce<MediaSx>((acc, breakpoint) => {
			const mediaSize = theme.media[size][breakpoint];

			if (mediaSize) {
				const sizeSx: Sx = theme.size[variant][mediaSize].stateLayerSx || {};
				const shapeSx: Sx = theme.shape[variant][shape][mediaSize] || {};
				acc[breakpoint] = { ...sizeSx, ...shapeSx };
			}

			return acc;
		}, {});

		const start: Sx | undefined = { ...mediaSx.start };
		return { sx: { ...start, mlg: mediaSx.mlg }, stateStyles };
	}

	const sizeSx: Sx = theme.size[variant][size].stateLayerSx || {};
	const shapeSx: Sx = theme.shape[variant][shape][size] || {};

	return { sx: { ...sizeSx, ...shapeSx }, stateStyles };
};
