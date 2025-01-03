"use client";
import { useEffect, useRef } from "react";
import loginState from "@/stores/loginPageStateStore";
import { ModalContainer, ModalText } from "./style";

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
