"use client";
import { InputStyle } from "@/features/mypage/components/changePasswordInput/ChangePasswordInput";
import { styled } from "@/../styled-system/jsx";

export default function RequestCode() {
	return (
		<RequestCodeContainer>
			<InputStyle type="email" placeholder={"메일주소"} marginTop="mt40" />
			<RequestCodeButton>인증코드 받기</RequestCodeButton>
		</RequestCodeContainer>
	);
}

const RequestCodeContainer = styled("div", {
	base: {
		position: "relative",
	},
});

const RequestCodeButton = styled("button", {
	base: {
		position: "absolute",
		top: "50%",
		right: "12px",
		transform: "translateY(-50%)",
		textStyle: "xs",
	},
	variants: {
		variant: {
			active: {
				color: "gray.03",
				pointerEvents: "none",
			},
		},
	},
});
