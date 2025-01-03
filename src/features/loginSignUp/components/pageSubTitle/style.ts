import { styled } from "@/../styled-system/jsx";

export const SubTitleStyle = styled("h2", {
	base: {
		fontWeight: "bold",
		marginTop: "-60px",
		marginBottom: "40px",
		textAlign: "center",
	},

	variants: {
		platform: {
			pc: {
				fontSize: "2xl",
			},
			mobile: {
				fontSize: "lg",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});
