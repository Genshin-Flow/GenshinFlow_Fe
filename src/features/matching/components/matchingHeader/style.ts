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

export const MatchingHeaderContainer = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		maxWidth: "1124px",
		minWidth: "883px",
		width: "100%",
		height: "32px",
		marginLeft: "5px",
		backgroundColor: "gray.06",
		flexShrink: 0,
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

export const QuestType = styled(UserName, {
	base: {},
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
					width: "80px", // 64 + 16
					height: "2px",
					backgroundColor: "secondary.01",
				},
			},
		},
	},
});

export const WorldLevel = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 100px",
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
					width: "68px", // 52 + 16
					height: "2px",
					backgroundColor: "secondary.01",
				},
			},
		},
	},
});

export const Message = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 386px",
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

export const TimeAgo = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 140px",
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
					width: "65px", // 49 + 16
					height: "2px",
					backgroundColor: "secondary.01",
				},
			},
		},
	},
});

export const MoreOptions = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 90px",
	},
});

export const Gap = styled("div", {
	base: {
		width: "8px",
		height: "100%",
	},
});
