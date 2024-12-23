import { styled } from "../../../../../styled-system/jsx";

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

export const Container = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		maxWidth: "1129px",
		width: "100%",
		minWidth: "888px",
		height: "797px",
		minHeight: "660px",
		backgroundColor: "primary.02",
		overflow: "hidden",
	},
	variants: {
		isMobile: {
			true: {
				height: "100vh",
				width: "100%",
				maxWidth: "none",
				minWidth: "none",
				minHeight: "none",
			},
		},
	},
});

export const TabContainer = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		height: "79px",
		backgroundColor: "primary.01",
		position: "relative",
		flexShrink: 0,
	},
	variants: {
		isMobile: {
			true: {
				height: "40px",
				justifyContent: "center",
				gap: "12px",
				padding: "0 20px",
			},
			false: {
				padding: "4px 5px 5px 5px",
				"&::before": {
					content: '""',
					position: "absolute",
					top: "2px",
					left: "2px",
					right: "2px",
					bottom: "3px",
					border: "2px solid #696969",
					boxSizing: "border-box",
				},
			},
		},
	},
	defaultVariants: {
		isMobile: false,
	},
});

export const TabItem = styled("div", {
	base: {
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "201px",
		height: "100%",
		color: "#C4C4C4",
		fontSize: "20px",
		fontWeight: "medium",
		position: "relative",
		"&::before": {
			content: '""',
			position: "absolute",
			bottom: 0,
			left: "50%",
			transform: "translateX(-50%)",
			width: "52px",
			height: "3px",
			backgroundColor: "transparent",
		},
	},
	variants: {
		active: {
			true: {
				color: "#F1F1F1",
				fontWeight: "bold",
				"&::before": {
					backgroundColor: "secondary.01",
				},
			},
		},
		isMobile: {
			true: {
				width: "100%",
				flex: "1",
				"&::before": {
					width: "100%",
				},
			},
			false: {
				"&::after": {
					content: '""',
					position: "absolute",
					right: 0,
					top: "50%",
					transform: "translateY(-50%)",
					width: "2px",
					height: "30px",
					backgroundColor: "#696969",
					borderRadius: "1px",
				},
			},
		},
	},
	defaultVariants: {
		isMobile: false,
	},
});

export const MatchingMenu = styled("div", {
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

export const PostList = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		marginTop: "1px",
		display: "flex",
		flexDirection: "column",
		position: "relative",
		overflowY: "auto",
		mx: "auto",
		flexGrow: 1,
		paddingLeft: "5px",
		"&::-webkit-scrollbar": {
			width: "8px",
		},
		"&::-webkit-scrollbar-thumb": {
			width: "6px",
			backgroundColor: "#F4F4F4",
			borderRadius: "2px",
			border: "1px solid transparent",
			backgroundClip: "padding-box",
			backgroundImage: "url('/svgs/scroll.svg')",
			backgroundRepeat: "no-repeat",
			backgroundSize: "4px calc(100% - 2px)",
			backgroundPosition: "center center",
		},
		"&::-webkit-scrollbar-track": {
			backgroundColor: "gray.01",
			borderRadius: "2px",
		},
	},
	variants: {
		isMobile: {
			true: {
				paddingLeft: "0px",
				marginTop: "0",
				marginBottom: "30px",
				// maxHeight: 'calc(100% - 95px)',
			},
		},
	},
});

// 모바일 스타일
export const MobileContainer = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		padding: "40px 20px 30px 20px",
		gap: "25px",
	},
});

export const FilterContainer = styled("div", {
	base: {
		display: "flex",
		width: "100%",
		height: "40px",
		gap: "20px",
		justifyContent: "space-between",
		"& > *": {
			flex: "1 1 auto",
			maxWidth: "100%",
		},
	},
});

// 이벤트 스타일
export const EventContainer = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		padding: "40px 20px 30px 20px",
		gap: "20px",
		alignItems: "center",
		overflowY: "auto",
	},
});

export const EventItem = styled("div", {
	base: {
		cursor: "pointer",
		width: "100%",
		maxWidth: "500px",
		aspectRatio: "350 / 308",
		backgroundColor: "#FFFFFF",
		borderRadius: "16px",
		"& > div": {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			maxWidth: "500px",
			aspectRatio: "350 / 111",
			justifyContent: "space-between",
			padding: "16px 16px",
			"& > div": {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			},
		},
	},
});

export const BannerImage = styled("img", {
	base: {
		width: "100%",
		maxWidth: "500px",
		aspectRatio: "350 / 197",
		objectFit: "cover",
		borderRadius: "16px 16px 0 0",
	},
});

export const EventTitle = styled("h3", {
	base: {
		color: "gray.01",
		fontSize: "20px",
		fontWeight: "bold",
	},
});

export const EventDesc = styled("p", {
	base: {
		color: "gray.01",
		fontSize: "14px",
		fontWeight: "medium",
	},
});

export const EventDate = styled("p", {
	base: {
		color: "#C4C4C4",
		fontSize: "12px",
		fontWeight: "regular",
	},
});

export const EventShortCut = styled("p", {
	base: {
		color: "#C4C4C4",
		fontSize: "12px",
		fontWeight: "regular",
		paddingRight: "14px",
		backgroundImage: "url('/svgs/arrow3.svg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "10px 6px",
		backgroundPosition: "right center",
	},
});

// 모바일 글쓰기 버튼
export const MobileWriteButton = styled("button", {
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "48px",
		height: "48px",
		backgroundColor: "primary.01",
		cursor: "pointer",
		backgroundImage: "url('/svgs/write2.svg')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "28px 28px",
		backgroundPosition: "center center",
		borderRadius: "50%",
		position: "fixed",
		bottom: "20px",
		right: "20px",
		zIndex: 2,
	},
});
