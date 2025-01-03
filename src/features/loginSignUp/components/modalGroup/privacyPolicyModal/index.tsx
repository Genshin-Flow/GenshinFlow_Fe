"use client";
import { RefObject, useEffect } from "react";
import loginState from "@/stores/loginPageStateStore";
import {
	PrivacyPolicyModalContainer,
	PrivacyPolicyModal,
	ModalTitle,
	TextBody,
	Pre,
	ContinueText,
} from "./style";

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
