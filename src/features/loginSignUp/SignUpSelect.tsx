"use client";
import { styled } from "@/../styled-system/jsx";
import OauthButton from "@/features/loginSignUp/components/button/OauthButton";
import { loginSvg } from "@/data/SvgUrl/svg";
import Button from "@/features/loginSignUp/components/button/Button";
import SignUp from "@/features/loginSignUp/SignUp";
import { useEffect, useRef } from "react";
import { nanoid } from "nanoid/non-secure";
import loginState, { stateType } from "@/stores/loginStateStore";

export default function SignUpSelect() {
	const { selectBtn, setSelectBtn } = loginState();
	const targetRef = useRef<HTMLButtonElement>(null);
	const EventHandlerFn = (event: MouseEvent) =>
		ClickHandler(event, setSelectBtn);

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

const SignUpSelectContainer = styled("article", {
	base: {
		position: "absolute",
		padding: "60px 110px",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		top: "253px",
	},

	variants: {
		variant: {
			signUp: {
				transform: "translateX(-200%)",

				"& .SignUp": {
					transform: "translateX(0%)",
				},
			},
		},
	},
});

function ClickHandler(
	event: MouseEvent,
	SetSelectBtn: (state: stateType) => void,
) {
	const target = event.target as HTMLElement;
	if (target.innerText === "메일주소로 계정 만들기") {
		SetSelectBtn("signUp");
	}
}
