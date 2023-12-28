import {
	ButtonTheme,
	ButtonVariantSizes,
	ButtonVariantTypes,
} from '../button.theme.types';
import { getBtnTypographyStyles } from './getBtnTypographyStyles';
import { TTheme } from '../../../common/types';
import { BREAKPOINT_NAMES } from '../../../common/constants';

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

const THEME: TTheme = {
	colors: COLORS,
	unifiedColors: {},
	buttons: {},
	btn: BUTTON_THEME,
	typography: {},
	text: {},
	inputText: {
		states: {},
		shapes: {},
		sizes: {},
		mediaSizes: {},
	},
};

describe('Получение стилей типографики в зависимости от варианта, типа, формы и размера кнопки с данными для медиазапросов', () => {
	test('Возвращает правильные варианты и размеры типографики для разных состояний кнопки', () => {
		const actualResult = getBtnTypographyStyles(
			BUTTON_THEME,
			'key',
			'primary',
			'medium',
			false
		);

		expect(actualResult).toMatchObject({
			stateStyles: {
				default: { variant: 'control', type: 'heading' },
				hover: { variant: 'body', type: 'regular' },
				focus: { variant: 'control', type: 'heading' },
				active: { variant: 'control', type: 'heading' },
				selected: { variant: 'control', type: 'heading' },
				disabled: { variant: 'control', type: 'heading' },
			},
		});
	});

	test('Возвращает правильные стили типографики для разных состояний кнопки', () => {
		const actualResult = getBtnTypographyStyles(
			BUTTON_THEME,
			'key',
			'primary',
			'medium',
			false
		);

		const expectedResult: any = {
			stateStyles: {
				default: { sx: { color: 'rgba(0,0,0,0)' } },
				hover: { sx: { color: '#ffffff' } },
				focus: { sx: { color: expect.any(Function) } },
				active: { sx: { color: expect.any(Function) } },
				selected: { sx: { color: 'transparent' } },
				disabled: { sx: { color: expect.any(Function) } },
			},
		};

		expect(actualResult).toMatchObject(expectedResult);
	});

	test('Возвращает правильные стили типографики для разных размеров экрана', () => {
		const actualResult = getBtnTypographyStyles(
			BUTTON_THEME,
			'key',
			'primary',
			'medium',
			false
		);

		const expectedResult: any = {
			styles: {
				sx: { padding: '0 5px' },
				size: 'medium',
				mlg: { sx: { padding: '0 4px' }, size: 'small' },
			},
		};

		expect(actualResult).toMatchObject(expectedResult);
	});

	test('При установленном флажке fixedSize не возвращает стили типографики для создания медиа-запросов', () => {
		const actualResult = getBtnTypographyStyles(
			BUTTON_THEME,
			'key',
			'primary',
			'medium',
			true
		);

		const expectedResult: any = {
			styles: {
				sx: { padding: '0 5px' },
				size: 'medium',
			},
		};

		BREAKPOINT_NAMES.forEach((breakpoint) => {
			expect(actualResult).not.toHaveProperty(breakpoint);
		});

		expect(actualResult).toMatchObject(expectedResult);
	});
});
