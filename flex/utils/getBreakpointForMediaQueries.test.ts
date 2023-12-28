// import { describe, expect, test } from '@jest/globals';
import { GapMedia } from '../flex.types';
import {
	getBreakpointsForDirectionChanges,
	getBreakpointsForGapChanges,
	getBreakpointsForVisibilityChanges,
} from './getBreakpointsForMediaQueries';
import { MediaSx, Sx } from '../../box/box.types';

describe('Получение списка брекпоинтов, зависящих от gap родительского Flex', () => {
	test('Возвращает список брекпоинтов из gap родительского Flex, если gap задан объектом', () => {
		const gap: GapMedia = { start: 0, msm: 2 };
		expect(getBreakpointsForGapChanges(gap)).toEqual(['start', 'msm']);
	});
	test('Возвращает пустой массив, если gap задан строкой', () => {
		const gap = '10px';
		expect(getBreakpointsForGapChanges(gap)).toEqual([]);
	});
	test('Возвращает пустой массив, если gap задан числом', () => {
		const gap = 2;
		expect(getBreakpointsForGapChanges(gap)).toEqual([]);
	});
});

describe('Получение списка брекпоинтов, зависящих от ориентации родительского Flex', () => {
	test('Возвращает список брекпоинтов из sx родительского Flex, если в этих брекпоинтах упоминается flexDirection', () => {
		const sx: Sx | MediaSx = {
			flexDirection: 'column',
			msm: { flexDirection: 'row' },
			mlg: { flexDirection: 'row' },
		};
		expect(getBreakpointsForDirectionChanges(sx as MediaSx)).toEqual([
			'msm',
			'mlg',
		]);
	});
	test('В полученном списке брекпоинтов отсутствуют те, для которых в sx родительского Flex не задано flexDirection', () => {
		const sx: Sx | MediaSx = {
			flexDirection: 'column',
			msm: { flexDirection: 'row' },
			mlg: { color: 'red' },
			dsm: { flexDirection: 'column' },
		};
		expect(getBreakpointsForDirectionChanges(sx as MediaSx)).not.toContain(
			'mlg'
		);
	});
});

describe('Получение списка брекпоинтов, зависящих от видимости других дочерних элементов во Flex', () => {
	test('Получение списка брекпоинтов, на которых элемент становится/перестает быть первым видимым', () => {
		const edgeIndicesByBreakpoint = {
			start: { first: 0, last: 4 },
			msm: { first: 1, last: 4 },
			mlg: { first: 1, last: 4 },
			tsm: { first: 1, last: 4 },
			tlg: { first: 0, last: 4 },
			dxs: { first: 0, last: 4 },
			dsm: { first: 1, last: 4 },
			dmd: { first: 0, last: 4 },
			dlg: { first: 0, last: 4 },
			dxl: { first: 0, last: 4 },
		};
		expect(
			getBreakpointsForVisibilityChanges(1, edgeIndicesByBreakpoint)
		).toEqual(['start', 'msm', 'tlg', 'dsm', 'dmd']);
	});
	test('Получение списка брекпоинтов, на которых элемент становится/перестает быть последним видимым', () => {
		const edgeIndicesByBreakpoint = {
			start: { first: 0, last: 0 },
			msm: { first: 1, last: 2 },
			mlg: { first: 1, last: 0 },
			tsm: { first: 1, last: 1 },
			tlg: { first: 0, last: 0 },
			dxs: { first: 0, last: 2 },
			dsm: { first: 1, last: 2 },
			dmd: { first: 0, last: 2 },
			dlg: { first: 0, last: 0 },
			dxl: { first: 0, last: 0 },
		};
		expect(
			getBreakpointsForVisibilityChanges(2, edgeIndicesByBreakpoint)
		).toEqual(['start', 'msm', 'mlg', 'dxs', 'dlg']);
	});
	test('Получение списка брекпоинтов, на которых элемент становится/перестает быть первым или последним видимым', () => {
		const edgeIndicesByBreakpoint = {
			start: { first: 0, last: 0 },
			msm: { first: 1, last: 2 },
			mlg: { first: 3, last: 0 },
			tsm: { first: 3, last: 1 },
			tlg: { first: 3, last: 3 },
			dxs: { first: 0, last: 3 },
			dsm: { first: 1, last: 3 },
			dmd: { first: 0, last: 2 },
			dlg: { first: 0, last: 0 },
			dxl: { first: 0, last: 0 },
		};
		expect(
			getBreakpointsForVisibilityChanges(3, edgeIndicesByBreakpoint)
		).toEqual(['start', 'mlg', 'tlg', 'dxs', 'dmd']);
	});
});
