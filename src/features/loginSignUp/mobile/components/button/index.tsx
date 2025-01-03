"use client";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { ButtonStyle } from "./style";

type propsType = {
	changePage?: boolean;
	buttonState?: "login" | "deActive" | "lock";
	mb?: "mb12" | "mb40" | "mb48";
	children: string;
	setSignInButton?: Dispatch<SetStateAction<"login" | "lock">>;
};

export default function Button(props: propsType) {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const intervalTime = 1000;
	let buttonCount = 30;
	useEffect(() => {
		if (props.buttonState === "lock") {
			const timer = setInterval(() => {
				buttonCount -= 1;
				buttonRef.current!.innerText = `${buttonCount}s`;
				if (buttonCount <= 0 && props.setSignInButton) {
					buttonRef.current!.innerText = `로그인`;
					clearInterval(timer);
					props.setSignInButton("login");
				}
			}, intervalTime);
		}
	}, [props.buttonState]);

	return (
		<ButtonStyle
			{...(props.changePage && { buttonType: "changePage" })}
			{...(props.mb && { marginBottom: props.mb })}
			{...(props.buttonState && { buttonState: props.buttonState })}
			ref={buttonRef}
		>
			{props.children}
		</ButtonStyle>
	);
}
