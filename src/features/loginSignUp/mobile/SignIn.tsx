import { styled } from "@/../styled-system/jsx";
import SubTitle from "@/features/loginSignUp/components/pageSubTitle/SubTitle";
import Input from "@/features/loginSignUp/components/Input/Input";
import Button from "@/features/loginSignUp/mobile/components/button/Button";

export default function SignIn() {
	return (
		<LoginContainer className="loginContainer">
			<SubTitle platform="mobile">로그인</SubTitle>
			<Input
				type={"email"}
				placeholder={"메일주소"}
				margin={"mb20"}
				platform="mobile"
			/>
			<Input
				type={"password"}
				placeholder={"비밀번호"}
				margin={"mb40"}
				platform="mobile"
			/>
			<Button buttonState="login">로그인</Button>
		</LoginContainer>
	);
}

const LoginContainer = styled("article", {
	base: {
		position: "absolute",
		transform: "translate(200%)",
		transition: "transform 0.5s",
		top: "346px",
		left: "0",
		padding: "0 20px",
	},
});
