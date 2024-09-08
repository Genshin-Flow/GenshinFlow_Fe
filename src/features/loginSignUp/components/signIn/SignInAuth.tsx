"use client";

import Button from "@/features/loginSignUp/components/button/Button";
import Input from "@/features/loginSignUp/components/Input/Input";
import { propsType } from "@/features/loginSignUp/SignIn";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import loginState from "@/stores/loginStateStore";
import { postLoginAuth } from "@/fetch/signIn/signIn";

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
	const data = await postLoginAuth(emailValue, passwordValue);
	const getLocal = Number(localStorage.getItem("loginCount")) + 1;

	loginCount(setModal, setLoginButtonState);
	// 데이터 fetch를 통한 유저의 로그인 틀린 횟수를 가져와 비교
	if (data) {
		setModal(
			"10회 연속 오류로 계정이 보호 처리됩니다. 비밀번호를 변경해주세요",
		);
	}

	if (getLocal !== 5 && getLocal !== 10) {
		if (emailValue === "") {
			setModal("이메일을 입력해주세요");
			return;
		} else {
			setModal(
				"메일주소 및 비밀번호가 틀렸습니다. 5회 틀릴 시 제한이 생깁니다",
			);
			return;
		}
	}
}

// data return 타입에 비밀번호 틀린 횟수를 이용해 일정이상 틀리면 setLoginButtonState lock으로 변경
export function loginCount(
	setModal: (state: string) => void,
	setLoginButtonState: Dispatch<SetStateAction<"login" | "lock">>,
) {
	const localLoginCount = Number(localStorage.getItem("loginCount"));
	if (localLoginCount) {
		localStorage.setItem("loginCount", JSON.stringify(localLoginCount + 1));
		const getLocal = Number(localStorage.getItem("loginCount"));
		if (getLocal === 5) {
			setLoginButtonState("lock");
			setModal("5회 연속 오류로 30초 뒤 시도해주세요");
		} else if (getLocal === 10) {
			setModal("비밀번호를 10회 오류로 계정이 비활성화 됩니다.");
			localStorage.setItem("loginCount", JSON.stringify(1));
		}
	} else {
		localStorage.setItem("loginCount", JSON.stringify(0));
	}
}
