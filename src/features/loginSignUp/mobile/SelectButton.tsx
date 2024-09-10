"use client";
import LoginDefaultInfo from "@/features/loginSignUp/template/LoginTemplateDefaultInfo";
import OauthButton from "@/features/loginSignUp/components/button/OauthButton";
import { loginSvg } from "@/data/SvgUrl/svg";
import { styled } from "@/../styled-system/jsx";
import Line from "@/features/loginSignUp/components/line/line";
import Button from "@/features/loginSignUp/mobile/components/button/Button";
import ForgotPassword from "@/features/loginSignUp/components/button/ForgotPassword";
import SignUp from "@/features/loginSignUp/mobile/SignUp";
import SignIn from "@/features/loginSignUp/mobile/SignIn";
import ForgotPass from "@/features/loginSignUp/mobile/ForgotPass";
import { nanoid } from "nanoid";
import loginState, { stateType } from "@/stores/loginStateStore";

export default function SelectButton() {
	const { selectBtn, setSelectBtn } = loginState();
	const clickFn = (event: React.MouseEvent<HTMLElement, MouseEvent>) =>
		clickHandler(event, setSelectBtn);
	return (
		<LoginContainer>
			<LoginDefaultInfo mobile={"mobile"} />
			<SelectContainer
				{...(selectBtn !== null && { defaultTransform: "default" })}
				{...(selectBtn && { transform: selectBtn })}
				onClick={clickFn}
			>
				{loginSvg.map((item, index) => (
					<OauthButton
						buttonText={item.text}
						svgUrl={item.url}
						socialSignIn={item.oauth}
						margin={index !== loginSvg.length - 1 ? "mb12" : "mb40"}
						platform="mobile"
						key={nanoid()}
					/>
				))}
				<Line mb="mb40" />
				<Button mb={"mb48"} changePage={true}>
					계정 만들기
				</Button>
				<Button mb={"mb12"} buttonState="login">
					로그인
				</Button>
				<ForgotPassword />
			</SelectContainer>
			<SignIn />
			<SignUp />
			<ForgotPass />
		</LoginContainer>
	);
}

function clickHandler(
	event: React.MouseEvent<HTMLElement, MouseEvent>,
	setSelectBtn: (state: stateType) => void,
) {
	const target = event.target as HTMLElement;
	const targetText = target.innerText;
	switch (targetText) {
		case "계정 만들기":
			setSelectBtn("signUp");
			return;
		case "로그인":
			setSelectBtn("login");
			return;
		case "비밀번호를 잊어버렸어요":
			setSelectBtn("forgotPassword");
			return;
	}
}

const LoginContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		position: "relative",
		overflow: "hidden",
	},
});

const SelectContainer = styled("article", {
	base: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "248px",
		transition: "transform 0.5s",
		padding: "0 20px",
	},
	variants: {
		defaultTransform: {
			default: {
				"&": {
					transform: "translateX(-200%)",
				},
			},
		},
		transform: {
			login: {
				"& ~ .loginContainer": {
					transform: "translateX(0%)",
				},
			},
			signUp: {
				"& ~ .signUpContainer": {
					transform: "translateX(0%)",
				},
			},
			forgotPassword: {
				"& ~ .forgotPassContainer": {
					transform: "translateX(0%)",
				},
			},
			signUpSelect: {},
		},
	},
});