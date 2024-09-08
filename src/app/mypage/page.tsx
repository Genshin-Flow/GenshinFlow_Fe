import MobileMypage from "@/features/mypage/mobile/MobileMypage";
import React from "react";
import { styled } from "@/../styled-system/jsx";

export default function page() {
	return (
		<MyPageContainer>
			<MobileMypage />
		</MyPageContainer>
	);
}

const MyPageContainer = styled("div", {
	base: {
		backgroundColor: "primary.02",
		padding: "95px 20px",
	},
});
