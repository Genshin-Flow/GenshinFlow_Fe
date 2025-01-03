"use client";
import { styled } from "@/../styled-system/jsx";
import ForgotPass from "@/features/loginSignUp/components/forgotPassGroup/forgotPassword";
import Input from "@/features/loginSignUp/components/Input";
import Button from "@/features/loginSignUp/components/buttonGroup/defaultButton";
import AuthMail from "@/features/loginSignUp/components/signUpGroup/signUpAuthMail";
import loginState, { stateType } from "@/stores/loginPageStateStore";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { forgotPasswordAuthCode } from "@/fetch/AuthCode/forgotPasswordAuthCode/forgotPasswordAuthCode";
import { AuthMailContainer } from "./style";

export default function ForgotPassAuthMail() {
	const [email, setEmail] = useState("");
	const { selectBtn, setModalState, setSelectBtn } = loginState();
	return (
		<>
			<AuthMailContainer
				className="AuthForChangePassword"
				{...(selectBtn === "forgotPassword" && { variant: selectBtn })}
			>
				<form
					action="#"
					onSubmit={(event) =>
						submitHandler(event, email, setModalState, setSelectBtn)
					}
					onChange={(event) => onChangeHandler(event, setEmail)}
				>
					<AuthMail
						emailValue={email}
						setEmailValue={setEmail}
						mb={"mb12"}
						authCodeInput={"authInput"}
					/>
					<Input type={"text"} placeholder={"인증코드"} margin={"mb60"} />
					<Button variable="login">새 비밀번호 설정</Button>
				</form>
			</AuthMailContainer>
			<ForgotPass />
		</>
	);
}

async function submitHandler(
	event: FormEvent<HTMLFormElement>,
	email: string,
	setModalState: (state: string) => void,
	setSelectBtn: (state: stateType) => void,
) {
	event.preventDefault();
	const target = event.target as HTMLElement;
	const $authCode = target.children[1] as HTMLInputElement;
	const authCodeValue = $authCode.value;
	if (authCodeValue === "") {
		setModalState("인증코드를 입력해주세요");
	} else if (email === "") {
		setModalState("이메일을 입력해주세요");
	} else {
		// 배포시 조건문 수정
		const authCodeResult = await forgotPasswordAuthCode(authCodeValue);
		if (true) {
			setSelectBtn("forgotPassword");
		}
	}
}

function onChangeHandler(
	event: FormEvent<HTMLFormElement>,
	setEmail: Dispatch<SetStateAction<string>>,
) {
	const target = event.target as HTMLInputElement;
	if (target.type === "email") {
		setEmail(target.value);
	}
}
