"use client";
import { InputStyle } from "@/features/mypage/mobile/components/changePasswordInput/style";
import { useEffect, useState } from "react";
import { RequestCodeButton, RequestCodeContainer, Count } from "./style";

export default function RequestCode() {
	const [count, setCount] = useState(0);
	const countState = count !== 0 ? true : false;
	const timer = 1000;
	let interval: NodeJS.Timeout;
	useEffect(() => {
		if (countState) {
			interval = setInterval(() => {
				const calcCount = count - 1;
				setCount(calcCount);
				clearTimeout(interval);
			}, timer);
		}
	}, [count]);
	return (
		<RequestCodeContainer>
			<InputStyle type="email" placeholder={"메일주소"} marginTop="mt40" />
			<RequestCodeButton
				{...(countState && { variant: "active" })}
				onClick={() => setCount(60)}
			>
				인증코드 받기
			</RequestCodeButton>
			{countState && <Count>{count}s</Count>}
		</RequestCodeContainer>
	);
}
