import MypageText from "@/features/mypage/mobile/components/mypageText";
import AccountInfoBox from "@/features/mypage/mobile/components/accoundGroup/accountInfoBox";

export default function AccountInfo() {
	return (
		<>
			<MypageText mt="mt40">계정 정보</MypageText>
			<AccountInfoBox />
		</>
	);
}
