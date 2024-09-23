"use client";
import { styled } from "@/../styled-system/jsx";
import { RefObject, useEffect } from "react";
import loginState from "@/stores/loginStateStore";

type propsType = {
	ModalRef: RefObject<HTMLDivElement>;
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
			<PrivacyPolicyModalContainer ref={props.ModalRef}>
				<PrivacyPolicyModal>
					<ModalTitle>개인 정보 처리방침</ModalTitle>
					<TextBody>
						<Pre>
							개인정보처리 방침에 대한 내용이 들어갈 곳입니다. 처리 방침 대한
							내용이 들어갈 곳입니다.처리 방침 대한 내용이 들어갈 곳입니다.처리
							방침 대한 내용이 들어갈 곳입니다.처리 방침 대한 내용이 들어갈
							곳입니다.처리 방침 대한 내용이 들어갈 곳입니다.처리 방침 대한
							내용이 들어갈 곳입니다.처리 방침 대한 내용이 들어갈 곳입니다.처리
							방침 대한 내용이 들어갈 곳입니다.처리 방침 대한 내용이 들어갈
							곳입니다.처리 방침 대한 내용이 들어갈 곳입니다.처리 방침 대한
							내용이 들어갈 곳입니다.
						</Pre>
					</TextBody>
				</PrivacyPolicyModal>
				<ContinueText>빈 곳을 클릭하여 계속진행</ContinueText>
			</PrivacyPolicyModalContainer>
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

const PrivacyPolicyModalContainer = styled("div", {
	base: {
		width: "100vw",
		height: "100vh",
		position: "absolute",
		bg: "gray",
		zIndex: 20,
		backgroundColor: "rgba(255,255,255,0.7)",
	},
});

const PrivacyPolicyModal = styled("article", {
	base: {
		width: "100%",
		height: "100%",
		maxWidth: "880px",
		maxHeight: "672px",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		backgroundColor: "#fff",
		borderRadius: "20px",
		padding: "20px",
		zIndex: 20,
	},
});

const ContinueText = styled("span", {
	base: {
		position: "absolute",
		bottom: "3%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		pointerEvents: "none",
	},
});

const ModalTitle = styled("span", {
	base: {
		textStyle: "xl",
		borderBottom: "2px solid black",
	},
});

const TextBody = styled("div", {
	base: {
		height: "90%",
		padding: "10px",
		border: "1px solid {colors.gray.05}",
		marginTop: "20px",
		boxSizing: "border-box",
		textStyle: "xs",
		lineHeight: 1.5,
	},
});

const Pre = styled("pre", {
	base: {
		textWrap: "wrap",
	},
});
