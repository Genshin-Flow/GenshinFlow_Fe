"use client";
import Button from "@/features/loginSignUp/components/buttonGroup/defaultButton";
import AuthMail from "@/features/loginSignUp/components/signUpGroup/signUpAuthMail";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import loginState from "@/stores/loginPageStateStore";
import { setNewPassword } from "@/fetch/Login/setNewPassword/newPassword";
import { MailAuthForm, InputStyle, ChangeButtonContainer } from "./style";

export default function ChangePasswordInput() {
	const { setModalState } = loginState();
	const [email, setEmail] = useState("");
	return (
		<MailAuthForm
			action="#"
			onSubmit={(event) => submitHandler(event, email, setModalState)}
			onChange={(event) => changeHandler(event, setEmail)}
		>
			<AuthMail
				platform="mobile"
				emailValue={email}
				setEmailValue={setEmail}
				mb={"mb12"}
				authCodeInput="mobileAuthInput"
			/>

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

function submitHandler(
	event: FormEvent<HTMLElement>,
	email: string,
	setModalState: (state: string) => void,
) {
	event.preventDefault();
	const target = event.target as HTMLElement;
	const $passwordVerify = target.children[1] as HTMLInputElement;
	const $newPassword = target.children[2] as HTMLInputElement;
	const passwordVerifyValue = $passwordVerify.value;
	const newPasswordValue = $newPassword.value;

	if (email === "") {
		setModalState("메일을 입력해주세요");
	} else if (passwordVerifyValue === "") {
		console.log(passwordVerifyValue);
		setModalState("인증코드를 입력해주세요");
	} else {
		setNewPassword(newPasswordValue, passwordVerifyValue, setModalState);
	}
}

function changeHandler(
	event: FormEvent<HTMLElement>,
	setEmail: Dispatch<SetStateAction<string>>,
) {
	const target = event.target as HTMLInputElement;
	if (target.type === "email") {
		setEmail(target.value);
	}
}
