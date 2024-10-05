"use client";
import { styled } from "@/../styled-system/jsx";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

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
				console.log(buttonCount);
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

const ButtonStyle = styled("button", {
	base: {
		width: "100%",
		height: "40px",
		borderRadius: "98px",
		textStyle: "xl",
		cursor: "pointer",
		transition: "0.5s background-color",
	},
	variants: {
		buttonType: {
			changePage: {
				borderRadius: "0",
				backgroundColor: "gray.06",
				color: "black",
				textStyle: "md",
			},
		},
		marginBottom: {
			mb12: {
				marginBottom: "12px",
			},
			mb40: {
				marginBottom: "40px",
			},
			mb48: {
				marginBottom: "48px",
			},
		},
		buttonState: {
			deActive: {
				backgroundColor: "gray.05",
				color: "#fff",
				pointerEvents: "none",
			},
			lock: {
				backgroundColor: "gray.05",
				color: "#fff",
				pointerEvents: "none",
			},
			login: {
				color: "#fff",
				backgroundColor: "primary.01",

				"&:hover": {
					backgroundColor: "gray.07",
					color: "black",
				},
			},
		},
	},
});
