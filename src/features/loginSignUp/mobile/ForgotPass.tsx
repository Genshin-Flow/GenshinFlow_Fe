"use client";
import { styled } from "@/../styled-system/jsx";
import Input from "@/features/loginSignUp/components/Input/Input";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle/SubTitle";
import AuthMail from "@/features/loginSignUp/components/signUp/AuthMail";
import Button from "@/features/loginSignUp/mobile/components/button/Button";
import { useState } from "react";

export default function ForgotPass() {
	const [emailValue, setEmailValue] = useState("");
	return (
		<FindPasswordContainer className="forgotPassContainer">
			<SubTitle platform="mobile">비밀번호 찾기</SubTitle>
			<AuthMail
				emailValue={emailValue}
				setEmailValue={setEmailValue}
				mb="mb20"
				platform="mobile"
				authCodeInput={true}
			/>
			<Input
				type={"text"}
				placeholder={"메일로 전송된 코드를 입력하세요"}
				margin={"mb20"}
				platform="mobile"
			/>
			<Input
				type={"password"}
				placeholder={"새 비밀번호 입력"}
				margin={"mb40"}
				platform="mobile"
			/>
			<Button buttonState="login">다음</Button>
		</FindPasswordContainer>
	);
}

const FindPasswordContainer = styled("article", {
	base: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "346px",
		left: "0",
		padding: "0 20px",
		transform: "translate(200%)",
		transition: "transform 0.5s",
	},
});
