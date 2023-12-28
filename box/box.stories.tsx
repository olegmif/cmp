import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Box from '.';
import theme from '../../common/themes/day';

const meta: Meta<typeof Box> = {
	title: 'Box',
	component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		sx: {
			border: '1px solid black',
			display: 'none',
			msm: { display: 'block' },
		},
	},
	render: (args) => <Box {...args} />,
};
