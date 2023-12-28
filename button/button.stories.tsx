import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import Button from './button.component';
import {
	BUTTON_SHAPE_NAMES,
	BUTTON_SIZE_NAMES,
	BUTTON_VARIANT_NAMES,
} from './button.types';
import ActionAddOutlinedIcon from '../../icons/action/add/outlined/icon';
import ActionClearOutlinedIcon from '../../icons/action/clear/outlined/icon';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	argTypes: {
		variant: {
			options: BUTTON_VARIANT_NAMES,
			control: 'select',
		},
		size: {
			options: BUTTON_SIZE_NAMES,
			control: 'select',
		},
		shape: {
			options: BUTTON_SHAPE_NAMES,
			control: 'select',
		},
		active: {
			control: 'boolean',
		},
		icon: {
			options: ['Icon1', 'Icon2'],
			mapping: {
				Icon1: <ActionAddOutlinedIcon />,
				Icon2: <ActionClearOutlinedIcon />,
			},
		},
		iconRight: {
			control: 'boolean',
		},
		align: {
			options: ['start', 'center', 'end'],
			control: 'select',
		},
		withoutPadding: {
			control: 'boolean',
		},
		wrapContent: {
			control: 'boolean',
		},
	},

	// sx?: Sx;
	// value?: number | string;
	// },
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: 'defaultPrimary',
		active: false,
		children: 'Button',
		icon: <ActionAddOutlinedIcon />,
		iconRight: false,
		align: 'start',
		withoutPadding: false,
		wrapContent: false,
	},
};

export const Secondary: Story = {
	args: {
		variant: 'defaultSecondary',
		size: 'medium',
		shape: 'round',
		children: 'Button',
	},
};

export const Tertiary: Story = {
	args: { ...Primary.args, variant: 'defaultTertiary' },
};
export const Ghost: Story = {
	args: { ...Primary.args, variant: 'defaultGhost' },
};

export const TextPrimary: Story = {
	args: { ...Primary.args, variant: 'textPrimary' },
};

export const TextSecondary: Story = {
	args: { ...Primary.args, variant: 'textSecondary' },
};

export const TextLink: Story = {
	args: { ...Primary.args, variant: 'textLink' },
};
