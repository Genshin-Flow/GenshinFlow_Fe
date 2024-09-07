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
import { useRef } from "react";

export default function Login() {
	const { modalText, selectBtn, policyModalState, setSelectBtn } = loginState();
	const PolicyModalRef = useRef<HTMLDivElement>(null);
	const RenderState = RenderBackButton(selectBtn);

	return (
		<>
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
	}
}
