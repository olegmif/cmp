import React, { ReactNode } from 'react';
// import { describe, expect, test } from '@jest/globals';
import Box from '../../box';
import getMediaEdgesVisibleChildren from './getMediaEdgesVisibleChildren';

describe('Получение индексов первого и последнего видимых элементов на экранах разной ширины', () => {
	test('Все элементы видны на всех экранах (null и undefined игнорируются; фрагменты, строки, числа считаются видимыми)', () => {
		const children: ReactNode[] = [
			<Box key="0" />,
			'some string',
			null,
			undefined,
			<>
				<Box />
				<Box />
			</>,
			10,
			<Box key="1" />,
		];
		const expectedResult = {
			start: { first: 0, last: 4 },
			msm: { first: 0, last: 4 },
			mlg: { first: 0, last: 4 },
			tsm: { first: 0, last: 4 },
			tlg: { first: 0, last: 4 },
			dxs: { first: 0, last: 4 },
			dsm: { first: 0, last: 4 },
			dmd: { first: 0, last: 4 },
			dlg: { first: 0, last: 4 },
			dxl: { first: 0, last: 4 },
		};
		expect(getMediaEdgesVisibleChildren(children)).toEqual(expectedResult);
	});

	test('Все элементы, которые можно скрыть через sx, скрыты на всех экранах (null и undefined игнорируются; фрагменты, строки, числа считаются видимыми)', () => {
		const children: ReactNode[] = [
			<Box key="0" sx={{ display: 'none' }} />,
			'some string',
			null,
			undefined,
			<>
				<Box />
				<Box />
			</>,
			10,
			<Box key="1" sx={{ display: 'none' }} />,
		];
		const expectedResult = {
			start: { first: 1, last: 3 },
			msm: { first: 1, last: 3 },
			mlg: { first: 1, last: 3 },
			tsm: { first: 1, last: 3 },
			tlg: { first: 1, last: 3 },
			dxs: { first: 1, last: 3 },
			dsm: { first: 1, last: 3 },
			dmd: { first: 1, last: 3 },
			dlg: { first: 1, last: 3 },
			dxl: { first: 1, last: 3 },
		};
		expect(getMediaEdgesVisibleChildren(children)).toEqual(expectedResult);
	});

	test('Все элементы, которые можно скрыть через sx, скрыты на всех экранах (null и undefined игнорируются; фрагменты, строки, числа считаются видимыми)', () => {
		const children: ReactNode[] = [
			<Box key="0" sx={{ display: 'none' }} />,
			'some string',
			null,
			undefined,
			<>
				<Box />
				<div />
			</>,
			10,
			<Box key="1" sx={{ display: 'none' }} />,
		];
		const expectedResult = {
			start: { first: 1, last: 3 },
			msm: { first: 1, last: 3 },
			mlg: { first: 1, last: 3 },
			tsm: { first: 1, last: 3 },
			tlg: { first: 1, last: 3 },
			dxs: { first: 1, last: 3 },
			dsm: { first: 1, last: 3 },
			dmd: { first: 1, last: 3 },
			dlg: { first: 1, last: 3 },
			dxl: { first: 1, last: 3 },
		};
		expect(getMediaEdgesVisibleChildren(children)).toEqual(expectedResult);
	});
});
