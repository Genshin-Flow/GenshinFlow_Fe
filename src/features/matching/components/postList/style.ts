import { styled } from "@/../styled-system/jsx";

export const PostListContainer = styled("div", {
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

export const VisibleTabList = styled("div", {
	base: {
		width: "100%",
		height: "1px", // 충분한 높이 설정
		display: "block",
		flex: "0 0 1px",
	},
});
