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
		width: "110px",
		height: "48px",
		backgroundColor: "transparent",
		border: "none",
		fontSize: "16px",
		fontWeight: "medium",
	},
});

export const MyPageButton = styled("button", {
	base: {
		cursor: "pointer",
		width: "110px",
		height: "48px",
		backgroundColor: "transparent",
		border: "none",
		fontSize: "16px",
		fontWeight: "medium",
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
