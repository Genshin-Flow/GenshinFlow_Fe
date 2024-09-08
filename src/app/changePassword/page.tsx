import { styled } from "@/../styled-system/jsx";
import MypageText from "@/features/mypage/components/mypageText/MypageText";
import ChangePasswordInput from "@/features/mypage/components/changePasswordInput/ChangePasswordInput";

export default function page() {
	return (
		<PasswordChangeContainer>
			<MypageText mt="mt40">
				<span>
					본인 확인을 위해 <br /> 메일 인증을 해주세요
				</span>
			</MypageText>
			<ChangePasswordInput />
			{/* 나중에 merge 후 버튼 생성 */}
		</PasswordChangeContainer>
	);
}

const PasswordChangeContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		backgroundColor: "primary.02",
		padding: "95px 20px",
	},
});
