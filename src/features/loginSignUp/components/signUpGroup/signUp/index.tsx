"use client";
import Input from "@/features/loginSignUp/components/Input";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle";
import AuthMail from "@/features/loginSignUp/components/signUpGroup/signUpAuthMail";
import Button from "@/features/loginSignUp/components/buttonGroup/defaultButton";
import Checkbox from "@/features/loginSignUp/components/checkBox";
import { FormEvent, useState } from "react";
import loginState from "@/stores/loginPageStateStore";
import { signUp } from "@/fetch/Login/signUp/signUp";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SignUpContainer } from "./style";

class SignUpError extends Error {
	response: Response;
	constructor(message: string, response: Response) {
		super(message);
		this.response = response;
	}
}

export default function SignUp() {
	const [checkState, setCheckState] = useState(false);
	const [emailValue, setEmailValue] = useState("");
	const { setModalState } = loginState();
	const router = useRouter();
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
					onSubmit={(event) =>
						submitHandler(event, emailValue, setModalState, router)
					}
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

async function submitHandler(
	event: FormEvent<HTMLElement>,
	emailValue: string,
	setModalState: (state: string) => void,
	router: AppRouterInstance,
) {
	try {
		event.preventDefault();
		const target = event.target as HTMLFormElement;
		const $password = target.children[0] as HTMLInputElement;
		const $authCode = target.children[1] as HTMLInputElement;
		const $uid = target.children[2] as HTMLInputElement;
		const passwordValue = $password.value;
		const authCodeValue = $authCode.value;
		const uidValue = $uid.value;
		const response = await signUp(
			emailValue,
			passwordValue,
			authCodeValue,
			uidValue,
			setModalState,
			router,
		);

		if (!response) {
			throw new Error("서버 응답이 없습니다.");
		}
		if (!response.ok) {
			switch (response.status) {
				case 409:
					throw new SignUpError("동일한 이메일이 이미 존재합니다.", response);
				case 400:
					throw new SignUpError("인증코드가 일치하지 않습니다", response);
				default:
					throw new SignUpError("알 수 없는 오류가 발생했습니다.", response);
			}
		}
		// 성공 케이스
		setModalState("가입이 완료 되었습니다!");
	} catch (error) {
		if (error instanceof Error) {
			setModalState(error.message);
		}
	}
}
