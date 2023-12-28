import { ButtonTheme } from '../button.theme.types';
import { TTheme } from '../../../common/types';
import theme from '../../../common/themes/day';
import { getBtnStateLayerStylesAsString } from './getBtnStateLayerStylesAsString';

const buttonTheme: ButtonTheme = {
	variant: {
		key: {
			primary: {
				default: {
					stateLayer: { backgroundColor: 'transparent' },
				},
				hover: {
					stateLayer: {
						backgroundColor: (t) => t.colors.state.common.hoverLight12,
					},
				},
				focus: {
					stateLayer: {
						backgroundColor: (t) => t.colors.state.common.hoverLight12,
					},
				},
				active: {
					stateLayer: {
						backgroundColor: (t) => t.colors.state.common.activeLight24,
					},
				},
				selected: {
					stateLayer: {
						backgroundColor: (t) => t.colors.state.common.selectedLight12,
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
	state: {
		common: {
			hoverLight12: 'hoverLight12',
			activeLight24: 'activeLight24',
			selectedLight12: 'selectedLight12',
		},
	},
};

const sampleTheme: TTheme = {
	...theme,
	btn: buttonTheme,
	colors: colorTheme,
};

describe('Получение строки стилей второго словя кнопки в зависимости от варианта, типа, формы и размера с медиазапросами', () => {
	test('Возвращает строку стилей второго словя кнопки в зависимости от варианта, типа, формы и размера с медиазапросами', () => {
		const expectedResult = `
		padding: 10px 16px;border-radius: 7px;
		background-color: transparent;     
    &:hover {
    	background-color: hoverLight12;
    }
    &:focus {
    	background-color: hoverLight12;
    }
    &:active {
    	background-color: activeLight24;
    }
    &.selected {
    	background-color: selectedLight12;
    }
    &.disabled {
    	background-color: transparent;
    }
    @media screen and (min-width: 640px) {padding: 8px 12px;border-radius: 6px;}
		`;

		const regex = /[\s]+/g;

		const actualResult = getBtnStateLayerStylesAsString(
			sampleTheme,
			'key',
			'primary',
			'round',
			'medium',
			false
		);

		const cleanExpectedResult = expectedResult.replace(regex, ' ').trim();
		const cleanActualResult = actualResult.replace(regex, ' ').trim();

		expect(cleanActualResult).toEqual(cleanExpectedResult);
	});
});

describe('Получение строки стилей второго словя кнопки в зависимости от варианта, типа, формы и размера без медиазапросов', () => {
	test('Возвращает строку стилей второго словя кнопки в зависимости от варианта, типа, формы и размера без медиазапросов', () => {
		const expectedResult = `
		padding: 10px 16px;border-radius: 7px;
		background-color: transparent;     
    &:hover {
    	background-color: hoverLight12;
    }
    &:focus {
    	background-color: hoverLight12;
    }
    &:active {
    	background-color: activeLight24;
    }
    &.selected {
    	background-color: selectedLight12;
    }
    &.disabled {
    	background-color: transparent;
    }    
		`;

		const regex = /[\s]+/g;

		const actualResult = getBtnStateLayerStylesAsString(
			sampleTheme,
			'key',
			'primary',
			'round',
			'medium',
			true
		);

		const cleanExpectedResult = expectedResult.replace(regex, ' ').trim();
		const cleanActualResult = actualResult.replace(regex, ' ').trim();

		expect(cleanActualResult).toEqual(cleanExpectedResult);
	});
});
