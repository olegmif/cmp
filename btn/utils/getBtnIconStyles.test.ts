// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ButtonTheme } from '../button.theme.types';
import { getBtnStateLayerStyles } from './getBtnStateLayerStyles';
import { getBtnIconStyles } from './getBtnIconStyles';

const theme: ButtonTheme = {
	variant: {
		key: {
			primary: {
				default: {
					icon: {
						color: (t) => t.unifiedColors.icon.primaryDark as string,
					},
				},
				hover: {
					icon: {
						color: (t) => t.unifiedColors.icon.primaryDark as string,
					},
				},
				focus: {
					icon: {
						color: (t) => t.unifiedColors.icon.primaryDark as string,
					},
				},
				active: {
					icon: {
						color: (t) => t.unifiedColors.icon.primaryLight as string,
					},
				},
				selected: {
					icon: {
						color: (t) => t.unifiedColors.icon.primaryLight as string,
					},
				},
				disabled: {
					icon: {
						color: (t) => t.unifiedColors.icon.primaryDark as string,
					},
				},
			},
		},
	},
	shape: {},
	size: {
		key: {
			small: {
				icon: {
					sx: { fontSize: '16px' },
					size: 'small',
				},
			},
			medium: {
				icon: {
					sx: { fontSize: '20px' },
					size: 'medium',
				},
			},
			large: {
				icon: {
					sx: { fontSize: '24px' },
					size: 'large',
				},
			},
		},
	},
	media: {
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
	},
};

const colorTheme = {
	unifiedColors: {
		icon: {
			primaryDark: 'primaryDark',
			primaryLight: 'primaryLight',
		},
	},
};

describe('Получение стилей иконок кнопки в зависимости от варианта, типа, формы и размера с данными для медиазапросов', () => {
	test('Возвращает стили иконок кнопки для разных состояний', () => {
		const expectedStateStyles = {
			default: { color: expect.any(Function) },
			hover: { color: expect.any(Function) },
			focus: { color: expect.any(Function) },
			active: { color: expect.any(Function) },
			selected: { color: expect.any(Function) },
			disabled: { color: expect.any(Function) },
		};

		const actualResult = getBtnIconStyles(
			theme,
			'key',
			'primary',
			'medium',
			false
		);
		expect(actualResult.stateStyles).toEqual(expectedStateStyles);

		expect(actualResult.stateStyles.default.color(colorTheme)).toEqual(
			'primaryDark'
		);

		expect(actualResult.stateStyles.hover.color(colorTheme)).toEqual(
			'primaryDark'
		);

		expect(actualResult.stateStyles.focus.color(colorTheme)).toEqual(
			'primaryDark'
		);

		expect(actualResult.stateStyles.active.color(colorTheme)).toEqual(
			'primaryLight'
		);
		expect(actualResult.stateStyles.selected.color(colorTheme)).toEqual(
			'primaryLight'
		);

		expect(actualResult.stateStyles.disabled.color(colorTheme)).toEqual(
			'primaryDark'
		);
	});

	test('Возвращает стили иконок для разных размеров экрана', () => {
		const actualResult = getBtnIconStyles(
			theme,
			'key',
			'primary',
			'medium',
			false
		);

		expect(actualResult.sx).toEqual({
			fontSize: '20px',
			mlg: { fontSize: '16px' },
		});
	});
});
