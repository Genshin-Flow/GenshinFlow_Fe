"use client";
import { styled } from "@/../styled-system/jsx";
import Input from "@/features/loginSignUp/components/Input/Input";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle/SubTitle";
import AuthMail from "@/features/loginSignUp/components/signUp/AuthMail";
import Button from "@/features/loginSignUp/components/button/Button";
import Checkbox from "@/features/loginSignUp/components/checkBox/Checkbox";
import { FormEvent, useState } from "react";
import loginState from "@/stores/loginStateStore";
import { signUpInfoCheck } from "@/fetch/signUp/signUpfMailFetch";

export default function SignUp() {
	const [checkState, setCheckState] = useState(false);
	const [emailValue, setEmailValue] = useState("");
	const { setModalState } = loginState();
	const variable = checkState === true ? "login" : "deActive";
	return (
		<>
			<SignUpContainer className="SignUp">
				<SubTitle>계정 만들기</SubTitle>
				<AuthMail
					emailValue={emailValue}
					setEmailValue={setEmailValue}
					mb={"mb12"}
				/>
				<form
					onSubmit={(event) => submitHandler(event, emailValue, setModalState)}
				>
					<Input type={"password"} placeholder={"비밀번호"} margin={"mb12"} />
					<Input type={"text"} placeholder={"인증코드"} margin={"mb12"} />
					<Input type={"text"} placeholder={"UID"} margin={"mb20"} />
					<Checkbox checkState={checkState} setCheckState={setCheckState} />
					<Button variable={variable}>회원가입</Button>
				</form>
			</SignUpContainer>
		</>
	);
}

function submitHandler(
	event: FormEvent<HTMLElement>,
	emailValue: string,
	setModalState: (state: string) => void,
) {
	event.preventDefault();
	const target = event.target as HTMLFormElement;
	const $password = target.children[0] as HTMLInputElement;
	const $authCode = target.children[1] as HTMLInputElement;
	const passwordValue = $password.value;
	const authCodeValue = $authCode.value;
	signUpInfoCheck(emailValue, passwordValue, authCodeValue, setModalState);
}

const SignUpContainer = styled("article", {
	base: {
		position: "absolute",
		top: "240px",
		padding: "60px 110px",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
	},
});
