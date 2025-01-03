import { styled } from "@/../styled-system/jsx";

export const MyPageText = styled("p", {
	base: {
		width: "100%",
		textStyle: "xl",
	},
	variants: {
		variant: {
			mt20: {
				marginTop: "20px",
			},
			mt40: {
				marginTop: "40px",
			},
		},
		align: {
			left: {
				textAlign: "left",
			},
			center: {
				textAlign: "center",
			},
			right: {
				textAlign: "right",
			},
		},
		mb: {
			mb40: {
				marginBottom: "40px",
			},
		},
	},
	defaultVariants: {
		align: "left",
	},
});
