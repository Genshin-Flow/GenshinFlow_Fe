"use client";
import Input from "@/features/loginSignUp/components/Input";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle";
import AuthMail from "@/features/loginSignUp/components/signUpGroup/signUpAuthMail";
import Button from "@/features/loginSignUp/mobile/components/button";
import { FormEvent, useState } from "react";
import { forgotPasswordAuthCode } from "@/fetch/AuthCode/forgotPasswordAuthCode/forgotPasswordAuthCode";
import { setNewPassword } from "@/fetch/Login/setNewPassword/newPassword";
import loginState from "@/stores/loginPageStateStore";
import { FindPasswordContainer } from "./style";
export default function ForgotPass() {
	const [emailValue, setEmailValue] = useState("");
	const { setModalState } = loginState();
	return (
		<FindPasswordContainer className="forgotPassContainer">
			<SubTitle platform="mobile">비밀번호 찾기</SubTitle>
			<form
				action="#"
				onSubmit={(event) => submitHandler(event, emailValue, setModalState)}
			>
				<AuthMail
					emailValue={emailValue}
					setEmailValue={setEmailValue}
					mb="mb20"
					platform="mobile"
					authCodeInput={"mobileAuthInput"}
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
					margin={"mb20"}
					platform="mobile"
				/>
				<Input
					type={"password"}
					placeholder={"비밀번호 확인"}
					margin={"mb40"}
					platform="mobile"
				/>
				<Button buttonState="login">다음</Button>
			</form>
		</FindPasswordContainer>
	);
}

async function submitHandler(
	event: FormEvent<HTMLElement>,
	emailValue: string,
	setModalState: (state: string) => void,
) {
	event.preventDefault();
	const target = event.target as HTMLElement;
	const email = emailValue;
	const $authCode = target.childNodes[1] as HTMLInputElement;
	const $newPassword = target.childNodes[2] as HTMLInputElement;
	const $verifyPassword = target.childNodes[3] as HTMLInputElement;
	const authCodeValue = $authCode.value;
	const newPasswordValue = $newPassword.value;
	const verifyPasswordValue = $verifyPassword.value;

	if (email === "") {
		setModalState("이메일을 입력해주세요");
	} else if (authCodeValue === "") {
		setModalState("인증코드를 입력해주세요");
	} else if (newPasswordValue === "") {
		setModalState("비밀번호는 소문자와 특수기호 1개 이상이 포함되어야 합니다");
	} else if (verifyPasswordValue !== newPasswordValue) {
		setModalState("비밀번호와 일치하지 않습니다.");
	} else {
		const result = await forgotPasswordAuthCode(verifyPasswordValue);
		if (result) {
			setNewPassword(newPasswordValue, verifyPasswordValue, setModalState);
		}
	}
}
