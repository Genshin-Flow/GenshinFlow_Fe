import { styled } from "@/../styled-system/jsx";
import UserInfoItem from "@/features/mypage/components/userInfo/UserInfoItem";

export default function UserInfo() {
	return (
		<UserInfoContainer>
			<UserInfoItem name={"이메일"} children={"cankyu6@gmail.com"} />
			<UserInfoItem
				name={"비밀번호"}
				children={"1004ff1!"}
				password={true}
				buttonText="변경"
			/>
			<UserInfoItem name={"UID"} children={"12345678"} />
		</UserInfoContainer>
	);
}

const UserInfoContainer = styled("article", {
	base: {
		width: "100%",
		padding: "12px",
		backgroundColor: "gray.06",
		borderRadius: "8px",
		border: "1px solid {colors.gray.04}",
	},
});
