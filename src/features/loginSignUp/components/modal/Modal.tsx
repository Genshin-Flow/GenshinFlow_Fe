"use client";
import { styled } from "@/../styled-system/jsx";
import { useEffect } from "react";
import loginState from "@/stores/loginStateStore";

type propsType = {
	children: string;
	platform: "pc" | "mobile";
};

export default function Modal(props: propsType) {
	const closeModalTime = 2000;
	const { setModalState, modalText } = loginState();

	useEffect(() => {
		setTimeout(() => {
			setModalState("");
		}, closeModalTime);
	}, [modalText]);

	return (
		<ModalContainer {...(props.platform && { platform: props.platform })}>
			<ModalText className="ModalText">{props.children}</ModalText>
		</ModalContainer>
	);
}

const ModalContainer = styled("div", {
	base: {
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
