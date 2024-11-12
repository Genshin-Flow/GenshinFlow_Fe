"use client";
import InfoText from "@/features/mypage/components/infoText/InfoText";
import MypageInfo from "@/features/mypage/template/mypageInfo/MypageInfo";

export default function UserInfoBox() {
	return (
		<MypageInfo mt="mt20">
			<InfoText InfoTitle={"UID"} InfoText={"123456789"} />
			<InfoText InfoTitle={"월드레벨"} InfoText={"8"} />
			<InfoText InfoTitle={"모험등급"} InfoText={"60"} />
			<InfoText InfoTitle={"비밀번호"} InfoText={"자기소개"} />
			<InfoText InfoTitle={"업적수량"} InfoText={"123"} />
			<InfoText InfoTitle={"나선비경"} InfoText={"12-3|36"} />
		</MypageInfo>
	);
}
