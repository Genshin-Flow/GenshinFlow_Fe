"use client";
import { styled } from "@/../styled-system/jsx";
import { useEffect, useRef } from "react";
import loginState from "@/stores/loginStateStore";

type propsType = {
	children: string;
	platform: "pc" | "mobile";
};

export default function Modal(props: propsType) {
	const closeModalTime = 2000;
	const { setModalState, modalText } = loginState();
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	// 같은 텍스트라도 모달의 변경을 감지하기 위해 의존성 목록제거
	useEffect(() => {
		console.log(timerRef.current);
		// 타이머 초기화 및 재설정
		if (timerRef.current) {
			clearInterval(timerRef.current);
		}

		if (modalText) {
			timerRef.current = setInterval(() => {
				clearInterval(timerRef.current!);
				setModalState("");
			}, closeModalTime);
		}
	});

	return (
		<ModalContainer {...(props.platform && { platform: props.platform })}>
			<ModalText className="ModalText">{props.children}</ModalText>
		</ModalContainer>
	);
}

const ModalContainer = styled("div", {
	base: {
		width: "100%",
		maxWidth: "325px",
		position: "absolute",
		top: "46%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		textStyle: "md",
		boxShadow: "0 1px 15.2px rgb(0, 0, 0,0.25)",
		padding: "15px 40px",
		textAlign: "center",
		bg: "#ffffff",
		zIndex: "20",
	},
	variants: {
		platform: {
			pc: {
				borderRadius: "100px",
			},
			mobile: {
				maxWidth: "285px",
				borderRadius: "8px",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});

const ModalText = styled("span", {
	base: {
		display: "block",
		wordBreak: "keep-all",
	},
});
