import OauthButton from "@/components/loginSignUp/button/OauthButton";
import { styled } from "@/../styled-system/jsx";
import Button from "@/components/loginSignUp/button/Button";
import ForgotPassword from "@/components/loginSignUp/button/ForgotPassword";
import { nanoid } from "nanoid";

type marginType = "mb12" | "mb20" | "mb60";

type propsType = {
	mb?: marginType;
};

export default function Login(props: propsType) {
	const svgURL = [
		"/svg/oauth/googleSvg.svg",
		"/svg/oauth/naver.svg",
		"/svg/oauth/discord.svg",
	];
	return (
		<LoginContainer>
			{svgURL.map((item, index) => (
				<OauthButton
					key={nanoid()}
					buttonText={"Google로 계속하기"}
					svgUrl={item}
					// 마지막 버튼은 marginBottom 60px 적용
					mb={index !== svgURL.length - 1 ? "mb12" : "mb60"}
				/>
			))}
			<Line></Line>
			<Input
				type="text"
				placeholder="메일주소"
				{...(props.mb && { margin: props.mb })}
				margin="mb12"
			/>
			<Input type="password" placeholder="비밀번호" margin="mb60" />
			<Button variable={"login"} margin={"mb12"}>
				로그인
			</Button>
			<ForgotPassword>비밀번호를 잊어버렸어요</ForgotPassword>
		</LoginContainer>
	);
}

const LoginContainer = styled("article", {
	base: {
		width: "100%",
	},
});

const Line = styled("div", {
	base: {
		width: "100%",
		height: "1px",
		backgroundColor: "gray.03",
		marginBottom: "20px",
	},
});

const Input = styled("input", {
	base: {
		width: "100%",
		height: "60px",
		padding: "0 18px",
		textStyle: "lg",
		bg: "gray.06",
		"&::placeholder": {
			textStyle: "lg",
		},
	},

	variants: {
		margin: {
			mb12: {
				marginBottom: "12px",
			},
			mb20: {
				marginBottom: "20px",
			},
			mb60: {
				marginBottom: "60px",
			},
		},
	},
});
