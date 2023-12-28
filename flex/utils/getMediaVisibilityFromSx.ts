import { MediaSx, Sx } from '../../box/box.types';
import { BREAKPOINT_NAMES, BreakpointName } from '../../../common/constants';

export type ChildMediaVisibility = { [key in BreakpointName]?: boolean };

/**
 * возвращает объект, где имена полей соответствуют названиям брекпоинтов,
 * а значения равны true, если по данным sx элемент отображается на экране
 * данной ширины или false, если скрыт.
 */
const getMediaVisibilityFromSx: (sx: Sx | MediaSx) => ChildMediaVisibility = (
	sx
) => {
	const start = (sx as Sx)?.display !== 'none';
	const visibility: Array<boolean> = [start];

	const visibilityArray = BREAKPOINT_NAMES.reduce<Array<boolean>>(
		(acc, breakpoint) => {
			if (breakpoint !== 'start') {
				const cssDisplay = (sx as MediaSx)?.[breakpoint]?.display;
				return [
					...acc,
					cssDisplay ? cssDisplay !== 'none' : acc[acc.length - 1],
				];
			}
			return acc;
		},
		visibility
	);

	return BREAKPOINT_NAMES.reduce((acc, breakpoint, index) => {
		return { ...acc, [breakpoint]: visibilityArray[index] };
	}, {});
};

export default getMediaVisibilityFromSx;
