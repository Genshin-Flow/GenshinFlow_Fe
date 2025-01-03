import { styled } from "@/../styled-system/jsx";

export const MypageInfoContainer = styled("div", {
	base: {
		width: "100%",
		display: "grid",
		padding: "20px",
		backgroundColor: "primary.04",
		borderRadius: "8px",
		border: "1px solid {colors.gray.04}",
	},
	variants: {
		marginTop: {
			mt40: {
				marginTop: "40px",
			},
			mt20: {
				marginTop: "20px",
			},
		},
		variable: {
			mypage: {
				maxHeight: "220px",
				overflow: "hidden",
			},
			history: {
				height: "70%",
				padding: "0",
				maxHeight: "477px",
			},
		},
	},
});
