"use client";
import { ExitButtonContainer } from "@/features/mypage/mobile/components/mobileExitButton/style";
import { removeToken } from "@/fetch/Token/removeToken/removeToken";
import { loadingToast, errorToast } from "@/utils/customToast/customToast";

import Link from "next/link";

export default function ExitButton() {
	return (
		<ExitButtonContainer>
			<Link href={"/"} onClick={clickHandler}>
				<img src="/svgs/exit.svg" alt="메인페이지로 이동" />
			</Link>
		</ExitButtonContainer>
	);
}

async function clickHandler() {
	try {
		loadingToast(
			removeToken(),
			"로그아웃중..",
			"로그아웃 성공!",
			"로그아웃 실패..다시 시도해 주세요!",
		);
	} catch (error) {
		errorToast("로그아웃중 오류가 발생 했습니다.!");
	}
}
