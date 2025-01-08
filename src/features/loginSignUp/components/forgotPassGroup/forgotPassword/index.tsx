"use client";
import Input from "@/features/loginSignUp/components/Input";
import Button from "@/features/loginSignUp/components/buttonGroup/defaultButton";
import AuthMail from "@/features/loginSignUp/components/signUpGroup/signUpAuthMail";
import loginState, { stateType } from "@/stores/loginPageStateStore";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { forgotPasswordAuthCode } from "@/fetch/AuthCode/forgotPasswordAuthCode/forgotPasswordAuthCode";
import { AuthMailContainer } from "./style";

export default function ForgotPassword() {
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
					<Input type={"text"} placeholder={"인증코드"} margin={"mb12"} />
					<Input
						type={"password"}
						placeholder={"새 비밀번호"}
						margin={"mb12"}
					/>
					<Input
						type={"password"}
						placeholder={"비밀번호 확인"}
						margin={"mb40"}
					/>
					<Button variable="login">비밀번호 변경</Button>
				</form>
			</AuthMailContainer>
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
}
