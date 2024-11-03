"use client";

import Button from "@/features/loginSignUp/components/button/Button";
import Input from "@/features/loginSignUp/components/Input/Input";
import { propsType } from "@/features/loginSignUp/SignIn";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import loginState from "@/stores/loginStateStore";
import { postLoginAuth } from "@/fetch/signIn/signIn";
import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { passwordValidation } from "@/features/loginSignUp/auth/passwordCheck/passwordValidation";

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
	// const getLocal = Number(localStorage.getItem("loginCount")) + 1;

	// loginCount(setModal, setLoginButtonState);
	// 데이터 fetch를 통한 유저의 로그인 틀린 횟수를 가져와 비교 ( 조건문 작성필요 )
	//  로그인을 틀리는 횟수를 카운트 하는 방법이 아직 명확하게 정해지지 않아 일단은 서버에서 해당 횟수를 받아오는걸 기준으로 작성
	if (emailValue === "" || passwordValue === "") {
		setModal("이메일 혹은 비밀번호를 올바르게 입력해주세요");
		return;
	} else if (!checkMail(emailValue) || !passwordValidation(passwordValue)) {
		setModal("이메일 혹은 비밀번호의 형식이 올바르지 않습니다.");
		return;
	}
	// 로그인 시도 및 에러 핸들링
	const data = await postLoginAuth(emailValue, passwordValue);
	if (data.status !== 200) {
		loginFailed(data, setModal, setLoginButtonState);
	}
}

// 로그인에 실패시 에러 핸들링 함수( 서버 개발자와 상의 후 수정 될 수 있음 )
export function loginFailed(
	data: any,
	setModal: (state: string) => void,
	setLoginButtonState: Dispatch<SetStateAction<"login" | "lock">>,
) {
	//  비민번호가 5회 미만으로 틀렸을시 동작하는 함수
	if (data) {
		setModal("메일주소 및 비밀번호가 틀렸습니다. 5회 틀릴 시 제한이 생깁니다");
		return;
	} else if (data) {
		setLoginButtonState("lock");
	}
	//	비밀번호가 10회 틀릴시 동작하는 함수
	if (data) {
		setModal(
			"10회 연속 오류로 계정이 보호 처리됩니다. 비밀번호를 변경해주세요",
		);
		return;
	}
}

// data return 타입에 비밀번호 틀린 횟수를 이용해 일정이상 틀리면 setLoginButtonState lock으로 변경
// export function loginCount(
// 	setModal: (state: string) => void,
// 	setLoginButtonState: Dispatch<SetStateAction<"login" | "lock">>,
// ) {
// 	const localLoginCount = Number(localStorage.getItem("loginCount"));
// 	if (Number.isInteger(localLoginCount)) {
// 		localStorage.setItem("loginCount", JSON.stringify(localLoginCount + 1));
// 		const getLocal = Number(localStorage.getItem("loginCount"));

// 		if (getLocal === 5) {
// 			setLoginButtonState("lock");
// 			setModal("5회 연속 오류로 30초 뒤 시도해주세요");
// 		} else if (getLocal >= 10) {
// 			setModal("10회 오류로 계정이 비활성화 됩니다.");
// 			localStorage.setItem("loginCount", JSON.stringify(0));
// 		}
// 	} else {
// 		localStorage.setItem("loginCount", JSON.stringify(0));
// 	}
// }
