"use client";

import InfoText from "@/features/mypage/components/infoText/InfoText";
import MypageInfo from "@/features/mypage/template/mypageInfo/MypageInfo";
import userInfoStore from "@/stores/userInfo/userInfoStore";

export default function AccountInfoBox() {
	// fetch를 한번 받고 전역으로 유저 정보를 저장후 사용
	const { email, passwordLength } = userInfoStore();
	return (
		<MypageInfo mt="mt40">
			<InfoText InfoText={email} InfoTitle={"이메일"} />
			<InfoText
				InfoText={email}
				password={passwordLength}
				InfoTitle={"비밀번호"}
			/>
		</MypageInfo>
	);
}
