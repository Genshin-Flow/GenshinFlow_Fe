"use client";
import { ExitButton } from "./style";

export default function Exit() {
	return (
		<ExitButton onClick={clickHandler} type="button">
			<img src="/svgs/exit.svg" alt="메인화면으로 이동" />
		</ExitButton>
	);
}

function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
	const target = event.target as HTMLElement;
	const $blurDom = target.parentNode?.previousSibling as HTMLElement;
	if ($blurDom.classList.contains("active")) {
		$blurDom.classList.remove("active");
	} else {
		$blurDom.classList.add("active");
	}
}
