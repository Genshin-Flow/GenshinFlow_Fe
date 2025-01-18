import { styled } from "../../../../../styled-system/jsx";

const flexCenter = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
};

const flexItem = {
	...flexCenter,
	flex: "1 1 auto",
};

export const Text = styled("p", {
	base: {
		margin: 0,
	},
	variants: {
		size: {
			xs: { textStyle: "xs" },
			sm: { textStyle: "sm" },
			md: { textStyle: "md" },
			lg: { textStyle: "lg" },
		},
		color: {
			gray01: { color: "gray.01" },
			gray02: { color: "gray.02" },
			gray03: { color: "gray.03" },
		},
		questVariants: {
			true: {
				minWidth: "60px",
			},
		},
	},
	defaultVariants: {
		size: "sm",
		color: "gray01",
	},
});

export const ItemContainer = styled("div", {
	base: {
		boxSizing: "border-box",
		display: "flex",
		alignItems: "center",
		maxWidth: "1116px",
		minWidth: "875px",
		width: "100%",
		height: "60px",
		backgroundColor: "#F9F6F1",
		borderBottom: "1px solid {colors.gray.05}",
	},
	variants: {
		isMobile: {
			true: {
				width: "100%",
				height: "140px",
				minHeight: "140px",
				maxWidth: "none",
				minWidth: "none",
				padding: "12px 12px",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "space-between",
			},
		},
	},
});

const selectedVariant = {
	variants: {
		selected: {
			true: {
				backgroundColor: "secondary.03",
			},
		},
	},
};

export const UserName = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 200px",
	},
	...selectedVariant,
});

export const ProfileImage = styled("div", {
	base: {
		backgroundColor: "gray.04",
		borderRadius: "50%",
		height: "36px",
		width: "36px",
		objectFit: "cover",
		marginRight: "8px",
	},
});

export const UserInfo = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
});

export const UserIdButton = styled("button", {
	base: {
		cursor: "pointer",
		textStyle: "xs",
		color: "gray.03",
		paddingLeft: "16px",
		backgroundImage: 'url("/svgs/clarity_paste-line.svg")',
		backgroundSize: "12px 12px",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left center",
	},
});

export const QuestType = styled(UserName, {
	base: {
		// backgroundColor: 'secondary.03',
	},
	...selectedVariant,
});

export const QuestIconWrapper = styled("div", {
	base: {
		position: "relative",
		width: "30px",
		height: "30px",
		marginRight: "20px",
	},
});

export const QuestIcon = styled("div", {
	base: {
		width: "30px",
		height: "30px",
		borderRadius: "50%",
		backgroundColor: "white",
		boxShadow:
			"inset 1px 4px 2px 0 rgba(192, 192, 192, 0.25), inset -1px -4px 2px 0 rgba(229, 218, 218, 0.25)",
	},
});

export const CenteredImage = styled("img", {
	base: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "28px",
		height: "28px",
	},
	variants: {
		isMobile: {
			true: {
				position: "relative",
				width: "24px",
				height: "24px",
				top: "none",
				left: "none",
				transform: "none",
				marginRight: "7px",
			},
		},
	},
});

export const WorldLevel = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 100px",
	},
	...selectedVariant,
});

export const Message = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 386px",
		padding: "0 19px",
		minWidth: "0",
	},
	...selectedVariant,
});

export const MessageText = styled("div", {
	base: {
		display: "line-block",
		alignItems: "center",
		justifyContent: "left",
		width: "100%",
		maxWidth: "348px",
		backgroundColor: "gray.06",
		padding: "8px 10px",
		borderRadius: "8px",
		border: "1px solid {colors.gray.04}",
		textStyle: "sm",
		color: "gray.01",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		minWidth: "0",
	},
});

export const TimeAgo = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 140px",
		textStyle: "sm",
		color: "gray.02",
		textAlign: "center",
	},
	...selectedVariant,
});

export const MoreOptions = styled("div", {
	base: {
		...flexItem,
		flex: "1 1 90px",
		position: "relative",
	},
});

export const MoreOptionsButton = styled("button", {
	base: {
		cursor: "pointer",
		width: "48px",
		height: "48px",
		position: "relative",
		backgroundRepeat: "no-repeat",
		backgroundSize: "auto",
		backgroundPosition: "center",
	},
	variants: {
		type: {
			report: {
				backgroundImage: 'url("/svgs/report.svg")',
			},
			moreOption: {
				backgroundImage: 'url("/svgs/moreoption.svg")',
			},
		},
		isMobile: {
			true: {
				width: "30px",
				height: "30px",
			},
		},
	},
	defaultVariants: {
		type: "report",
	},
});

export const MenuContainer = styled("div", {
	base: {
		position: "absolute",
		top: "45px",
		right: "50%",
		transform: "translateX(-50%, 0)",
		backgroundColor: "white",
		boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
		zIndex: 1000,
	},
	variants: {
		isMobile: {
			true: {
				top: "30px",
			},
		},
	},
});

export const MenuItem = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "120px",
		padding: "8px 0",
		fontSize: "16px",
		fontWeight: "medium",
		cursor: "pointer",
		"&:hover": {
			backgroundColor: "#f0f0f0",
		},
	},
});

// 모바일 스타일
export const MobileUserName = styled("div", {
	base: {
		display: "flex",
	},
});

export const MobileMessageText = styled("div", {
	base: {
		display: "line-block",
		alignItems: "center",
		justifyContent: "left",
		width: "100%",
		textStyle: "sm",
		color: "gray.01",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		minWidth: "0",
	},
});

export const InfoContainer = styled("div", {
	base: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		height: "30px",
		gap: "8px",
	},
});

export const InfoWrapper = styled("div", {
	base: {
		display: "flex",
		width: "100%",
		gap: "8px",
	},
});

export const Info = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		borderRadius: "8px",
		backgroundColor: "#DED7CE",
		flex: "1",
		fontSize: "12px",
		fontWeight: "medium",
		color: "gray.01",
	},
});

export const MobileMoreOptions = styled("div", {
	base: {
		position: "relative",
	},
});
