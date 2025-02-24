import { styled } from "../../../styled-system/jsx";

export const FooterContainer = styled("footer", {
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "15%",
		backgroundColor: "primary.01",
	},
});

export const CenterContainer = styled("div", {
	base: {
		display: "flex",
		maxWidth: "1639px",
		minWidth: "1318px",
		height: "71px",
		flex: "1",
		padding: "0 40px",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export const TextGroup = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
	},
	variants: {
		isMobile: {
			true: {
				gap: "16px",
			},
		},
	},
});

export const DescText = styled("p", {
	base: {
		fontSize: "16px",
		fontWeight: "medium",
		color: "#DADADA",
	},
	variants: {
		isMobile: {
			true: {
				fontSize: "14px",
			},
		},
	},
});

export const ShortCutContainer = styled("div", {
	base: {
		display: "flex",
		gap: "25px",
	},
	variants: {
		isMobile: {
			true: {
				justifyContent: "space-between",
				gap: "0",
			},
		},
	},
});

export const FlexContainer = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "12px",
	},
});

export const TitleText = styled("p", {
	base: {
		fontSize: "16px",
		fontWeight: "medium",
		color: "#DADADA",
		width: "115px",
	},
	variants: {
		isMobile: {
			true: {
				fontSize: "14px",
			},
		},
	},
});

export const Discord = styled("a", {
	base: {
		fontSize: "14px",
		fontWeight: "medium",
		color: "#B2B2B2",
		textDecoration: "none",
		paddingLeft: "32px",
		backgroundImage: "url(/svgs/discord.svg)",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left center",
	},
	variants: {
		isMobile: {
			true: {
				fontSize: "12px",
			},
		},
	},
});

export const LinkText = styled("a", {
	base: {
		cursor: "pointer",
		fontSize: "14px",
		fontWeight: "medium",
		color: "#B2B2B2",
		textDecoration: "none",
		width: "116px",
	},
	variants: {
		isMobile: {
			true: {
				fontSize: "12px",
				width: "110px",
			},
		},
	},
});

export const LinkGroup = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "6px",
	},
});

export const LinkContainer = styled("div", {
	base: {
		display: "flex",
		gap: "20px",
	},
});

// 모바일
export const MobileFooterContainer = styled("footer", {
	base: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: "20px 20px",
		backgroundColor: "primary.01",
		gap: "8px",
	},
});
