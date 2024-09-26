"use client";
import { styled } from "@/../styled-system/jsx";
import Input from "@/features/loginSignUp/components/Input/Input";
import Button from "@/features/loginSignUp/components/button/Button";
import { FormEvent } from "react";
import loginState from "@/stores/loginStateStore";
import { setNewPassword } from "@/fetch/setNewPassword/newPassword";

export default function ForgotPass() {
	const { setModalState } = loginState();
	return (
		<ForgotPasContainer className="forgotPassword">
			<form
				action="#"
				onSubmit={(event) => submitHandler(event, setModalState)}
			>
				<Input type={"password"} placeholder={"새 비밀번호"} margin={"mb12"} />
				<Input
					type={"password"}
					placeholder={"비밀번호 확인"}
					margin={"mb60"}
				/>
				<Button variable="login">설정 완료</Button>
			</form>
		</ForgotPasContainer>
	);
}

function submitHandler(
	event: FormEvent<HTMLElement>,
	setModalState: (state: string) => void,
) {
	event.preventDefault();
	const target = event.target as HTMLElement;
	const $newPassword = target.children[0] as HTMLInputElement;
	const $passwordVerify = target.children[1] as HTMLInputElement;
	const newPasswordValue = $newPassword.value;
	const passwordVerifyValue = $passwordVerify.value;
	setNewPassword(newPasswordValue, passwordVerifyValue, setModalState);
}

const ForgotPasContainer = styled("article", {
	base: {
		width: "100%",
		position: "absolute",
		top: "253px",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		padding: "60px 110px",
	},
});
