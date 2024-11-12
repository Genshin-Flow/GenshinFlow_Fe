import MypageText from "@/features/mypage/mobile/components/mypageText/MypageText";
import AccountInfoBox from "@/features/mypage/mobile/components/accountInfo/AccountInfoBox";

export default function AccountInfo() {
	return (
		<>
			<MypageText mt="mt40">계정 정보</MypageText>
			<AccountInfoBox />
		</>
	);
}
