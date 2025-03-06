import { styled } from "@/../styled-system/jsx";

export const MobilePostListItem = styled("article", {
	base: {
		width: "100%",
		padding: "12px",
		borderBottom: "1px solid #D5D5D5",
	},
});

export const MobilePostListUserInfoContainer = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
	},
});

export const MobilePostUserContent = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		marginLeft: "8px",

		"& h3": {
			textStyle: "sm",
		},

		"& span": {
			textStyle: "xs",
			color: "gray.03",
			marginLeft: "3px",
		},
	},
});

export const MobileUserProfile = styled("figure", {
	base: {
		width: "36px",
		height: "36px",
		overflow: "hidden",
		borderRadius: "50%",
	},
});

export const MobilePostListContent = styled("p", {
	base: {
		width: "220px",
		marginTop: "16px",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
});

export const MobileClipBoardContainer = styled("button", {
	base: {
		display: "flex",
		cursor: "pointer",

		"& > img": {
			pointerEvents: "none",
		},
		"& > span": {
			pointerEvents: "none",
		},

		"& > div": {},
	},
});

export const InfoBlockContainer = styled("div", {
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "20px",
		"& > div:last-of-type": {
			height: "30px",
		},
	},
});

export const CategoryContainer = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		columnGap: "8px",
		"& > div": {
			minWidth: "40px",
			backgroundColor: "secondary.04",
			height: "30px",
			padding: "7px 0",
			fontSize: "12px",
			fontWeight: "500",
		},
	},
});

export const QuestType = styled("div", {
	base: {
		display: "flex",
		height: "30px",
		alignItems: "center",
		justifyContent: "center",
		flexGrow: "1",
		backgroundColor: "secondary.04",

		"& > img": {
			width: "24px",
			height: "24px",
			marginRight: "8px",
		},
	},
});
export const WorldLevel = styled("div", {
	base: { flexGrow: "1", height: "30px", backgroundColor: "secondary.04" },
});
export const CreatePostTime = styled("div", {
	base: { flexGrow: "1", height: "30px", backgroundColor: "secondary.04" },
});
