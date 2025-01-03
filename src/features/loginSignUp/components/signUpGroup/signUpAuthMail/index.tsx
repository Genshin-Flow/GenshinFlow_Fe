"use client";
import Input from "@/features/loginSignUp/components/Input";
import loginState from "@/stores/loginPageStateStore";
import {
	Dispatch,
	FormEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { postAuthMail } from "@/features/loginSignUp/auth/mailAuth/mailAuth";
import { AuthMailContainer, SendMailCount, SendMailButton } from "./style";

type propsType = {
	emailValue: string;
	setEmailValue: Dispatch<SetStateAction<string>>;
	mb: "mb12" | "mb20";
	platform?: "mobile";
	authCodeInput?: "mobileAuthInput" | "authInput";
};

export default function AuthMail(props: propsType) {
	const { setModalState } = loginState();
	const [postCodeState, setPostCodeState] = useState(0);
	const postCodeVariable = postCodeState ? "postCode" : "";

	useEffect(() => {
		if (postCodeState > 0) {
			setTimeout(() => {
				const decrease = postCodeState - 1;
				setPostCodeState(decrease);
			}, 1000);
		}
	}, [postCodeState]);

	return (
		<AuthMailContainer
			onChange={(event) => changeHandler(event, props.setEmailValue)}
			{...(postCodeVariable && { variant: postCodeVariable })}
			{...(props.mb && { marginBottom: props.mb })}
		>
			<Input
				type={"email"}
				placeholder={"메일주소"}
				margin={"mb0"}
				platform={props.platform}
				authCodeInput={props.authCodeInput}
			/>
			<SendMailCount
				className="mailAuthCount"
				{...(props.platform && { platform: props.platform })}
			>
				{postCodeState}s
			</SendMailCount>
			<SendMailButton
				className="postMailAuth"
				onClick={() =>
					postAuthMail(props.emailValue, setModalState, setPostCodeState)
				}
				type="button"
				{...(props.platform && { platform: props.platform })}
			>
				인증코드 받기
			</SendMailButton>
		</AuthMailContainer>
	);
}

function changeHandler(
	event: FormEvent<HTMLDivElement>,
	setEmailValue: Dispatch<SetStateAction<string>>,
) {
	const target = event.target as HTMLInputElement;
	const emailValue = target.value;
	setEmailValue(emailValue);
}
