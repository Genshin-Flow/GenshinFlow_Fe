"use client";
import Button from "@/features/loginSignUp/components/button/Button";
import loginState, { stateType } from "@/stores/loginStateStore";
import React, { useEffect, useRef } from "react";

type propsType = {
	platform?: "mobile";
};

export default function ForgotPassword(props: propsType) {
	const { setSelectBtn } = loginState();
	const clickFn = (event: MouseEvent) => clickHandler(event, setSelectBtn);
	const buttonRef = useRef<HTMLDivElement>(null);
	// 클린업
	useEffect(() => {
		buttonRef.current?.addEventListener("click", clickFn);
		return () => buttonRef.current?.removeEventListener("click", clickFn);
	}, []);

	return (
		<div ref={buttonRef}>
			<Button variable="forgotPassword" platform={props.platform}>
				비밀번호를 잊어버렸어요
			</Button>
		</div>
	);
}

function clickHandler(
	event: MouseEvent,
	setSelectBtn: (state: stateType) => void,
) {
	const target = event.target as HTMLElement;
	if (target.innerText === "비밀번호를 잊어버렸어요") {
		setSelectBtn("authMailPassword");
	}
}
