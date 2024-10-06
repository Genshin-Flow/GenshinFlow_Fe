"use client";
import { styled } from "@/../styled-system/jsx";
import UserInfoItem from "@/features/mypage/components/userInfo/UserInfoItem";
import { stateType } from "@/stores/loginStateStore";
import loginState from "@/stores/loginStateStore";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
export default function UserInfo() {
	const { setSelectBtn } = loginState();
	const route = useRouter();
	return (
		<UserInfoContainer>
			<UserInfoItem name={"이메일"} children={"cankyu6@gmail.com"} />
			<UserInfoItem
				name={"비밀번호"}
				children={"1004ff1!"}
				password={true}
				buttonText="변경"
				onClick={() => LinkClickHandler(setSelectBtn, route)}
			/>
			<UserInfoItem name={"UID"} children={"12345678"} />
		</UserInfoContainer>
	);
}

function LinkClickHandler(
	setSelectBtn: (state: stateType) => void,
	router: AppRouterInstance,
) {
	// 아직 깃허브에 머지가 안 되서 추가된 페이지가 없음 합쳐지면 아이디 찾기 페이지로 변경 필요
	router.push("/Login");
	setSelectBtn("forgotPassword");
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
