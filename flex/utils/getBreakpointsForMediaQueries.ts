import { GapMedia } from '../flex.types';
import { MediaFirstLastVisibleIndexes } from './getMediaEdgesVisibleChildren';
import { MediaSx, Sx } from '../../box/box.types';
import { BREAKPOINT_NAMES, BreakpointName } from '../../../common/constants';

/**
 * Возвращает список брекпоинтов, для которых нужно создать медиазапросы,
 * отражающие изменение свойства Gap родительского Flex
 *
 * @param parentGap значение свойства Gap родительского Flex
 */
export const getBreakpointsForGapChanges = (
	parentGap: number | string | GapMedia
): Array<string> => {
	return typeof parentGap === 'object' ? Object.keys(parentGap) : [];
};

/**
 * Возвращает список брекпоинтов, для которых нужно создать медиазапросы,
 * отражающие изменение ориентации родительского компонента Flex
 *
 * @param parentSx значние свойства Sx родительского компонента Flex
 */
export const getBreakpointsForDirectionChanges = (
	parentSx: MediaSx
): Array<string> => {
	return BREAKPOINT_NAMES.reduce<Array<string>>((acc, breakpoint) => {
		if (parentSx?.[breakpoint] && parentSx[breakpoint]?.flexDirection) {
			acc.push(breakpoint);
		}
		return acc;
	}, []);
};

const visibilityChanged = (
	childIndex: number,
	edge: 'first' | 'last',
	edgeIndicesByBreakpoint: MediaFirstLastVisibleIndexes,
	breakpoint: string,
	breakpointIndex: number
): boolean => {
	const isOutermostVisible =
		edgeIndicesByBreakpoint[breakpoint as BreakpointName]?.[edge] ===
		childIndex;
	return breakpointIndex > 0
		? isOutermostVisible !==
				(edgeIndicesByBreakpoint[BREAKPOINT_NAMES[breakpointIndex - 1]]?.[
					edge
				] ===
					childIndex)
		: true;
};

export const getBreakpointsForVisibilityChanges = (
	childIndex: number,
	edgeIndicesByBreakpoint: MediaFirstLastVisibleIndexes
): Array<string> => {
	return BREAKPOINT_NAMES.reduce<Array<string>>((acc, breakpoint, index) => {
		if (
			visibilityChanged(
				childIndex,
				'first',
				edgeIndicesByBreakpoint,
				breakpoint,
				index
			) ||
			visibilityChanged(
				childIndex,
				'last',
				edgeIndicesByBreakpoint,
				breakpoint,
				index
			)
		) {
			acc.push(breakpoint);
		}
		return acc;
	}, []);
};

/**
 * Возвращает список имен брекпоинтов (из BREAKPOINT_NAMES), для которых
 * указанному индексом компоненту, дочернему по отношению к Flex, нужно добавить
 * медиа-запросы.
 *
 * @param childIndex индекс дочернего компонента
 * @param parentGap gap родительского компонента
 * @param parentSx sx родительского компонента
 * @param edgeIndicesByBreakpoint список первых и последних видимых дочерних
 * компонентов на экранах разной ширины
 */
const getBreakpointsForMediaQueries: (
	childIndex: number,
	parentGap: (number | string) | GapMedia,
	parentSx: Sx | MediaSx,
	edgeIndicesByBreakpoint: MediaFirstLastVisibleIndexes
) => Array<string> = (
	childIndex,
	parentGap,
	parentSx,
	edgeIndicesByBreakpoint
) => {
	const gapBreakpoints = getBreakpointsForGapChanges(parentGap);
	const directionBreakpoints = getBreakpointsForDirectionChanges(
		parentSx as MediaSx
	);
	const marginBreakpoints = getBreakpointsForVisibilityChanges(
		childIndex,
		edgeIndicesByBreakpoint
	);

	return BREAKPOINT_NAMES.reduce<Array<string>>((acc, breakpoint) => {
		if (
			directionBreakpoints.includes(breakpoint) ||
			marginBreakpoints.includes(breakpoint) ||
			gapBreakpoints.includes(breakpoint)
		) {
			acc.push(breakpoint);
		}
		return acc;
	}, []);
};

export default getBreakpointsForMediaQueries;
