// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ButtonTheme } from '../button.theme.types';
import { getBtnStateLayerStyles } from './getBtnStateLayerStyles';
import { getBtnWrapperStyles } from './getBtnWrapperStyles';

const theme: ButtonTheme = {
	variant: {
		key: {
			primary: {
				default: {
					wrapper: {
						backgroundColor: (t) => t.colors.key.defaultLight as string,
					},
				},
				hover: {
					wrapper: {
						backgroundColor: (t) => t.colors.key.defaultLight as string,
					},
				},
				focus: {
					wrapper: {
						backgroundColor: (t) => t.colors.key.defaultLight as string,
					},
				},
				active: {
					wrapper: {
						backgroundColor: (t) => t.colors.key.defaultLight as string,
					},
				},
				selected: {
					wrapper: {
						backgroundColor: (t) => t.colors.key.defaultLight as string,
					},
				},
				disabled: {
					wrapper: {
						backgroundColor: (t) => t.colors.key.defaultLight as string,
						opacity: 0.24,
					},
				},
			},
		},
	},
	shape: {
		key: {
			square: {
				small: { borderRadius: '0px' },
				medium: { borderRadius: '0px' },
				large: { borderRadius: '0px' },
			},
			round: {
				small: { borderRadius: '6px' },
				medium: { borderRadius: '7px' },
				large: { borderRadius: '8px' },
			},
		},
	},
	size: {
		key: {
			small: {
				stateLayerSx: { padding: '8px 12px' },
			},
			medium: {
				stateLayerSx: { padding: '10px 16px' },
			},
			large: {
				stateLayerSx: { padding: '12px 20px' },
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
	colors: {
		key: {
			defaultLight: 'defaultLight',
		},
	},
};

describe('Получение стилей первого словя кнопки в зависимости от варианта, типа, формы и размера с данными для медиазапросов', () => {
	test('Возвращает стили первого словя кнопки в зависимости от варианта, типа, формы и размера с данными для медиазапросов', () => {
		const expectedResult = {
			stateStyles: {
				default: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				hover: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				focus: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				active: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				selected: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				disabled: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
					opacity: 0.24,
				},
			},
			sx: {
				borderRadius: '7px',
				mlg: { borderRadius: '6px' },
			},
		};

		const expectedStateStyles = {
			default: { backgroundColor: expect.any(Function) },
			hover: { backgroundColor: expect.any(Function) },
			focus: { backgroundColor: expect.any(Function) },
			active: { backgroundColor: expect.any(Function) },
			selected: { backgroundColor: expect.any(Function) },
			disabled: { backgroundColor: expect.any(Function), opacity: 0.24 },
		};

		const actualResult = getBtnWrapperStyles(
			theme,
			'key',
			'primary',
			'round',
			'medium',
			false
		);
		expect(actualResult.stateStyles).toEqual(expectedStateStyles);

		expect(actualResult.stateStyles.hover.backgroundColor(colorTheme)).toEqual(
			'defaultLight'
		);

		expect(actualResult.stateStyles.focus.backgroundColor(colorTheme)).toEqual(
			'defaultLight'
		);

		expect(actualResult.stateStyles.active.backgroundColor(colorTheme)).toEqual(
			'defaultLight'
		);
		expect(
			actualResult.stateStyles.selected.backgroundColor(colorTheme)
		).toEqual('defaultLight');

		expect(
			actualResult.stateStyles.default.backgroundColor(colorTheme)
		).toEqual('defaultLight');

		expect(
			actualResult.stateStyles.disabled.backgroundColor(colorTheme)
		).toEqual('defaultLight');

		expect(actualResult.sx).toEqual({
			borderRadius: '7px',
			mlg: { borderRadius: '6px' },
		});
	});
});
