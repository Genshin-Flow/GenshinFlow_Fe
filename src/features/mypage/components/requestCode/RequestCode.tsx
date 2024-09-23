"use client";
import { InputStyle } from "@/features/mypage/components/changePasswordInput/ChangePasswordInput";
import { styled } from "@/../styled-system/jsx";
import { useEffect, useState } from "react";

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
			<InputStyle
				type="email"
				placeholder={"메일주소"}
				marginTop="mt40"
				authInput="authInput"
			/>
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

const RequestCodeContainer = styled("div", {
	base: {
		position: "relative",
	},
});

const RequestCodeButton = styled("button", {
	base: {
		position: "absolute",
		top: "50%",
		right: "12px",
		transform: "translateY(-50%)",
		textStyle: "xs",
		cursor: "pointer",
	},
	variants: {
		variant: {
			active: {
				color: "gray.03",
				pointerEvents: "none",
			},
		},
	},
});

const Count = styled("span", {
	base: {
		position: "absolute",
		right: "88px",
		top: "50%",
		transform: "translateY(-50%)",
		color: "gray.03",
		pointerEvents: "none",
		textStyle: "xs",
	},
});
