"use client";
import { removeToken } from "@/fetch/Token/removeToken/removeToken";
import { loadingToast, errorToast } from "@/utils/customToast/customToast";
import { ExitButton } from "./style";

export default function Exit() {
	return (
		<ExitButton onClick={clickHandler} type="button">
			<img src="/svgs/exit.svg" alt="메인화면으로 이동" />
		</ExitButton>
	);
}

async function clickHandler(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
	try {
		const target = event.target as HTMLElement;
		const $blurDom = target.parentNode?.previousSibling as HTMLElement;
		loadingToast(
			removeToken(),
			"로그아웃중..",
			"로그아웃 성공!",
			"로그아웃 실패..다시 시도해 주세요!",
		);

		if ($blurDom.classList.contains("active")) {
			$blurDom.classList.remove("active");
		} else {
			$blurDom.classList.add("active");
		}
	} catch (error) {
		const err = error as Error;
		errorToast(err.message);
	}
}
