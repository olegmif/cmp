import { Children, isValidElement, ReactNode } from 'react';
import { BREAKPOINT_NAMES, BreakpointName } from '../../../common/constants';
import getMediaVisibilityFromSx, {
	ChildMediaVisibility,
} from './getMediaVisibilityFromSx';
import { MediaSx, Sx } from '../../box/box.types';

export type FirstLastVisibleIndexes = { first: number; last: number };
export type MediaFirstLastVisibleIndexes = {
	[key in BreakpointName]?: FirstLastVisibleIndexes;
};
const getMediaEdgesVisibleChildren: (
	children: ReactNode | ReactNode[]
) => MediaFirstLastVisibleIndexes = (children) => {
	const visibilityArray = Children.toArray(children).reduce<
		Array<ChildMediaVisibility>
	>((acc, child) => {
		// console.log(child);
		if (isValidElement(child)) {
			acc.push(getMediaVisibilityFromSx(child.props.sx as Sx & MediaSx));
		} else {
			acc.push(getMediaVisibilityFromSx({ display: 'block' }));
		}
		return acc;
	}, []);

	return BREAKPOINT_NAMES.reduce((acc, breakpoint) => {
		const breakpointChildrenVisibility: Array<boolean> = visibilityArray.reduce<
			Array<boolean>
		>((visibility, childMediaVisibility) => {
			visibility.push(Boolean(childMediaVisibility[breakpoint]));
			return visibility;
		}, []);

		const firstVisibleIndex: number =
			breakpointChildrenVisibility.indexOf(true);
		const lastVisibleIndex: number =
			breakpointChildrenVisibility.lastIndexOf(true);

		return {
			...acc,
			[breakpoint]: { first: firstVisibleIndex, last: lastVisibleIndex },
		};
	}, {});
};

export default getMediaEdgesVisibleChildren;
