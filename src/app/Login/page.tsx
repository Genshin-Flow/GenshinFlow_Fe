"use client";
import MainTemplate from "@/features/loginSignUp/template/MainTemplate";
import Select from "@/features/loginSignUp/Select";
import SignUpSelect from "@/features/loginSignUp/SignUpSelect";
import SignIn from "@/features/loginSignUp/SignIn";
import SelectContainer from "@/features/loginSignUp/template/SelectContainer";
import LoginDefaultInfo from "@/features/loginSignUp/template/LoginTemplateDefaultInfo";
import Modal from "@/features/loginSignUp/components/modal/Modal";
import loginState, { stateType } from "@/stores/loginStateStore";
import GoBack from "@/features/loginSignUp/components/button/GoBack";
import PrivacyPolicy from "@/features/loginSignUp/components/modal/PrivacyPolicy";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SelectMobile from "@/features/loginSignUp/mobile/Select";

export default function Login() {
	const { modalText, selectBtn, policyModalState, setSelectBtn } = loginState();
	const PolicyModalRef = useRef<HTMLDivElement>(null);
	const RenderState = RenderBackButton(selectBtn);
	// 임시로 추가 크기는 변경되면 수정
	const isPc = useMediaQuery({ query: "(min-width:1024px)" });
	const [desktop, setDesktop] = useState(false);
	useEffect(() => {
		setDesktop(isPc);
	}, [isPc]);
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
		case "forgotPassword":
			return true;
	}
}
