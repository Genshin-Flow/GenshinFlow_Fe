import { styled } from "@/../styled-system/jsx";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle/SubTitle";
import AuthMail from "@/features/loginSignUp/components/signUp/AuthMail";
import Input from "@/features/loginSignUp/components/Input/Input";
import { FormEvent, useState } from "react";
import Checkbox from "@/features/loginSignUp/components/checkBox/Checkbox";
import Button from "@/features/loginSignUp/mobile/components/button/Button";
import { signUpInfoCheck } from "@/fetch/signUp/signUpfMailFetch";
import loginState from "@/stores/loginStateStore";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
			<form action="" onSubmit={submitHandler}>
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

const SignUpContainer = styled("article", {
	base: {
		width: "100%",
		position: "absolute",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		top: "346px",
		left: "0",
		padding: "0 20px",
	},
});

async function SubmitHandler(
	event: FormEvent<HTMLFormElement>,
	emailValue: string,
	setModal: (state: string) => void,
	router: AppRouterInstance,
) {
	event.preventDefault();
	const target = event.target as HTMLElement;
	const $mailAuthDom = target.children[1] as HTMLInputElement;
	const $password = target.children[2] as HTMLInputElement;
	const passwordValue = $password.value;
	const mailAuthValue = $mailAuthDom.value;
	signUpInfoCheck(emailValue, passwordValue, mailAuthValue, setModal, router);
}
