import { styled } from "@/../styled-system/jsx";

export default function MobileMypage() {
	return <MyPageContainer></MyPageContainer>;
}

const MyPageContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		backgroundColor: "primary.02",
	},
});
