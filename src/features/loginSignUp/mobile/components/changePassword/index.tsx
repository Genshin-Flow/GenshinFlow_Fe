"use client";
import MypageText from "@/features/mypage/mobile/components/mypageText";
import ChangePasswordInput from "@/features/mypage/mobile/components/changePasswordInput";
import Modal from "@/features/loginSignUp/components/modalGroup/modal";
import loginState from "@/stores/loginPageStateStore";
import { PasswordChangeContainer } from "./style";

export default function MobileChangePassword() {
	const { modalText } = loginState();
	return (
		<PasswordChangeContainer>
			<MypageText mt="mt40" mb="mb40">
				<span>
					본인 확인을 위해 <br /> 메일 인증을 해주세요
				</span>
			</MypageText>
			<ChangePasswordInput />
			{modalText && <Modal platform={"mobile"}>{modalText}</Modal>}
		</PasswordChangeContainer>
	);
}
