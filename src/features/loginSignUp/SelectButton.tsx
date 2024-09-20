"use client";
import Button from "@/features/loginSignUp/components/button/Button";
import { styled } from "@/../styled-system/jsx";
import { useEffect, useRef } from "react";
import loginState, { stateType } from "@/stores/loginStateStore";

export default function SelectButton() {
	const EventTargetRef = useRef<HTMLDivElement>(null);
	const { setSelectBtn } = loginState();
	const clickFn = (event: MouseEvent) => clickHandler(event, setSelectBtn);

	useEffect(() => {
		EventTargetRef.current?.addEventListener("click", clickFn);
		return () => EventTargetRef.current?.removeEventListener("click", clickFn);
	}, []);
	return (
		<SelectBtnContainer ref={EventTargetRef} className="SelectBtnContainer">
			<Button variable="login" margin={"mb20"}>
				로그인
			</Button>
			<Button variable="signUp">회원가입</Button>
		</SelectBtnContainer>
	);
}

const SelectBtnContainer = styled("div", {
	base: {
		position: "absolute",
		top: "270.5px",
		padding: "60px 110px",
		transform: "translateX(0%)",
		transition: "transform 0.5s",
	},
});

function clickHandler(
	event: MouseEvent,
	SetSelectBtn: (state: stateType) => void,
) {
	const target = event.target as HTMLElement;
	if (target.innerText === "로그인") {
		SetSelectBtn("login");
	} else if (target.innerText === "회원가입") {
		SetSelectBtn("signUpSelect");
	}
}
