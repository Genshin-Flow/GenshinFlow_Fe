"use client";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle";
import AuthMail from "@/features/loginSignUp/components/signUpGroup/signUpAuthMail";
import Input from "@/features/loginSignUp/components/Input";
import { FormEvent, useState } from "react";
import Checkbox from "@/features/loginSignUp/components/checkBox";
import Button from "@/features/loginSignUp/mobile/components/button";
import { signUp } from "@/fetch/Login/signUp/signUp";
import loginState from "@/stores/loginPageStateStore";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SignUpContainer } from "./style";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [checkState, setCheckState] = useState(false);
	const { setModalState } = loginState();
	const router = useRouter();
	const variable = checkState === true ? "login" : "deActive";
	const submitHandler = (event: FormEvent<HTMLFormElement>) =>
		SubmitHandler(event, email, setModalState, router);
	return (
		<SignUpContainer className="signUpContainer">
			<SubTitle platform="mobile">계정 만들기</SubTitle>
			<form action="#" onSubmit={submitHandler}>
				<AuthMail
					emailValue={email}
					setEmailValue={setEmail}
					mb={"mb20"}
					platform="mobile"
				/>
				<Input
					type={"text"}
					placeholder={"인증코드"}
					margin={"mb20"}
					platform="mobile"
				/>
				<Input
					type={"password"}
					placeholder={"비밀번호"}
					margin={"mb16"}
					platform="mobile"
				/>
				<Input
					type={"text"}
					placeholder={"UID"}
					margin={"mb16"}
					platform="mobile"
				/>
				<Checkbox
					checkState={checkState}
					setCheckState={setCheckState}
					mb="mb40"
				/>
				<Button buttonState={variable}>회원가입</Button>
			</form>
		</SignUpContainer>
	);
}

async function SubmitHandler(
	event: FormEvent<HTMLFormElement>,
	emailValue: string,
	setModal: (state: string) => void,
	router: AppRouterInstance,
) {
	event.preventDefault();
	const target = event.target as HTMLElement;
	const $authCode = target.children[1] as HTMLInputElement;
	const $password = target.children[2] as HTMLInputElement;
	const $uid = target.children[3] as HTMLInputElement;
	const passwordValue = $password.value;
	const authCodeValue = $authCode.value;
	const uidValue = $uid.value;
	signUp(emailValue, passwordValue, authCodeValue, uidValue, setModal, router);
}
