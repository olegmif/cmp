import {
	ButtonVariantShapes,
	ButtonVariantSizes,
	ButtonVariantTypes,
} from './button.theme.types';

const BUTTON_VARIANT_STATES: ButtonVariantTypes = {
	key: {
		primary: {
			default: {
				wrapper: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				stateLayer: { backgroundColor: 'transparent' },
				typography: {
					variant: 'control',
					type: 'heading',
					sx: {
						color: (t) => t.unifiedColors.text.primaryDark as string,
					},
				},
				icon: {
					fill: (t) => t.unifiedColors.icon.primaryDark as string,
					color: (t) => t.unifiedColors.icon.primaryDark as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: {
						color: (t) => t.unifiedColors.text.primaryDark as string,
					},
				},
				icon: {
					fill: (t) => t.unifiedColors.icon.primaryDark as string,
					color: (t) => t.unifiedColors.icon.primaryDark as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: {
						color: (t) => t.unifiedColors.text.primaryDark as string,
					},
				},
				icon: {
					fill: (t) => t.unifiedColors.icon.primaryDark as string,
					color: (t) => t.unifiedColors.icon.primaryDark as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.activeLight24 as string,
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: {
						color: (t) => t.unifiedColors.text.primaryDark as string,
					},
				},
				icon: {
					fill: (t) => t.unifiedColors.icon.primaryDark as string,
					color: (t) => t.unifiedColors.icon.primaryDark as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
				},
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: {
						color: (t) => t.unifiedColors.text.primaryDark as string,
					},
				},
				icon: {
					fill: (t) => t.unifiedColors.icon.primaryDark as string,
					color: (t) => t.unifiedColors.icon.primaryDark as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: (t) => t.colors.key.defaultLight as string,
					opacity: 0.24,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: {
						color: (t) => t.unifiedColors.text.primaryDark as string,
					},
				},
				icon: {
					fill: (t) => t.unifiedColors.icon.primaryDark as string,
					color: (t) => t.unifiedColors.icon.primaryDark as string,
				},
			},
		},
		secondary: {
			default: {
				wrapper: { backgroundColor: (t) => t.colors.key.tintLight as string },
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			hover: {
				wrapper: { backgroundColor: (t) => t.colors.key.tintLight as string },
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.keyColored.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			focus: {
				wrapper: { backgroundColor: (t) => t.colors.key.tintLight as string },
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.keyColored.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			active: {
				wrapper: { backgroundColor: (t) => t.colors.key.tintLight as string },
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.keyColored.activeLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			selected: {
				wrapper: { backgroundColor: (t) => t.colors.key.tintLight as string },
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.keyColored.selectedLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: (t) => t.colors.key.tintLight as string,
					opacity: 0.32,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'heading',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
		},
	},
	default: {
		primary: {
			default: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.activeLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
					opacity: 0.24,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
		},
		secondary: {
			default: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.activeLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
				},
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: (t) => t.colors.field.secondaryLight as string,
					opacity: 0.32,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
		},
	},
	ghost: {
		primary: {
			default: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.activeLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: 'transparent',
					opacity: 0.24,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
		},
		secondary: {
			default: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.activeLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: 'transparent',
					opacity: 0.24,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
		},
	},
	function: {
		primary: {
			default: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
			},
			hover: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
			},
			focus: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
			},
			active: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.activeLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
			},
			selected: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: 'transparent',
					opacity: 0.24,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
			},
		},
		secondary: {
			default: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.hoverLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) => t.colors.state.common.activeLight12 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: (t) =>
						t.colors.state.common.selectedLight6 as string,
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: 'transparent',
					opacity: 0.32,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
		},
	},
	text: {
		primary: {
			default: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: 'transparent',
					opacity: 0.24,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
		},
		secondary: {
			default: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.primaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.primaryLight as string,
					color: (t) => t.colors.icon.primaryLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: 'transparent',
					opacity: 0.24,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.text.secondaryLight as string },
				},
				icon: {
					fill: (t) => t.colors.icon.secondaryLight as string,
					color: (t) => t.colors.icon.secondaryLight as string,
				},
			},
		},
		link: {
			default: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
			hover: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.accent.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.accent.iconLight as string,
					color: (t) => t.colors.accent.iconLight as string,
				},
			},
			focus: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.accent.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.accent.iconLight as string,
					color: (t) => t.colors.accent.iconLight as string,
				},
			},
			active: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.accent.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.accent.iconLight as string,
					color: (t) => t.colors.accent.iconLight as string,
				},
			},
			selected: {
				wrapper: {
					backgroundColor: 'transparent',
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.accent.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.accent.iconLight as string,
					color: (t) => t.colors.accent.iconLight as string,
				},
			},
			disabled: {
				wrapper: {
					backgroundColor: 'transparent',
					opacity: 0.32,
				},
				stateLayer: {
					backgroundColor: 'transparent',
				},
				typography: {
					variant: 'control',
					type: 'regular',
					sx: { color: (t) => t.colors.key.textLight as string },
				},
				icon: {
					fill: (t) => t.colors.key.iconLight as string,
					color: (t) => t.colors.key.iconLight as string,
				},
			},
		},
	},
};

const BUTTON_SHAPES: ButtonVariantShapes = {
	key: {
		square: {
			small: { borderRadius: '0px' },
			medium: { borderRadius: '0px' },
			large: { borderRadius: '0px' },
		},
		round: {
			small: { borderRadius: '6px' },
			medium: { borderRadius: '7px' },
			large: { borderRadius: '8px' },
		},
		circle: {
			small: { borderRadius: '16px' },
			medium: { borderRadius: '20px' },
			large: { borderRadius: '24px' },
		},
	},
	default: {
		square: {
			small: { borderRadius: '0px' },
			medium: { borderRadius: '0px' },
			large: { borderRadius: '0px' },
		},
		round: {
			small: { borderRadius: '6px' },
			medium: { borderRadius: '7px' },
			large: { borderRadius: '8px' },
		},
		circle: {
			small: { borderRadius: '16px' },
			medium: { borderRadius: '20px' },
			large: { borderRadius: '24px' },
		},
	},
	ghost: {
		square: {
			small: { borderRadius: '0px' },
			medium: { borderRadius: '0px' },
			large: { borderRadius: '0px' },
		},
		round: {
			small: { borderRadius: '6px' },
			medium: { borderRadius: '7px' },
			large: { borderRadius: '8px' },
		},
		circle: {
			small: { borderRadius: '16px' },
			medium: { borderRadius: '20px' },
			large: { borderRadius: '24px' },
		},
	},
	function: {
		square: {
			small: { borderRadius: '0px' },
			medium: { borderRadius: '0px' },
			large: { borderRadius: '0px' },
		},
		round: {
			small: { borderRadius: '5px' },
			medium: { borderRadius: '5px' },
			large: { borderRadius: '6px' },
		},
		circle: {
			small: { borderRadius: '12px' },
			medium: { borderRadius: '14px' },
			large: { borderRadius: '16px' },
		},
	},
	text: {
		square: {
			small: { borderRadius: '0px' },
			medium: { borderRadius: '0px' },
			large: { borderRadius: '0px' },
		},
		round: {
			small: { borderRadius: '0px' },
			medium: { borderRadius: '0px' },
			large: { borderRadius: '0px' },
		},
		circle: {
			small: { borderRadius: '0px' },
			medium: { borderRadius: '0px' },
			large: { borderRadius: '0px' },
		},
	},
};

const BUTTON_VARIANT_SIZES: ButtonVariantSizes = {
	key: {
		small: {
			stateLayerSx: { padding: '8px 12px' },
			typography: {
				sx: { padding: '0 4px' },
				size: 'small',
			},
			icon: {
				sx: { fontSize: '16px' },
				size: 'small',
			},
		},
		medium: {
			stateLayerSx: { padding: '10px 16px' },
			typography: {
				sx: { padding: '0 5px' },
				size: 'medium',
			},
			icon: {
				sx: { fontSize: '20px' },
				size: 'medium',
			},
		},
		large: {
			stateLayerSx: { padding: '12px 20px' },
			typography: {
				sx: { padding: '0 6px' },
				size: 'large',
			},
			icon: {
				sx: { fontSize: '24px' },
				size: 'large',
			},
		},
	},
	default: {
		small: {
			stateLayerSx: { padding: '8px 12px' },
			typography: {
				sx: { padding: '0 4px' },
				size: 'small',
			},
			icon: {
				sx: { fontSize: '16px' },
				size: 'small',
			},
		},
		medium: {
			stateLayerSx: { padding: '10px 16px' },
			typography: {
				sx: { padding: '0 5px' },
				size: 'medium',
			},
			icon: {
				sx: { fontSize: '20px' },
				size: 'medium',
			},
		},
		large: {
			stateLayerSx: { padding: '12px 20px' },
			typography: {
				sx: { padding: '0 6px' },
				size: 'large',
			},
			icon: {
				sx: { fontSize: '24px' },
				size: 'large',
			},
		},
	},
	ghost: {
		small: {
			stateLayerSx: { padding: '8px 12px' },
			typography: {
				sx: { padding: '0 4px' },
				size: 'small',
			},
			icon: {
				sx: { fontSize: '16px' },
				size: 'small',
			},
		},
		medium: {
			stateLayerSx: { padding: '10px 16px' },
			typography: {
				sx: { padding: '0 5px' },
				size: 'medium',
			},
			icon: {
				sx: { fontSize: '20px' },
				size: 'medium',
			},
		},
		large: {
			stateLayerSx: { padding: '12px 20px' },
			typography: {
				sx: { padding: '0 6px' },
				size: 'large',
			},
			icon: {
				sx: { fontSize: '24px' },
				size: 'large',
			},
		},
	},
	function: {
		small: {
			stateLayerSx: { padding: '4px' },
			typography: {
				sx: { padding: '0 4px' },
				size: 'small',
			},
			icon: {
				sx: { fontSize: '16px' },
				size: 'small',
			},
		},
		medium: {
			stateLayerSx: { padding: '4px 5px' },
			typography: {
				sx: { padding: '0 5px' },
				size: 'medium',
			},
			icon: {
				sx: { fontSize: '20px' },
				size: 'medium',
			},
		},
		large: {
			stateLayerSx: { padding: '4px 6px' },
			typography: {
				sx: { padding: '0 6px' },
				size: 'large',
			},
			icon: {
				sx: { fontSize: '24px' },
				size: 'large',
			},
		},
	},
	text: {
		small: {
			stateLayerSx: { padding: '0px' },
			typography: {
				sx: { padding: '0 4px' },
				size: 'small',
			},
			icon: {
				sx: { fontSize: '16px' },
				size: 'small',
			},
		},
		medium: {
			stateLayerSx: { padding: '0px' },
			typography: {
				sx: { padding: '0 5px' },
				size: 'medium',
			},
			icon: {
				sx: { fontSize: '20px' },
				size: 'medium',
			},
		},
		large: {
			stateLayerSx: { padding: '0px' },
			typography: {
				sx: { padding: '0 6px' },
				size: 'large',
			},
			icon: {
				sx: { fontSize: '24px' },
				size: 'large',
			},
		},
	},
};

export const BUTTON_MEDIA = {
	small: {
		start: 'small',
		mlg: 'small',
	},
	medium: {
		start: 'medium',
		mlg: 'small',
	},
	large: {
		start: 'large',
		mlg: 'medium',
	},
};

export const BUTTON_THEME = {
	variant: BUTTON_VARIANT_STATES,
	shape: BUTTON_SHAPES,
	size: BUTTON_VARIANT_SIZES,
	media: BUTTON_MEDIA,
};
