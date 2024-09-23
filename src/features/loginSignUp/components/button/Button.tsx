"use client";
import { styled } from "@/../styled-system/jsx";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useRef } from "react";

type propsType = {
	children: string;
	//  string 타입을 variants의 값으로 사용할 수 없어 타입 any 사용
	platform?: "mobile";
	variable?: "login" | "signUp" | "forgotPassword" | "deActive" | "lock";
	margin?: "mb12" | "mb20";
	setSignInButton?: Dispatch<SetStateAction<"login" | "lock">>;
};

export default function Button(props: propsType) {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const intervalTime = 1000;
	let buttonCount = 30;
	// variable이 lock일때 버튼의 텍스트를 30초 부터 0초 까지 카운트로 변경
	useEffect(() => {
		if (props.variable === "lock") {
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
	}, [props.variable]);

	return (
		<ButtonCompo
			{...(props.margin && { margin: props.margin })}
			{...(props.variable && { variant: props.variable })}
			{...(props.platform && { platform: props.platform })}
			ref={buttonRef}
		>
			{props.children}
		</ButtonCompo>
	);
}

const ButtonCompo = styled("button", {
	base: {
		width: "100%",
		maxWidth: "400px",
		minWidth: "200px",
		borderRadius: "98px",
		fontWeight: "bold",
		cursor: "pointer",
		transition: "background 0.5s, color 0.5s",
	},
	variants: {
		variant: {
			login: {
				bg: "primary.01",
				color: "#ffffff",
				"&:hover": {
					bg: "gray.05",
					color: "black",
				},
			},
			signUp: {
				bg: "gray.05",
			},
			forgotPassword: {
				textStyle: "xs",
				height: "auto",
				color: "gray.03",
			},
			deActive: {
				bg: "gray.05",
				color: "#ffffff",
				pointerEvents: "none",
			},
			lock: {
				bg: "gray.05",
				color: "#ffffff",
				pointerEvents: "none",
			},
		},
		margin: {
			mb12: {
				marginBottom: "12px",
			},
			mb20: {
				marginBottom: "20px",
			},
		},
		platform: {
			pc: {
				height: "60px",
			},
			mobile: {
				maxWidth: "none",
				minWidth: "unset",
				height: "40px",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});
