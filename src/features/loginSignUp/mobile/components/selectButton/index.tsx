"use client";
import LoginDefaultInfo from "@/features/loginSignUp/template/loginTemplateDefaultInfo";
import OauthButton from "@/features/loginSignUp/components/buttonGroup/oauthButton";
import { loginSvg } from "@/data/SvgUrl/svg";
import Line from "@/features/loginSignUp/components/line";
import Button from "@/features/loginSignUp/mobile/components/button";
import ForgotPassword from "@/features/loginSignUp/components/forgotPassGroup/forgotPasswordButton";
import SignUp from "@/features/loginSignUp/mobile/components/siginUp";
import SignIn from "@/features/loginSignUp/mobile/components/signIn";
import ForgotPass from "@/features/loginSignUp/mobile/components/forgotPassword";
import { nanoid } from "nanoid";
import loginState, { stateType } from "@/stores/loginPageStateStore";
import Modal from "@/features/loginSignUp/components/modalGroup/modal";
import PrivacyPolicy from "@/features/loginSignUp/components/modalGroup/privacyPolicyModal";
import { useEffect, useRef } from "react";
import { LoginContainer, SelectContainer } from "./style";

export default function SelectButton() {
	const {
		selectBtn,
		setSelectBtn,
		modalText,
		policyModalState,
		setModalState,
	} = loginState();
	const clickFn = (event: React.MouseEvent<HTMLElement, MouseEvent>) =>
		clickHandler(event, setSelectBtn);
	const PolicyModalRef = useRef<HTMLDivElement>(null);
	const Container = useRef<HTMLDivElement>(null);
	const BackEventFn = () => BackEvent(setSelectBtn);
	// 로그인 , 계정 만들기 누를시 모바일의 뒤로가기 제한
	useEffect(() => {
		if (selectBtn) {
			history.pushState(null, "", "/Login");
		}
		window.addEventListener("popstate", BackEventFn);
		return () => window.removeEventListener("popstate", BackEventFn);
	}, [selectBtn]);

	useEffect(() => {
		setModalState("");
	}, [selectBtn]);

	return (
		<LoginContainer ref={Container}>
			{policyModalState && <PrivacyPolicy ModalRef={PolicyModalRef} />}
			<LoginDefaultInfo mobile={"mobile"} />
			<SelectContainer
				{...(selectBtn !== null && { defaultTransform: "default" })}
				{...(selectBtn && { transform: selectBtn })}
				onClick={clickFn}
			>
				{loginSvg.map((item, index) => (
					<OauthButton
						buttonText={item.text}
						svgUrl={item.url}
						socialSignIn={item.oauth}
						margin={index !== loginSvg.length - 1 ? "mb12" : "mb40"}
						platform="mobile"
						key={nanoid()}
					/>
				))}
				<Line mb="mb40" />
				<Button mb={"mb48"} changePage={true}>
					계정 만들기
				</Button>
				<Button mb={"mb12"} buttonState="login">
					로그인
				</Button>
				<ForgotPassword platform="mobile" />
			</SelectContainer>
			<SignIn />
			<SignUp />
			<ForgotPass />
			{modalText && <Modal platform={"mobile"}>{modalText}</Modal>}
		</LoginContainer>
	);
}

function clickHandler(
	event: React.MouseEvent<HTMLElement, MouseEvent>,
	setSelectBtn: (state: stateType) => void,
) {
	const target = event.target as HTMLElement;
	const targetText = target.innerText;
	switch (targetText) {
		case "계정 만들기":
			setSelectBtn("signUp");
			return;
		case "로그인":
			setSelectBtn("login");
			return;
		case "비밀번호를 잊어버렸어요":
			setSelectBtn("forgotPassword");
			return;
	}
}

function BackEvent(setSelectBtn: (state: stateType) => void) {
	setSelectBtn(null);
}
