// import { describe, expect, test } from '@jest/globals';
import getMediaVisibilityFromSx from './getMediaVisibilityFromSx';
import { MediaSx, Sx } from '../../box/box.types';
import { BreakpointName } from '../../../common/constants';

describe('Получение объекта, описывающего видимость элемента на экранах разной ширины по его свойству sx', () => {
	test('Элемент отображается на экранах всех размеров', () => {
		const sx: Sx | MediaSx = {
			display: 'block',
		};
		const expectedResult: { [key in BreakpointName]: boolean } = {
			start: true,
			msm: true,
			mlg: true,
			tsm: true,
			tlg: true,
			dxs: true,
			dsm: true,
			dmd: true,
			dlg: true,
			dxl: true,
		};
		expect(getMediaVisibilityFromSx(sx)).toEqual(expectedResult);
	});

	test('Элемент скрыт на экранах всех размеров', () => {
		const sx: Sx | MediaSx = {
			display: 'none',
		};
		const expectedResult: { [key in BreakpointName]: boolean } = {
			start: false,
			msm: false,
			mlg: false,
			tsm: false,
			tlg: false,
			dxs: false,
			dsm: false,
			dmd: false,
			dlg: false,
			dxl: false,
		};
		expect(getMediaVisibilityFromSx(sx)).toEqual(expectedResult);
	});

	test('Элемент изначально скрыт, отображается на msm и последующих размерах экрана до dsm, после чего снова скрыт', () => {
		const sx: Sx | MediaSx = {
			display: 'none',
			mlg: { display: 'block' },
			dsm: { display: 'none' },
		};
		const expectedResult: { [key in BreakpointName]: boolean } = {
			start: false,
			msm: false,
			mlg: true,
			tsm: true,
			tlg: true,
			dxs: true,
			dsm: false,
			dmd: false,
			dlg: false,
			dxl: false,
		};
		expect(getMediaVisibilityFromSx(sx)).toEqual(expectedResult);
	});

	test('Элемент изначально отображается, потом скрыт, начиная с tlg', () => {
		const sx: Sx | MediaSx = {
			display: 'flex',
			tlg: { display: 'none' },
		};
		const expectedResult: { [key in BreakpointName]: boolean } = {
			start: true,
			msm: true,
			mlg: true,
			tsm: true,
			tlg: false,
			dxs: false,
			dsm: false,
			dmd: false,
			dlg: false,
			dxl: false,
		};
		expect(getMediaVisibilityFromSx(sx)).toEqual(expectedResult);
	});
});
