import getSeparatorSx from './getSeparatorSx';
import { MediaSx, Sx } from '../../box/box.types';
import theme from '../../../common/themes/day';

describe('Получение стилей разделителя', () => {
	test('Разделитель скрыт, когда скрыт элемент слева от него', () => {
		const siblingSx = { display: 'none', msm: { display: 'flex' } };
		const parentSx = {};

		expect(getSeparatorSx(theme, parentSx, siblingSx, false)).toEqual(
			expect.objectContaining({ display: 'none' })
		);
		expect(getSeparatorSx(theme, parentSx, siblingSx, false)).toEqual(
			expect.objectContaining({ msm: { display: 'block' } })
		);
	});

	test('Стили разделителя учитывают ориентацию родительского Flex', () => {
		const siblingSx = {};
		const parentSx: Sx | MediaSx = {
			flexDirection: 'column',
			msm: { flexDirection: 'row' },
		};
		expect(getSeparatorSx(theme, parentSx, siblingSx, false)).toEqual(
			expect.objectContaining({ minWidth: '100%', minHeight: '1px' })
		);
		expect(getSeparatorSx(theme, parentSx, siblingSx, false)).toEqual(
			expect.objectContaining({ minHeight: '1px', minWidth: '100%' })
		);
		expect(getSeparatorSx(theme, parentSx, siblingSx, false)).toEqual(
			expect.objectContaining({
				msm: expect.objectContaining({ minHeight: '100%', minWidth: '1px' }),
			})
		);
	});
});
