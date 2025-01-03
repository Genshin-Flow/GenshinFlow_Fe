"use client";
import OauthButton from "@/features/loginSignUp/components/buttonGroup/oauthButton";
import { loginSvg } from "@/data/SvgUrl/svg";
import Button from "@/features/loginSignUp/components/buttonGroup/defaultButton";
import SignUp from "@/features/loginSignUp/components/signUpGroup/signUp";
import { useEffect, useRef } from "react";
import { nanoid } from "nanoid/non-secure";
import loginState, { stateType } from "@/stores/loginPageStateStore";
import { SignUpSelectContainer } from "./style";

export default function SignUpSelect() {
	const { selectBtn, setSelectBtn } = loginState();
	const targetRef = useRef<HTMLButtonElement>(null);
	const EventHandlerFn = (event: MouseEvent) =>
		clickHandler(event, setSelectBtn);

	useEffect(() => {
		targetRef.current?.addEventListener("click", EventHandlerFn);
		return () =>
			targetRef.current?.removeEventListener("click", EventHandlerFn);
	}, []);

	return (
		<>
			<SignUpSelectContainer
				className="SignUpSelectContainer"
				{...(selectBtn === "signUp" && { variant: "signUp" })}
				ref={targetRef}
			>
				{loginSvg.map((item, index) => (
					<OauthButton
						socialSignIn={item.oauth}
						buttonText={item.text}
						svgUrl={item.url}
						margin="mb12"
						{...(loginSvg.length === index + 1 && { margin: "mb40" })}
						key={nanoid()}
					/>
				))}
				<Button variable={"login"}>메일주소로 계정 만들기</Button>
			</SignUpSelectContainer>
			<SignUp />
		</>
	);
}

function clickHandler(
	event: MouseEvent,
	SetSelectBtn: (state: stateType) => void,
) {
	const target = event.target as HTMLElement;
	if (target.innerText === "메일주소로 계정 만들기") {
		SetSelectBtn("signUp");
	}
}
