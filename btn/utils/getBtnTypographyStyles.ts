import {
	BtnLabelMediaStyles,
	BtnTyporgaphyStyles,
	ButtonLabelStyle,
} from './getBtnStyles';
import {
	ButtonSizeName,
	ButtonStateName,
	ButtonTheme,
	ButtonTypeName,
	ButtonVariantName,
} from '../button.theme.types';
import {
	TextSizeName,
	TextTypeName,
	TextVariantName,
	TTheme,
} from '../../../common/types';
import { BUTTON_STATE_NAMES } from '../btn.const';
import { MediaSx, Sx } from '../../box/box.types';
import { BREAKPOINT_NAMES, BreakpointName } from '../../../common/constants';

/**
 * Возвращает набор стилей для оформления текста кнопки
 * в зависимости от варианта, типа и размера кнопки.
 * Если fixedSize содержит false, в набор не включаются данные для
 * построения медиа-запросов.
 *
 * @param variant
 * @param type
 * @param size
 * @param fixedSize
 */
export const getBtnTypographyStyles: (
	theme: ButtonTheme,
	variant: ButtonVariantName,
	type: ButtonTypeName,
	size: ButtonSizeName,
	fixedSize: boolean
) => BtnTyporgaphyStyles = (theme, variant, type, size, fixedSize) => {
	const stateStyles = BUTTON_STATE_NAMES.reduce<{
		[key in ButtonStateName]: ButtonLabelStyle;
	}>((acc, buttonState) => {
		if (theme.variant[variant][type][buttonState].typography) {
			acc[buttonState] =
				theme.variant[variant][type][buttonState].typography || {};
		}
		return acc;
	}, {});

	if (!fixedSize) {
		const mediaStyles = BREAKPOINT_NAMES.reduce<BtnLabelMediaStyles>(
			(acc, breakpoint) => {
				if (breakpoint !== 'start') {
					const mediaSize = theme.media[size][breakpoint];

					if (mediaSize) {
						const sizeStyles = theme.size[variant][mediaSize].typography || {};
						acc[breakpoint] = { ...sizeStyles };
					}
				}
				return acc;
			},
			{}
		);

		const mediaSize = theme.media[size].start;
		const start = mediaSize ? theme.size[variant][mediaSize].typography : {};
		return { styles: { ...start, ...mediaStyles }, stateStyles };
	}

	const sizeStyles = theme.size[variant][size].typography || {};
	return { styles: sizeStyles, stateStyles };
};
