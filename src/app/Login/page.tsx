"use client";
import MainTemplate from "@/features/loginSignUp/template/MainTemplate";
import Select from "@/features/loginSignUp/Select";
import SignUpSelect from "@/features/loginSignUp/SignUpSelect";
import SignIn from "@/features/loginSignUp/SignIn";
import SelectContainer from "@/features/loginSignUp/template/SelectContainer";
import LoginDefaultInfo from "@/features/loginSignUp/template/LoginTemplateDefaultInfo";
import Modal from "@/features/loginSignUp/components/modal/Modal";
import loginState, { stateType } from "@/stores/loginPageStateStore";
import GoBack from "@/features/loginSignUp/components/button/GoBack";
import PrivacyPolicy from "@/features/loginSignUp/components/modal/PrivacyPolicy";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SelectMobile from "@/features/loginSignUp/mobile/Select";

export default function Login() {
	const {
		modalText,
		selectBtn,
		policyModalState,
		setSelectBtn,
		setModalState,
	} = loginState();
	const PolicyModalRef = useRef<HTMLDivElement>(null);
	const RenderState = RenderBackButton(selectBtn);
	// 임시로 추가 크기는 변경되면 수정
	const mobileWidth = process.env.NEXT_PUBLIC_startMobileWidth;
	if (!mobileWidth) throw new Error("모바일 너비 설정이 없습니다.");
	const isPc = useMediaQuery({ query: `(max-width:${mobileWidth}px)` });
	const [desktop, setDesktop] = useState(false);
	useEffect(() => {
		setDesktop(!isPc);
	}, [isPc]);

	// 화면 슬라이드 전환시 모달 삭제 ( 기존의 계속 모달이 떠 있던 문제 제거 )
	useEffect(() => {
		setModalState("");
	}, [selectBtn]);

	return (
		<>
			{desktop && (
				<MainTemplate>
					{policyModalState && <PrivacyPolicy ModalRef={PolicyModalRef} />}
					<SelectContainer>
						<LoginDefaultInfo />
						{RenderState && (
							<GoBack currentPage={selectBtn} setSelectBtn={setSelectBtn} />
						)}
						<Select />
						<SignIn />
						<SignUpSelect />
						{modalText && <Modal platform={"pc"}>{modalText}</Modal>}
					</SelectContainer>
				</MainTemplate>
			)}
			{!desktop && <SelectMobile />}
		</>
	);
}

function RenderBackButton(selectBtn: stateType) {
	switch (selectBtn) {
		case "login":
			return true;
		case "signUp":
			return true;
		case "signUpSelect":
			return true;
		case "authMailPassword":
			return true;
		case "forgotPassword":
			return true;
	}
}
