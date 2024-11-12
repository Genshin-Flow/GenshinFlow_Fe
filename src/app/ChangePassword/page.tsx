"use client";
import { styled } from "@/../styled-system/jsx";
import MypageText from "@/features/mypage/components/mypageText/MypageText";
import ChangePasswordInput from "@/features/mypage/components/changePasswordInput/ChangePasswordInput";
import Modal from "@/features/loginSignUp/components/modal/Modal";
import loginState from "@/stores/loginStateStore";

export default function page() {
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

const PasswordChangeContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		position: "relative",
		backgroundColor: "primary.02",
		padding: "95px 20px",
	},
});
