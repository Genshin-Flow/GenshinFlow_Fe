"use client";
import UserInfoItem from "@/features/mypage/components/userInfoGroup/userInfoItem";
import loginState from "@/stores/loginPageStateStore";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { UserInfoContainer } from "./style";
import userStore from "@/stores/userStore";
export default function UserInfo() {
	const { uid, email } = userStore();
	const route = useRouter();
	const pushFn = () => LinkClickHandler(route);
	return (
		<UserInfoContainer>
			<UserInfoItem name={"이메일"} children={email} />
			<UserInfoItem
				name={"비밀번호"}
				children={"0000000"}
				password={true}
				buttonText="변경"
				onClick={pushFn}
			/>
			<UserInfoItem name={"UID"} children={`${uid}`} />
		</UserInfoContainer>
	);
}

function LinkClickHandler(router: AppRouterInstance) {
	router.push("/Login");
}
