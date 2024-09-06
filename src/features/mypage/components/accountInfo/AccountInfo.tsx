import MypageText from "@/features/mypage/components/mypageText/MypageText";
import AccountInfoBox from "@/features/mypage/components/accountInfo/AccountInfoBox";

export default function AccountInfo() {
	return (
		<>
			<MypageText mt="mt40">계정 정보</MypageText>
			<AccountInfoBox />
		</>
	);
}
