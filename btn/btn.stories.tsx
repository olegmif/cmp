import type { Meta, StoryObj } from '@storybook/react';
import Btn from '.';
import ActionAddOutlinedIcon from '../../icons/action/add/outlined/icon';
import {
	BUTTON_SHAPE_NAMES,
	BUTTON_SIZE_NAMES,
	BUTTON_TYPE_NAMES,
	BUTTON_VARIANT_NAMES,
} from './btn.const';
import OthersTileOutlinedIcon from '../../icons/others/view/tile/outlined';

const meta: Meta<typeof Btn> = {
	title: 'Btn',
	component: Btn,
	argTypes: {
		variant: {
			options: BUTTON_VARIANT_NAMES,
			control: 'select',
		},
		type: {
			options: BUTTON_TYPE_NAMES,
			control: 'select',
		},
		shape: {
			options: BUTTON_SHAPE_NAMES,
			control: 'select',
		},
		size: {
			options: BUTTON_SIZE_NAMES,
			control: 'select',
		},
		disabled: {
			control: 'boolean',
		},
		selected: {
			control: 'boolean',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Btn>;

export const Default: Story = {
	args: {
		caption: 'Button2',
	},
};

export const KeyPrimary: Story = {
	args: {
		caption: 'Button2',
		variant: 'key',
		type: 'primary',
		shape: 'round',
		size: 'medium',
		leftIcon: OthersTileOutlinedIcon,
		rightIcon: OthersTileOutlinedIcon,
	},
};

export const KeySecondary: Story = {
	args: {
		caption: 'Button2',
		variant: 'key',
		type: 'secondary',
		shape: 'round',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const DefaultPrimary: Story = {
	args: {
		caption: 'Button2',
		variant: 'default',
		type: 'primary',
		shape: 'round',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const DefaultSecondary: Story = {
	args: {
		caption: 'Button2',
		variant: 'default',
		type: 'secondary',
		shape: 'round',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const GhostPrimary: Story = {
	args: {
		caption: 'Button2',
		variant: 'ghost',
		type: 'primary',
		shape: 'round',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const GhostSecondary: Story = {
	args: {
		caption: 'Button2',
		variant: 'ghost',
		type: 'secondary',
		shape: 'round',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const FunctionPrimary: Story = {
	args: {
		caption: 'Button2',
		variant: 'function',
		type: 'primary',
		shape: 'round',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const FunctionSecondary: Story = {
	args: {
		caption: 'Button2',
		variant: 'function',
		type: 'secondary',
		shape: 'round',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const TextPrimary: Story = {
	args: {
		caption: 'Button2',
		variant: 'text',
		type: 'primary',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const TextSecondary: Story = {
	args: {
		caption: 'Button2',
		variant: 'text',
		type: 'secondary',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const TextLink: Story = {
	args: {
		caption: 'Button2',
		variant: 'text',
		type: 'link',
		size: 'medium',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const ButtonAsLink: Story = {
	args: {
		caption: 'Button2',
		variant: 'text',
		type: 'link',
		size: 'medium',
		href: 'some',
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};

export const IconsAsReactElement: Story = {
	args: {
		caption: 'Button2',
		variant: 'text',
		type: 'link',
		size: 'medium',
		href: 'some',
		leftIcon: <ActionAddOutlinedIcon />,
		rightIcon: <ActionAddOutlinedIcon />,
	},
};

export const WitnValue: Story = {
	args: {
		caption: 'Button2',
		value: 'test-value',
	},
};

export const Disabled: Story = {
	args: {
		caption: 'Disabled',
		variant: 'text',
		type: 'secondary',
		size: 'medium',
		disabled: true,
		leftIcon: ActionAddOutlinedIcon,
		rightIcon: ActionAddOutlinedIcon,
	},
};
