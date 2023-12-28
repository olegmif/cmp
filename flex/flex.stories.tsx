import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useRef } from 'react';
import Flex from '.';
import Box from '../box';
import theme from '../../common/themes/day';
import Btn from '../btn';
import TextComponent from '../text';
import Text from '../text';
import NavigationArrowFilledLineLeftIcon from '../../icons/navigation/arrow/filled/line/left';
import NavigationArrowFilledLineRightIcon from '../../icons/navigation/arrow/filled/line/right';
import { FlexComponentProps } from './flex.types';

const meta: Meta<typeof Flex> = {
	title: 'Flex',
	component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Horizontal: Story = {
	args: {
		gap: 3,
	},
	render: (args) => (
		<Flex {...args}>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 1
			</Box>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 2
			</Box>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 3
			</Box>
		</Flex>
	),
};

export const Vertical: Story = {
	args: {
		gap: 3,
		sx: { flexDirection: 'column' },
	},
	render: (args) => (
		<Flex {...args}>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 1
			</Box>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 2
			</Box>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 3
			</Box>
		</Flex>
	),
};

export const MediaQueries: Story = {
	args: {
		gap: { msm: 3, mlg: 10 },
		sx: {
			flexDirection: 'column',
			alignItems: 'center',
			mlg: { flexDirection: 'row', justifyContent: 'center' },
		},
	},
	render: (args) => (
		<Flex {...args}>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 1
			</Box>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 2
			</Box>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 3
			</Box>
		</Flex>
	),
};

export const MediaQueriesWithButtons: Story = {
	args: {
		gap: { msm: 3, mlg: 10 },
		sx: {
			p: 0,
			flexDirection: 'row',
			alignItems: 'center',
			border: '1px solid black',
			display: 'inline-flex',
			// mlg: { flexDirection: 'row', justifyContent: 'center' },
		},
	},
	render: (args) => (
		<Flex {...args}>
			<Btn
				variant="key"
				type="primary"
				size="medium"
				caption="Button"
				sx={{
					display: 'block',
					mlg: {
						display: 'none',
					},
					dlg: {
						display: 'block',
					},
				}}
			/>
			<div>Some standard tag</div>
			<TextComponent variant="headline" type="headline" size="medium">
				Text
			</TextComponent>
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
					display: 'block',
					mlg: {
						display: 'none',
					},
					dlg: {
						display: 'block',
					},
				}}
			>
				Блок 3
			</Box>
		</Flex>
	),
};

export const WithString: Story = {
	args: {
		gap: 2,
		sx: {
			p: 0,
			flexDirection: 'row',
			border: '1px solid black',
			display: 'inline-flex',
		},
	},
	render: (args) => (
		<Flex {...args}>
			<Btn variant="key" type="primary" size="medium" caption="Button" />
			<TextComponent variant="headline" type="headline" size="medium">
				Text
			</TextComponent>
			SomeString
			<Box
				sx={{
					border: `1px solid ${theme.colors.border.dividerLight as string}`,
				}}
			>
				Блок 3
			</Box>
		</Flex>
	),
};

export const HeaderTopLinksExample: Story = {
	args: {},
	render: (args) => (
		<Flex
			gap={4}
			sx={{
				p: 0,
			}}
			separator
		>
			<Flex
				gap={4}
				sx={{
					p: 0,
					border: '1px solid black',
					display: 'none',
					mlg: { display: 'inline-flex' },
				}}
				{...args}
			>
				<Btn variant="text" type="primary" size="medium" caption="Заказы" />
				<Btn variant="text" type="primary" size="medium" caption="Возвраты" />
				<Btn
					variant="text"
					type="primary"
					size="medium"
					caption="Взаиморасчеты"
				/>
			</Flex>
			<Flex
				className="second"
				gap={1}
				sx={{ p: 0, border: '1px solid green', display: 'flex' }}
			>
				<Text variant="body" type="regular" size="medium">
					Баланс
				</Text>
				<Text
					sx={{ color: theme.colors.status.error.textLight }}
					variant="body"
					type="regular"
					size="medium"
				>
					-48 000,00 ₽
				</Text>
			</Flex>
			<Btn variant="text" type="secondary" size="medium" caption="Пополнить" />
		</Flex>
	),
};

export const MediaFlexesChild: Story = {
	args: {},
	render: (args) => (
		<Flex className="parent" gap={4} sx={{ p: 0 }}>
			<Flex
				gap={4}
				sx={{
					p: 0,
					border: '1px solid black',
					display: 'none',
					mlg: { display: 'inline-flex' },
				}}
				{...args}
			>
				Первый
			</Flex>
			<Flex
				className="second"
				gap={1}
				sx={{ p: 0, border: '1px solid green', display: 'flex' }}
			>
				Второй
			</Flex>
			<Flex
				className="third"
				gap={1}
				sx={{ p: 0, border: '1px solid green', display: 'flex' }}
			>
				Третий
			</Flex>
		</Flex>
	),
};

export const WithExternalSeparator: Story = {
	args: {
		gap: 4,
		separator: (
			<Box sx={{ p: 0, display: 'flex', alignItems: 'center' }}>
				<NavigationArrowFilledLineRightIcon />
			</Box>
		),
		sx: { msm: { flexDirection: 'column' } },
	},
	render: (args) => {
		return (
			<Flex {...args}>
				<Text sx={{ p: 2, border: '1px solid black' }}>Text 1</Text>
				<Text sx={{ p: 2, border: '1px solid black' }}>Text 2</Text>
				<Text sx={{ p: 2, border: '1px solid black' }}>Text 3</Text>
			</Flex>
		);
	},
};

export const WithDefaultSeparator: Story = {
	args: {
		gap: 4,
		separator: {
			width: '2px',
			color: (t) => t.colors.status.error.defaultLight as string,
			margin: '2px',
		},
		sx: { msm: { flexDirection: 'column' } },
	},
	render: (args) => {
		return (
			<Flex {...args}>
				<Text sx={{ p: 2, border: '1px solid black' }}>Text 1</Text>
				<Text
					sx={{
						p: 2,
						border: '1px solid black',
						display: 'none',
						msm: { display: 'block' },
					}}
				>
					Text 2
				</Text>
				<Text sx={{ p: 2, border: '1px solid black' }}>Text 3</Text>
			</Flex>
		);
	},
};

export const WithExotic: Story = {
	args: {
		gap: 4,
	},
	render: (args) => {
		return (
			<Flex {...args}>
				<>
					<Text sx={{ p: 2, border: '1px solid black' }}>Text 3</Text>
				</>
			</Flex>
		);
	},
};

const WithRefWrapper: FC<FlexComponentProps> = (args) => {
	const ref = useRef();
	console.log('WithRefWrapper ref', ref);
	return (
		<Flex ref={ref} {...args}>
			<Box>
				<Text sx={{ p: 2, border: '1px solid black' }}>Text 3</Text>
			</Box>
		</Flex>
	);
};

export const WithRef: Story = {
	args: {
		gap: 4,
	},
	render: (args) => {
		return <WithRefWrapper {...args} />;
	},
};
