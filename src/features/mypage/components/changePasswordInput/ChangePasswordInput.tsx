import { styled } from "@/../styled-system/jsx";

export default function ChangePasswordInput() {
	return (
		<form action="#">
			<InputStyle type="email" placeholder={"메일주소"} marginTop="mt40" />
			<InputStyle
				type="text"
				placeholder={"메일로 전송된 코드를 입력하세요"}
				marginTop="mt20"
			/>
			<InputStyle
				type="password"
				placeholder={"새 비밀번호 입력"}
				marginTop="mt20"
			/>
		</form>
	);
}

const InputStyle = styled("input", {
	base: {
		display: "block",
		maxWidth: "350px",
		width: "100%",
		height: "41px",
		backgroundColor: "primary.04",
		borderRadius: "8px",
		padding: "12px",
		boxSizing: "border-box",
	},
	variants: {
		marginTop: {
			mt40: {
				marginTop: "40px",
			},
			mt20: {
				marginTop: "20px",
			},
		},
	},
});
