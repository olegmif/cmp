// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ButtonTheme } from '../button.theme.types';
import { getBtnStateLayerStyles } from './getBtnStateLayerStyles';
import { getBtnIconStyles } from './getBtnIconStyles';
import { getBtnIconStylesString } from './getBtnIconStylesString';
import {
	TDefaultTextVariants,
	TTextVariants,
	TTheme,
} from '../../../common/types';
import { InputTextTheme } from '../../input-text/input.theme.types';
import theme from '../../../common/themes/day';

const buttonTheme: ButtonTheme = {
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

const testTheme: TTheme = {
	colors: theme.colors,
	unifiedColors: theme.unifiedColors,
	buttons: {},
	btn: buttonTheme,
	typography: {},
	text: {},
	inputText: {},
};

describe('Получение строки стилей иконок кнопки в зависимости от варианта, типа и размера кнопки', () => {
	test('Возвращает строку стилей иконок кнопки с медиазапросами', () => {
		const expectedResult = `
			font-size: 20px;
			@media screen and (min-width: 640px) {
				font-size: 16px;
			}
		`;

		const actualResult = getBtnIconStylesString(
			testTheme,
			'key',
			'primary',
			'medium',
			false
		);
		const regex = /[\s]+/g;

		const cleanExpectedResult = expectedResult.replace(regex, '').trim();
		const cleanActualResult = actualResult.replace(regex, '').trim();

		expect(cleanActualResult).toEqual(cleanExpectedResult);
	});

	test('Возвращает строку стилей иконок кнопки без медиазапросов', () => {
		const expectedResult = `
			font-size: 20px;			
		`;

		const actualResult = getBtnIconStylesString(
			testTheme,
			'key',
			'primary',
			'medium',
			true
		);
		const regex = /[\s]+/g;

		const cleanExpectedResult = expectedResult.replace(regex, '').trim();
		const cleanActualResult = actualResult.replace(regex, '').trim();

		expect(cleanActualResult).toEqual(cleanExpectedResult);
	});
});
