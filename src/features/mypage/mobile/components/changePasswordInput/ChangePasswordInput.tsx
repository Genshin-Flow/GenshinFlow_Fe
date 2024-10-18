"use client";
import { styled } from "@/../styled-system/jsx";
import Button from "@/features/loginSignUp/components/button/Button";
import RequestCode from "@/features/mypage/mobile/components/requestCode/RequestCode";
import { FormEvent } from "react";

export default function ChangePasswordInput() {
	return (
		<MailAuthForm action="#" onSubmit={submitHandler}>
			<RequestCode />
			<InputStyle
				type="text"
				placeholder={"메일로 전송된 코드를 입력하세요"}
				marginTop="mt20"
			/>
			<InputStyle
				type="password"
				placeholder={"새 비밀번호 입력"}
				marginTop="mt20"
			/>
			<ChangeButtonContainer>
				<Button variable="login" platform="mobile">
					변경 완료
				</Button>
			</ChangeButtonContainer>
		</MailAuthForm>
	);
}

function submitHandler(event: FormEvent<HTMLFormElement>) {
	event.preventDefault();
}

const MailAuthForm = styled("form", {
	base: {
		width: "100%",
	},
});

export const InputStyle = styled("input", {
	base: {
		display: "block",
		// 넓이 제한이 필요하다 판단 되면
		// maxWidth: "350px",
		width: "100%",
		height: "41px",
		backgroundColor: "primary.04",
		borderRadius: "8px",
		padding: "12px",
		boxSizing: "border-box",
	},
	variants: {
		marginTop: {
			mt40: {
				marginTop: "40px",
			},
			mt20: {
				marginTop: "20px",
			},
		},
	},
});

const ChangeButtonContainer = styled("div", {
	base: {
		width: "100%",
		// 넓이 제한이 필요하다 판단 되면
		// maxWidth: "390px",
		padding: "0 20px",
		left: "0",
		position: "absolute",
		bottom: "54px",
	},
});
