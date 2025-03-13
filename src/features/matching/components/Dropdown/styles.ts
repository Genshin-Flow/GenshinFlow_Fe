import { styled } from "@/../styled-system/jsx";

const defaultCheckBoxStyle = {
	width: "7px",
	height: "7px",
	position: "absolute",
	left: "-40%",
	top: "25%",
	transform: "translate(-50%,-50%)",
	border: "none",
	outline: "none",
	appearance: "none",
	pointerEvents: "none",
};

export const DropdownContainer = styled("div", {
	base: {
		position: "relative",
		display: "inline-block",
		// width: "100%",
	},
	variants: {
		isMobile: {
			true: {
				width: "100%",
			},
		},
	},
});

export const DropdownButton = styled("button", {
	base: {
		background: "gray.06",
		color: "gray.03",
		padding: "10px 8px",
		fontSize: "xs",
		fontWeight: "medium",
		border: "1px solid {colors.gray.04}",
		borderColor: "gray.04",
		borderRadius: "8px",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		minWidth: "200px",
		height: "40px",
	},
	variants: {
		style: {
			default: {},
			genshin: {
				display: "flex",
				flexDirection: "row-reverse",
				alignItems: "center",
				gap: "12px",
				backgroundColor: "#DED7CE",
				borderRadius: "42px",
				borderColor: "#D6D6D6",
				padding: "0 15px",
				minWidth: "none",
				fontSize: "sm",
				color: "gray.01",
			},
		},
		isOpen: {
			true: {},
			false: {},
		},
		isMobile: {
			true: {
				width: "100%",
				maxWidth: "100%",
				justifyContent: "center",
				gap: "8px",
				padding: "0 10px",
			},
		},
	},
	compoundVariants: [
		{
			style: "genshin",
			isOpen: true,
			css: {
				backgroundColor: "#C8B59C",
			},
		},
	],
	defaultVariants: {
		style: "default",
		isOpen: false,
	},
});

export const Arrow = styled("div", {
	base: {
		width: "10px",
		height: "6px",
		backgroundImage: 'url("/svgs/arrow.svg")',
		backgroundRepeat: "no-repeat",
	},
	variants: {
		direction: {
			up: {
				transform: "rotate(180deg)",
			},
			down: {
				transform: "rotate(0deg)",
			},
		},
		style: {
			default: {},
			genshin: {
				width: "20px",
				height: "20px",
				backgroundImage: 'url("/svgs/arrow2.svg")',
			},
		},
	},
});

export const DropdownList = styled("ul", {
	base: {
		width: "100%",
		position: "absolute",
		top: "100%",
		left: "0%",
		minWidth: "130px",
		backgroundColor: "gray.06",
		boxShadow: "0px 4px 20px 0px rgba(22, 22, 22, 0.2)",
		zIndex: 1,
		listStyle: "none",
		padding: 0,
		margin: 0,
		overflow: "hidden",
	},
	variants: {
		style: {
			default: {},
			genshin: {
				top: "calc(100% + 1px)",
				backgroundColor: "none",
				boxShadow: "none",
				borderRadius: "8px",
				display: "flex",
				flexDirection: "column",
				gap: "0px",
				marginTop: "8px",
			},
		},
	},
});

export const DropdownItem = styled("li", {
	base: {
		padding: "8px 20px",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		fontSize: "xs",
		fontWeight: "medium",
		color: "gray.03",
		"&:hover": {
			backgroundColor: "gray.05",
			// color: "white",
		},
	},
	variants: {
		style: {
			default: {},
			genshin: {
				height: "32px",
				justifyContent: "flex-start",
				alignItems: "center",
				backgroundColor: "#F9F6F1",
				padding: "0 0px",
				whiteSpace: "nowrap",
				fontSize: "sm",
				color: "gray.01",

				"&:hover": {
					backgroundColor: "secondary.03",
				},
				"&.active": {
					backgroundColor: "secondary.03",
				},
			},
		},
	},
});

export const CenterBox = styled("div", {
	base: {
		width: "38%",
		display: "!important block",
		gap: "!important 0",
		position: "relative",
		textAlign: "left",
		transform: "translateX(10%)",
		margin: "0 auto",
	},
});

export const CheckBox = styled("input", {
	base: {
		...defaultCheckBoxStyle,
		borderLeft: "2px solid {colors.secondary.05}",
		borderBottom: "2px solid {colors.secondary.05}",
		transform: "rotate(-45deg)",

		"&:checked": {
			borderLeft: "2px solid {colors.primary.03}",
			borderBottom: "2px solid {colors.primary.03}",
			transform: "rotate(-45deg)",
		},
	},
});

export const DefaultCheckBox = styled("div", {
	base: {
		...defaultCheckBoxStyle,
		borderLeft: "2px solid {colors.secondary.05}",
		borderBottom: "2px solid {colors.secondary.05}",
		transform: "rotate(-45deg)",
	},
});

export const TextBox = styled("div", {
	base: {
		display: "!important block",
		margin: "0 auto",
	},
});

export const DropdownIcon = styled("img", {
	base: {
		width: "16px",
		height: "16px",
	},
});
