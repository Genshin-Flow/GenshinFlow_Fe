"use client";
import { styled } from "@/../styled-system/jsx";
import { RefObject, useEffect } from "react";
import loginState from "@/stores/loginStateStore";

type propsType = {
	ModalRef: RefObject<HTMLElement>;
};

export default function PrivacyPolicy(props: propsType) {
	const { setPolicyModalState } = loginState();
	const clickFn = (event: MouseEvent) =>
		ClickHandler(event, props.ModalRef, setPolicyModalState);

	useEffect(() => {
		props.ModalRef.current?.addEventListener("click", clickFn);

		return () => props.ModalRef.current?.removeEventListener("click", clickFn);
	}, []);

	return (
		<>
			<PrivacyPolicyModal ref={props.ModalRef}></PrivacyPolicyModal>
		</>
	);
}

function ClickHandler(
	event: MouseEvent,
	ModalRef: RefObject<HTMLElement>,
	setPolicyModalState: (state: boolean) => void,
) {
	const target = event.target as HTMLElement;
	if (target.contains(ModalRef.current)) {
		setPolicyModalState(false);
	}
}

// 개인정보 처리방침에 관한 내용

const PrivacyPolicyModal = styled("article", {
	base: {
		width: "100vw",
		height: "100vh",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		bg: "gray",
		zIndex: 20,
		backgroundColor: "transparent",
	},
});
