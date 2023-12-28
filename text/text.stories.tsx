import type { Meta, StoryObj } from '@storybook/react';

import Text from './text.component';
import {
	TEXT_SIZE_NAMES,
	TEXT_TYPE_NAMES,
	TEXT_VARIANT_NAMES,
} from '../../common/types';

const meta: Meta<typeof Text> = {
	title: 'Text',
	component: Text,
	argTypes: {
		variant: {
			options: TEXT_VARIANT_NAMES,
			control: 'select',
		},
		type: {
			options: TEXT_TYPE_NAMES,
			control: 'select',
		},
		size: {
			options: TEXT_SIZE_NAMES,
			control: 'select',
		},
		fixedSize: {
			control: 'boolean',
		},
	},

	// sx?: Sx;
	// value?: number | string;
	// },
	// tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		children: 'test',
		variant: 'body',
		type: 'regular',
		size: 'small',
	},
};
