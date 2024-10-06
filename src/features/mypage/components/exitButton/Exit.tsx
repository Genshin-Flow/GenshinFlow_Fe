"use client";

import { styled } from "../../../../../styled-system/jsx";
import Link from "next/link";

export default function Exit() {
	return (
		<ExitButton onClick={clickHandler} type="button">
			<Link href={"/"}>
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
