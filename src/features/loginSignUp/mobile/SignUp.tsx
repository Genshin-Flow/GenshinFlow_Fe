import { styled } from "@/../styled-system/jsx";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle/SubTitle";
import AuthMail from "@/features/loginSignUp/components/signUp/AuthMail";
import Input from "@/features/loginSignUp/components/Input/Input";
import { useState } from "react";
import Checkbox from "@/features/loginSignUp/components/checkBox/Checkbox";
import Button from "@/features/loginSignUp/mobile/components/button/Button";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [checkState, setCheckState] = useState(false);
	const variable = checkState === true ? "login" : "deActive";
	return (
		<SignUpContainer className="signUpContainer">
			<SubTitle platform="mobile">계정 만들기</SubTitle>
			<form action="">
				<AuthMail
					emailValue={email}
					setEmailValue={setEmail}
					mb={"mb20"}
					platform="mobile"
				/>
				<Input
					type={"text"}
					placeholder={"인증코드"}
					margin={"mb20"}
					platform="mobile"
				/>
				<Input
					type={"password"}
					placeholder={"비밀번호"}
					margin={"mb16"}
					platform="mobile"
				/>
				<Checkbox
					checkState={checkState}
					setCheckState={setCheckState}
					mb="mb40"
				/>
				<Button buttonState={variable}>회원가입</Button>
			</form>
		</SignUpContainer>
	);
}

const SignUpContainer = styled("article", {
	base: {
		width: "100%",
		position: "absolute",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		top: "308px",
		left: "0",
		padding: "0 20px",
	},
});
