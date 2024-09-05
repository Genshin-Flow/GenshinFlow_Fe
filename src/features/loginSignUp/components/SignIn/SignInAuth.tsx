"use client";

import Button from "@/features/loginSignUp/components/button/Button";
import Input from "@/features/loginSignUp/components/Input/Input";
import { propsType } from "@/features/loginSignUp/SignIn";
import { FormEvent, useRef } from "react";
import loginState from "@/stores/loginStateStore";
import { emailPattern } from "@/features/loginSignUp/regularExpression/emailregularExpression";

const loginApi = process.env.login as string;

// return 타입 기입
type fetchReturnType = {
	state: number;
};

export default function SignInAuth(props: propsType) {
	const { setModalState } = loginState();
	const formRef = useRef<HTMLFormElement>(null);
	return (
		<form
			ref={formRef}
			onSubmit={(event) => submitHandler(event, setModalState)}
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
			<Button variable={"login"} margin={"mb12"}>
				로그인
			</Button>
		</form>
	);
}

// 로그인에 필요한 값을 추출하고 유효성 검사를 실시하는 함수
function submitHandler(
	event: FormEvent<HTMLFormElement>,
	setModal: (state: string) => void,
) {
	event.preventDefault();
	const target = event.target as HTMLFormElement;
	const $email = target.children[0] as HTMLInputElement;
	const $password = target.children[1] as HTMLInputElement;
	const emailValue = $email.value;
	const passwordValue = $password.value;
	if (emailPattern.test(emailValue) === true) {
		postLoginAuth(emailValue, passwordValue, setModal);
	} else {
		setModal("메일주소 및 비밀번호가 틀렸습니다. 5회 틀릴 시 제한이 생깁니다");
	}
}

/**로그인 인증 함수
 *
 * @param emailValue
 * 이메일 값을 담은 매개변수
 * @param passwordValue
 * 비밀번호 값을 담은 매개변수
 * @returns
 */

async function postLoginAuth(
	emailValue: string,
	passwordValue: string,
	setModal: (state: string) => void,
): Promise<fetchReturnType> {
	try {
		const response = await fetch(loginApi, {
			method: "post",
			headers: {
				"content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
				password: passwordValue,
			}),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		setModal("메일주소 및 비밀번호가 틀렸습니다. 5회 틀릴 시 제한이 생깁니다");
		return { state: 400 };
	}
}
