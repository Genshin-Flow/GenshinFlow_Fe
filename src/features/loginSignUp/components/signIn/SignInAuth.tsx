"use client";
import Button from "@/features/loginSignUp/components/button/Button";
import Input from "@/features/loginSignUp/components/Input/Input";
import { propsType } from "@/features/loginSignUp/SignIn";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import loginState from "@/stores/loginStateStore";
import { postLoginAuth } from "@/fetch/signIn/signIn";
import { passwordValidation } from "@/features/loginSignUp/auth/passwordCheck/passwordValidation";
import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { loginReturnType } from "@/fetch/signIn/signIn";

export default function SignInAuth(props: propsType) {
	const { setModalState } = loginState();
	const formRef = useRef<HTMLFormElement>(null);
	const [loginButtonState, setLoginButtonState] = useState<"login" | "lock">(
		"login",
	);

	return (
		<form
			ref={formRef}
			onSubmit={(event) =>
				submitHandler(event, setModalState, setLoginButtonState)
			}
			method="post"
			action={"#"}
		>
			<Input
				type="email"
				placeholder="메일주소"
				{...(props.mb && { margin: props.mb })}
				margin="mb12"
			/>
			<Input type="password" placeholder="비밀번호" margin="mb40" />
			<Button
				variable={loginButtonState}
				margin={"mb12"}
				setSignInButton={setLoginButtonState}
			>
				로그인
			</Button>
		</form>
	);
}

// 로그인에 필요한 값을 추출하고 유효성 검사를 실시하는 함수
async function submitHandler(
	event: FormEvent<HTMLFormElement>,
	setModal: (state: string) => void,
	setLoginButtonState: Dispatch<SetStateAction<"login" | "lock">>,
) {
	event.preventDefault();
	const target = event.target as HTMLFormElement;
	const $email = target.children[0] as HTMLInputElement;
	const $password = target.children[1] as HTMLInputElement;
	const emailValue = $email.value;
	const passwordValue = $password.value;
	try {
		if (emailValue === "") {
			setModal("이메일을 입력해주세요");
			return;
		} else if (passwordValue === "") {
			setModal("비밀번호를 입력해주세요");
			return;
		} else if (!checkMail(emailValue) || !passwordValidation(passwordValue)) {
			setModal("이메일 혹은 비밀번호의 형식이 올바르지 않습니다");
			return;
		} else {
			const response = (await postLoginAuth(
				emailValue,
				passwordValue,
			)) as loginReturnType;
			if (response.message === "로그인 실패") {
				throw new CustomError("로그인 실패", {
					failLoginCount: response.failLoginCount,
					message: response.message,
				});
			}
		}
	} catch (error) {
		if (error instanceof CustomError) {
			switch (Number(error.customData.failLoginCount)) {
				case 5:
					setLoginButtonState("lock");
					setModal("5회 연속 오류로 30초 뒤 시도해주세요");
					break;
				case 10:
					setModal(
						"10회 연속 오류로 계정이 보호 처리됩니다. 비밀번호를 변경해주세요",
					);
					break;
				default:
					setModal(
						"메일주소 및 비밀번호가 틀렸습니다. 5회 틀릴 시 제한이 생깁니다",
					);
			}
		}
	}
}

export class CustomError extends Error {
	customData: loginReturnType;

	constructor(message: string, customData: loginReturnType) {
		super(message);
		this.message = message;
		this.customData = customData;

		// Maintains proper stack trace for where the error was thrown (only for V8 engines)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CustomError);
		}
	}
}
