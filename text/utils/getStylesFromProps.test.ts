import { TTextVariants } from '../../../common/types';
import { getStylesFromProps } from './getStylesFromProps';

const t: TTextVariants = {
	body: {
		regular: {
			medium: {
				msm: {
					fontFamily: 'Inter',
					fontSize: '14px',
					fontStyle: 'normal',
					fontWeight: 400,
					lineHeight: '20px',
				},
				mlg: {
					fontFamily: 'Inter',
					fontSize: '12px',
					fontStyle: 'normal',
					fontWeight: 400,
					lineHeight: '16px',
					letterSpacing: '0.12px',
				},
			},
		},
	},
};

describe('Получение стилей текста в зависимости от варианта, типа и размера с данными для медиазапросов', () => {
	test('Возвращает стили текста с в зависимости от варианта, типа и размера с данными для медиазапросов', () => {
		const expectedResult = {
			fontFamily: 'Inter',
			fontSize: '14px',
			fontStyle: 'normal',
			fontWeight: 400,
			lineHeight: '20px',
			msm: {
				fontFamily: 'Inter',
				fontSize: '14px',
				fontStyle: 'normal',
				fontWeight: 400,
				lineHeight: '20px',
			},
			mlg: {
				fontFamily: 'Inter',
				fontSize: '12px',
				fontStyle: 'normal',
				fontWeight: 400,
				letterSpacing: '0.12px',
				lineHeight: '16px',
			},
		};

		expect(getStylesFromProps(t, 'body', 'regular', 'medium', false)).toEqual(
			expectedResult
		);
	});
});

describe('Получение стилей текста в зависимости от варианта, типа и размера без данных для медиазапросов', () => {
	test('Возвращает стили текста с в зависимости от варианта, типа и размера без данных для медиазапросов', () => {
		const expectedResult = {
			fontFamily: 'Inter',
			fontSize: '14px',
			fontStyle: 'normal',
			fontWeight: 400,
			lineHeight: '20px',
		};

		expect(getStylesFromProps(t, 'body', 'regular', 'medium', true)).toEqual(
			expectedResult
		);
	});
});
