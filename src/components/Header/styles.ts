import { styled } from "../../../styled-system/jsx";

export const HeaderContainer = styled("header", {
	base: {
		height: "10%",
		top: "0",
		left: "0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
});

export const CenterContainer = styled("div", {
	base: {
		display: "flex",
		maxWidth: "1639px",
		minWidth: "1318px",
		flex: "1",
		padding: "0 40px",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export const Logo = styled("img", {
	base: {
		cursor: "pointer",
		width: "100px",
		height: "45.54px",
	},
});

export const LoginButton = styled("button", {
	base: {
		cursor: "pointer",
		backgroundColor: "transparent",
		border: "none",
		fontSize: "14px",
		fontWeight: "400",
		color: "#fff",
	},
});

export const MyPageButton = styled("button", {
	base: {
		cursor: "pointer",
		width: "52px",
		height: "52px",
		borderRadius: "50%",
		backgroundColor: "primary.02",
		border: "1px solid #696969",
		boxSizing: "border-box",
		padding: "5px",
	},
});

// 모바일
export const MobileContainer = styled("header", {
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: "64px",
		backgroundColor: "primary.01",
		padding: "0 20px",
	},
});

export const MobileLogo = styled("img", {
	base: {
		cursor: "pointer",
		width: "73.57px",
		height: "24px",
	},
});

export const Btns = styled("div", {
	base: {
		display: "flex",
		height: "24px",
		alignItems: "center",
		gap: "8px",
		"& a": {
			height: "24px",
		},
	},
});

export const MypageIcon = styled("img", {
	base: {
		width: "100%",
		height: "100%",
		display: "block",
		objectFit: "cover",
		overflow: "hidden",
	},
});

export const Button = styled("button", {
	base: {
		cursor: "pointer",
		width: "24px",
		height: "24px",
		backgroundColor: "#EBE7DE",
		border: "none",
		borderRadius: "50%",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "24px 24px",

		"& > a": {
			width: "100%",
			height: "100%",
			display: "block",
		},
	},
	variants: {
		style: {
			menu: {
				backgroundImage: "url(/svgs/menu.svg)",
			},
			login: {
				backgroundImage: "url(/svgs/user.svg)",
			},
		},
	},
});

export const MenuButtonContainer = styled("div", {
	base: {
		position: "relative",
		width: "24px",
		height: "24px",
	},
});

export const HeaderRightBox = styled("div", {
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

export const LoginIconBox = styled("div", {
	base: {
		position: "relative",
		width: "24px",
		height: "24px",
		marginRight: "20px",
		"&::after": {
			content: "''",
			width: "1px",
			height: "60%",
			position: "absolute",
			right: "-10px",
			top: "50%",
			transform: "translate(-50%,-50%)",
			backgroundColor: "#fff",
		},
	},
});

export const LoginBox = styled("div", {
	base: {
		"& > a": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			padding: "12px 14px",
			backgroundColor: "primary.01",
			borderRadius: "5px",
		},
	},
});

export const LanguageBox = styled("button", {
	base: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "primary.01",
		borderRadius: "5px 5px 0 0",
		padding: "9px 14px",
		marginRight: "24px",
		cursor: "pointer",
		"& img": {
			pointerEvents: "none",
			marginLeft: "10px",
		},
	},
});

export const LanguageBoxSpan = styled("span", {
	base: {
		position: "relative",
		fontSize: "14px",
		fontWeight: "400",
		color: "#fff",
		pointerEvents: "none",
	},
});

export const LanguageItemBox = styled("ul", {
	base: {
		position: "absolute",
		top: "100%",
		left: "0",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "primary.07",
		borderRadius: "0 0 5px 5px",
		padding: "4px 0",
		color: "#fff",
		fontSize: "14px",
		fontWeight: "400",
	},
});
