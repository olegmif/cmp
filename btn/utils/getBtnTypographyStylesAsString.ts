import {
	ButtonSizeName,
	ButtonTheme,
	ButtonTypeName,
	ButtonVariantName,
} from '../button.theme.types';
import { getBtnTypographyStyles } from './getBtnTypographyStyles';
import { TTheme } from '../../../common/types';
import { getBoxStyles, getMediaQueriesString } from '../../box/box.component';
import { MediaSx, Sx } from '../../box/box.types';
import {
	BtnLabelMediaStyles,
	BtnTypographyStateStyles,
	ButtonLabelStyle,
} from './getBtnStyles';
import { getStylesFromProps } from '../../text/utils/getStylesFromProps';
import { BUTTON_STATE_NAMES } from '../btn.const';
import { BREAKPOINT_NAMES } from '../../../common/constants';

/**
 * Возвращает строку стилей текста кнопки.
 * Если fixedSize содержит false, строка не содержит медиа-запросы для экранов
 * разного размера.
 *
 * @param theme
 * @param variant
 * @param type
 * @param size
 * @param fixedSize
 */
export const getBtnTypographyStylesAsString: (
	theme: TTheme,
	variant: ButtonVariantName,
	type: ButtonTypeName,
	size: ButtonSizeName,
	fixedSize: boolean
) => string = (theme, variant, type, size, fixedSize) => {
	const typographyStyles = getBtnTypographyStyles(
		theme.btn,
		variant,
		type,
		size,
		fixedSize
	);

	const defaultStyles = typographyStyles.styles;
	const defaultStyleString: string = defaultStyles.sx
		? getBoxStyles(theme, defaultStyles.sx)
		: '';

	const { stateStyles } = typographyStyles;

	const defaultStateProps = {
		variant: stateStyles.default.variant || 'body',
		type: stateStyles.default.type || 'regular',
		size: defaultStyles.size || 'medium',
		sx: stateStyles.default.sx || {},
	};

	const defaultStateStylesString = getBoxStyles(theme, {
		...getStylesFromProps(
			theme.text,
			defaultStateProps.variant,
			defaultStateProps.type,
			defaultStateProps.size,
			true
		),
		...defaultStateProps.sx,
	});

	const defaultMediaStyles = defaultStyles as BtnLabelMediaStyles;
	const mediaQueriesStyles = BREAKPOINT_NAMES.reduce<MediaSx>(
		(acc, breakpoint) => {
			if (defaultMediaStyles[breakpoint]) {
				const breakpointSizeSx = getStylesFromProps(
					theme.text,
					defaultStateProps.variant,
					defaultStateProps.type,
					defaultMediaStyles[breakpoint]?.size || 'medium',
					true
				);
				acc[breakpoint] = {
					...breakpointSizeSx,
					...defaultMediaStyles[breakpoint]?.sx,
				};
			}
			return acc;
		},
		{}
	);

	const defaultMediaQueriesString = getMediaQueriesString(
		theme,
		mediaQueriesStyles
	);

	return `${defaultStyleString} ${defaultStateStylesString} ${defaultMediaQueriesString}`;
};
