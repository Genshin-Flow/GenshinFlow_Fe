"use client";
import Button from "@/components/loginSignUp/button/Button";
import { styled } from "@/../styled-system/jsx";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { stateType } from "@/app/page";

type propsType = {
	SetSelectBtn: Dispatch<SetStateAction<stateType>>;
};

export default function SelectButton(props: propsType) {
	const EventTargetRef = useRef<HTMLDivElement>(null);
	const clickFn = (event: MouseEvent) =>
		clickHandler(event, props.SetSelectBtn);

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
	SetSelectBtn: Dispatch<SetStateAction<stateType>>,
) {
	const target = event.target as HTMLElement;
	if (target.innerText === "로그인") {
		SetSelectBtn("login");
	} else if (target.innerText === "회원가입") {
		SetSelectBtn("signUp");
	}
}
