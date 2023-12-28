// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ButtonTheme } from '../button.theme.types';
import { getBtnStateLayerStyles } from './getBtnStateLayerStyles';

const theme: ButtonTheme = {
	variant: {
		key: {
			primary: {
				default: {
					stateLayer: { backgroundColor: 'transparent' },
				},
				hover: {
					stateLayer: {
						backgroundColor: (t) =>
							t.colors.state.common.hoverLight12 as string,
					},
				},
				focus: {
					stateLayer: {
						backgroundColor: (t) =>
							t.colors.state.common.hoverLight12 as string,
					},
				},
				active: {
					stateLayer: {
						backgroundColor: (t) =>
							t.colors.state.common.activeLight24 as string,
					},
				},
				selected: {
					stateLayer: {
						backgroundColor: (t) =>
							t.colors.state.common.selectedLight12 as string,
					},
				},
				disabled: {
					stateLayer: {
						backgroundColor: 'transparent',
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
		state: {
			common: {
				hoverLight12: 'hoverLight12',
				activeLight24: 'activeLight24',
				selectedLight12: 'selectedLight12',
			},
		},
	},
};

describe('Получение стилей второго словя кнопки в зависимости от варианта, типа, формы и размера с данными для медиазапросов', () => {
	test('Возвращает стили второго словя кнопки в зависимости от варианта, типа, формы и размера с данными для медиазапросов', () => {
		const expectedResult = {
			stateStyles: {
				default: { backgroundColor: 'transparent' },
				hover: {
					backgroundColor: (t) => t.colors.state.common.hoverLight12 as string,
				},
				focus: {
					backgroundColor: (t) => t.colors.state.common.hoverLight12 as string,
				},
				active: {
					backgroundColor: (t) => t.colors.state.common.activeLight24 as string,
				},
				selected: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight12 as string,
				},
				disabled: { backgroundColor: 'transparent' },
			},
			sx: {
				borderRadius: '7px',
				padding: '10px 16px',
				mlg: { borderRadius: '6px', padding: '8px 12px' },
			},
		};

		const expectedStateStyles = {
			default: { backgroundColor: 'transparent' },
			hover: { backgroundColor: expect.any(Function) },
			focus: { backgroundColor: expect.any(Function) },
			active: { backgroundColor: expect.any(Function) },
			selected: { backgroundColor: expect.any(Function) },
			disabled: { backgroundColor: 'transparent' },
		};

		const actualResult = getBtnStateLayerStyles(
			theme,
			'key',
			'primary',
			'round',
			'medium',
			false
		);
		expect(actualResult.stateStyles).toEqual(expectedStateStyles);

		expect(actualResult.stateStyles.hover.backgroundColor(colorTheme)).toEqual(
			'hoverLight12'
		);

		expect(actualResult.stateStyles.focus.backgroundColor(colorTheme)).toEqual(
			'hoverLight12'
		);

		expect(actualResult.stateStyles.active.backgroundColor(colorTheme)).toEqual(
			'activeLight24'
		);
		expect(
			actualResult.stateStyles.selected.backgroundColor(colorTheme)
		).toEqual('selectedLight12');

		expect(actualResult.stateStyles.default.backgroundColor).toEqual(
			'transparent'
		);

		expect(actualResult.stateStyles.disabled.backgroundColor).toEqual(
			'transparent'
		);

		expect(actualResult.sx).toEqual({
			borderRadius: '7px',
			padding: '10px 16px',
			mlg: { borderRadius: '6px', padding: '8px 12px' },
		});
	});
});

describe('Получение стилей второго словя кнопки в зависимости от варианта, типа, формы и размера без данных для медиазапросов', () => {
	test('Возвращает стили второго словя кнопки в зависимости от варианта, типа, формы и размера без данных для медиазапросов', () => {
		const expectedResult = {
			stateStyles: {
				default: { backgroundColor: 'transparent' },
				hover: {
					backgroundColor: (t) => t.colors.state.common.hoverLight12 as string,
				},
				focus: {
					backgroundColor: (t) => t.colors.state.common.hoverLight12 as string,
				},
				active: {
					backgroundColor: (t) => t.colors.state.common.activeLight24 as string,
				},
				selected: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight12 as string,
				},
				disabled: { backgroundColor: 'transparent' },
			},
			sx: {
				borderRadius: '7px',
				padding: '10px 16px',
			},
		};

		const actualResult = getBtnStateLayerStyles(
			theme,
			'key',
			'primary',
			'round',
			'medium',
			true
		);

		expect(actualResult.sx).toEqual({
			borderRadius: '7px',
			padding: '10px 16px',
		});
	});
});
