import Button from "@/components/loginSignUp/button/Button";


export default function SelectButton() {
	return (
		<>
			<Button variable="login" margin={"mb20"}>
				로그인
			</Button>
			<Button variable="signUp">회원가입</Button>
		</>
	);
}
