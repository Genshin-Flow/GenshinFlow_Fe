import { styled } from "@/../styled-system/jsx";

const flexCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
};

const fontStyle = {
	color: "gray.01",
	fontSize: "14px",
	fontWeight: "bold",
};

const flexItem = {
	...flexCenter,
	...fontStyle,
	position: "relative",
	cursor: "pointer",
	flex: "1 1 auto",
};

export const MatchingMenuContainer = styled("div", {
	base: {
		display: "flex",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "0 30px",
		marginTop: "30px",
		marginBottom: "30px",
		flexShrink: 0,
		"& div": {
			display: "flex",
			alignItems: "center",
			gap: "20px",
		},
	},
});

export const WriteButton = styled("button", {
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "113px",
		height: "40px",
		backgroundColor: "primary.01",
		color: "secondary.03",
		fontSize: "14px",
		fontWeight: "medium",
		letterSpacing: "0",
		borderRadius: "4px",
		cursor: "pointer",
		border: "1px solid #696969",
		backgroundImage: "url('/svgs/write.svg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "24px 24px",
		backgroundPosition: "10px center",
		paddingLeft: "35px",
		boxSizing: "border-box",
	},
});

export const UserName = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 200px",
	},
	variants: {
		select: {
			true: {
				color: "secondary.01",
				"&::before": {
					content: '""',
					position: "absolute",
					bottom: 0,
					left: "50%",
					transform: "translateX(-50%)",
					width: "53px", // 37 + 16
					height: "2px",
					backgroundColor: "secondary.01",
				},
			},
		},
	},
});
