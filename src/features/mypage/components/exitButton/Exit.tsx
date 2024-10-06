"use client";

import { styled } from "../../../../../styled-system/jsx";
import Link from "next/link";
import loginState, { stateType } from "@/stores/loginStateStore";

export default function Exit() {
	const { setSelectBtn } = loginState();
	return (
		<ExitButton onClick={clickHandler} type="button">
			<Link href={"/Login"} onClick={() => LinkClickHandler(setSelectBtn)}>
				<img src="/svgs/exit.svg" alt="메인화면으로 이동" />
			</Link>
		</ExitButton>
	);
}

function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
	const target = event.target as HTMLElement;
	const $blurDom = target.parentNode?.parentNode as HTMLElement;
	if ($blurDom.classList.contains("active")) {
		$blurDom.classList.remove("active");
	} else {
		$blurDom.classList.add("active");
	}
}

function LinkClickHandler(setSelectBtn: (state: stateType) => void) {
	// 아직 깃허브에 머지가 안 되서 추가된 페이지가 없음 합쳐지면 아이디 찾기 페이지로 변경 필요
	setSelectBtn("forgotPassword");
}

const ExitButton = styled("button", {
	base: {
		width: "60px",
		height: "60px",
		position: "absolute",
		top: "30px",
		right: "22px",
		cursor: "pointer",

		"& img": {
			width: "100%",
			height: "100%",
			pointerEvents: "none",
		},
	},
});
