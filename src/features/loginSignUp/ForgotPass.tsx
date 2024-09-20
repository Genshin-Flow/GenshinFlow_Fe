import { styled } from "@/../styled-system/jsx";
import Input from "@/features/loginSignUp/components/Input/Input";
import Button from "@/features/loginSignUp/components/button/Button";

export default function ForgotPass() {
	return (
		<ForgotPasContainer className="forgotPassword">
			<Input type={"text"} placeholder={"새 비밀번호"} margin={"mb12"} />
			<Input type={"password"} placeholder={"비밀번호"} margin={"mb60"} />
			<Button variable="login">설정 완료</Button>
		</ForgotPasContainer>
	);
}

const ForgotPasContainer = styled("article", {
	base: {
		width: "100%",
		position: "absolute",
		top: "253px",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		padding: "60px 110px",
	},
});
