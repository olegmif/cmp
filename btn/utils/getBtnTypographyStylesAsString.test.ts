import {
	ButtonTheme,
	ButtonVariantSizes,
	ButtonVariantTypes,
} from '../button.theme.types';
import { getBtnTypographyStyles } from './getBtnTypographyStyles';
import { TTheme } from '../../../common/types';
import { BREAKPOINT_NAMES } from '../../../common/constants';
import { getBtnTypographyStylesAsString } from './getBtnTypographyStylesAsString';
import { getBtnStateLayerStylesAsString } from './getBtnStateLayerStylesAsString';
import theme from '../../../common/themes/day';

const BUTTON_VARIANT_STATES: ButtonVariantTypes = {
	key: {
		primary: {
			default: {
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: 'rgba(0,0,0,0)' },
				},
			},
			hover: {
				typography: {
					variant: 'body',
					type: 'regular',
					sx: { color: '#ffffff' },
				},
			},
			focus: {
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.unified.text.primaryDark as string },
				},
			},
			active: {
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.unified.text.primaryDark as string },
				},
			},
			selected: {
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: 'transparent' },
				},
			},
			disabled: {
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.unified.text.primaryDark as string },
				},
			},
		},
	},
};

const COLORS = {
	colors: {
		state: {
			common: {
				hoverLight12: 'hoverLight12',
				activeLight24: 'activeLight24',
				selectedLight12: 'selectedLight12',
			},
		},
	},
};

const BUTTON_VARIANT_SIZES: ButtonVariantSizes = {
	key: {
		small: {
			typography: {
				sx: { padding: '0 4px' },
				size: 'small',
			},
		},
		medium: {
			typography: {
				sx: { padding: '0 5px' },
				size: 'medium',
			},
		},
		large: {
			typography: {
				sx: { padding: '0 6px' },
				size: 'large',
			},
		},
	},
};

export const BUTTON_MEDIA = {
	small: {
		start: 'small',
		mlg: 'small',
	},
	medium: {
		start: 'medium',
		mlg: 'small',
	},
	large: {
		start: 'large',
		mlg: 'medium',
	},
};

const BUTTON_THEME: ButtonTheme = {
	variant: BUTTON_VARIANT_STATES,
	shape: {},
	size: BUTTON_VARIANT_SIZES,
	media: BUTTON_MEDIA,
};

const THEME: Partial<TTheme> = {
	colors: COLORS,
	btn: BUTTON_THEME,
	text: theme.text,
};

describe('Получение стилей типографики в зависимости от варианта, типа, формы и размера кнопки с данными для медиазапросов', () => {
	test('Возвращает правильную строку стилей текста кнопки', () => {
		const actualResult = getBtnTypographyStylesAsString(
			THEME as TTheme,
			'key',
			'primary',
			'medium',
			false
		);

		const expectedResult = `
			padding:0 5px;
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			font-weight: 550;
			line-height: 20px;
			color: rgba(0,0,0,0);
			
			@media screen and( min-width:640px ) {
				font-family: Inter;
				font-size: 12px;
				font-style: normal;
				font-weight: 550;
				line-height: 16px;
				letter-spacing: 0.12px;
				padding:04px;
			}
		`;

		const regex = /[\s]+/g;

		const cleanExpectedResult = expectedResult.replace(regex, '').trim();
		const cleanActualResult = actualResult.replace(regex, '').trim();

		expect(cleanActualResult).toEqual(cleanExpectedResult);
	});
});
