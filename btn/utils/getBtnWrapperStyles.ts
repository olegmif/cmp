import { BtnStateLayerStyles, BtnWrapperStyles } from './getBtnStyles';
import {
	ButtonShapeName,
	ButtonSizeName,
	ButtonStateName,
	ButtonTheme,
	ButtonTypeName,
	ButtonVariantName,
} from '../button.theme.types';
import { TTheme } from '../../../common/types';
import { MediaSx, Sx } from '../../box/box.types';
import { BREAKPOINT_NAMES, BreakpointName } from '../../../common/constants';
import { BUTTON_STATE_NAMES } from '../btn.const';

/**
 * Возвращает набор стилей для нижнего слоя кнопки (тег a или button)
 * в зависимости от варианта, типа, формы и размера кнопки.
 * Если fixedSize содержит false, в набор не включаются данные для
 * построения медиа-запросов.
 *
 * @param theme
 * @param variant
 * @param type
 * @param shape
 * @param size
 * @param fixedSize
 */
export const getBtnWrapperStyles: (
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
				theme.variant[variant][type][buttonState].wrapper || {};
		}
		return acc;
	}, {});

	if (!fixedSize) {
		const mediaSx = BREAKPOINT_NAMES.reduce<MediaSx>((acc, breakpoint) => {
			const mediaSize = theme.media[size][breakpoint];

			if (mediaSize) {
				const shapeSx: Sx = theme.shape[variant][shape][mediaSize] || {};
				acc[breakpoint] = { ...shapeSx };
			}

			return acc;
		}, {});

		const start: Sx | undefined = { ...mediaSx.start };

		return { sx: { ...start, mlg: mediaSx.mlg }, stateStyles };
	}

	const shapeSx: Sx = theme.shape[variant][shape][size] || {};

	return { sx: { ...shapeSx }, stateStyles };
};
