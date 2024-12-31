"use client";
import { styled } from "@/../styled-system/jsx";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle/SubTitle";
import Input from "@/features/loginSignUp/components/Input/Input";
import Button from "@/features/loginSignUp/mobile/components/button/Button";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { postLoginAuth } from "@/fetch/Login/signIn/signIn";
import { loginFailed } from "@/features/loginSignUp/components/signIn/SignInAuth";
import loginState from "@/stores/loginPageStateStore";
import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { passwordValidation } from "@/features/loginSignUp/auth/passwordCheck/passwordValidation";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Cookies } from "react-cookie";

export default function SignIn() {
	const { setModalState } = loginState();
	const [loginButtonState, setLoginButtonState] = useState<"login" | "lock">(
		"login",
	);
	const router = useRouter();
	const handler = (event: FormEvent<HTMLFormElement>) =>
		submitHandler(event, setModalState, setLoginButtonState, router, cookies);
	const cookies = new Cookies();
	return (
		<LoginContainer className="loginContainer">
			<SubTitle platform="mobile">로그인</SubTitle>
			<form action="" onSubmit={handler}>
				<Input
					type={"email"}
					placeholder={"메일주소"}
					margin={"mb20"}
					platform="mobile"
				/>
				<Input
					type={"password"}
					placeholder={"비밀번호"}
					margin={"mb40"}
					platform="mobile"
				/>
				<Button
					buttonState={loginButtonState}
					setSignInButton={setLoginButtonState}
				>
					로그인
				</Button>
			</form>
		</LoginContainer>
	);
}

const LoginContainer = styled("article", {
	base: {
		width: "100%",
		position: "absolute",
		transform: "translate(200%)",
		transition: "transform 0.5s",
		top: "308px",
		left: "0",
		padding: "0 20px",
	},
});

async function submitHandler(
	event: FormEvent,
	setModal: (state: string) => void,
	buttonState: Dispatch<SetStateAction<"login" | "lock">>,
	router: AppRouterInstance,
	cookies: Cookies,
) {
	event.preventDefault();
	const target = event.target as HTMLElement;
	const $emailDom = target.childNodes[0] as HTMLInputElement;
	const $passwordDom = target.childNodes[1] as HTMLInputElement;
	const emailValue = $emailDom.value;
	const passwordValue = $passwordDom.value;
	// const getLocal = Number(localStorage.getItem("loginCount")) + 1;
	if (emailValue === "" || passwordValue === "") {
		setModal("이메일 혹은 비밀번호를 올바르게 입력해주세요");
		return;
	} else if (!checkMail(emailValue) || !passwordValidation(passwordValue)) {
		setModal("이메일 혹은 비밀번호의 형식이 올바르지 않습니다.");
		return;
	}
	const data = await postLoginAuth(emailValue, passwordValue);
	if (!data.ok) {
		loginFailed(data, setModal, buttonState);
	}

	cookies.set("accessToken", data.accessToken);
	cookies.set("refreshToken", data.refreshToken);
	router.push("/");
}
