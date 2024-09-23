"use client";

import InfoText from "@/features/mypage/components/infoText/InfoText";
import MypageInfo from "@/features/mypage/template/mypageInfo/MypageInfo";
import userStore from "@/stores/userStore";

export default function AccountInfoBox() {
	// fetch를 한번 받고 전역으로 유저 정보를 저장후 사용
	const { email, userProfile } = userStore();
	return (
		<MypageInfo mt="mt40">
			<InfoText InfoText={email} InfoTitle={"이메일"} />
			<InfoText
				InfoText={email}
				password={userProfile.passwordLeng}
				InfoTitle={"비밀번호"}
			/>
		</MypageInfo>
	);
}
