import { ButtonTheme } from '../button.theme.types';
import { TTheme } from '../../../common/types';
import theme from '../../../common/themes/day';
import { getBtnWrapperStylesAsString } from './getBtnWrapperStylesAsString';

const buttonTheme: ButtonTheme = {
	variant: {
		key: {
			primary: {
				default: {
					wrapper: { backgroundColor: 'transparent' },
				},
				hover: {
					wrapper: {
						backgroundColor: (t) => t.colors.state.common.hoverLight12,
					},
				},
				focus: {
					wrapper: {
						backgroundColor: (t) => t.colors.state.common.hoverLight12,
					},
				},
				active: {
					wrapper: {
						backgroundColor: (t) => t.colors.state.common.activeLight24,
					},
				},
				selected: {
					wrapper: {
						backgroundColor: (t) => t.colors.state.common.selectedLight12,
					},
				},
				disabled: {
					wrapper: {
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

describe('Получение строки стилей первого словя кнопки в зависимости от варианта, типа, формы и размера с медиазапросами', () => {
	test('Возвращает строку стилей первого словя кнопки в зависимости от варианта, типа, формы и размера с медиазапросами', () => {
		const expectedResult = `
		border-radius: 7px;
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
    @media screen and (min-width: 640px) {border-radius: 6px;}
		`;

		const regex = /[\s]+/g;

		const actualResult = getBtnWrapperStylesAsString(
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

describe('Получение строки стилей первого словя кнопки в зависимости от варианта, типа, формы и размера без медиазапросов', () => {
	test('Возвращает строку стилей первого словя кнопки в зависимости от варианта, типа, формы и размера без медиазапросов', () => {
		const expectedResult = `
		border-radius: 7px;
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

		const actualResult = getBtnWrapperStylesAsString(
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
