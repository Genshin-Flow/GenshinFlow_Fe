import OauthButton from "@/features/loginSignUp/components/button/OauthButton";
import { styled } from "@/../styled-system/jsx";
import ForgotPassword from "@/features/loginSignUp/components/button/ForgotPassword";
import { nanoid } from "nanoid";
import { loginSvg } from "@/data/SvgUrl/svg";
import SignInAuth from "@/features/loginSignUp/components/signIn/SignInAuth";

type marginType = "mb12" | "mb20" | "mb60";

export type propsType = {
	mb?: marginType;
};

export default function SignIn(props: propsType) {
	return (
		<LoginContainer className="LoginContainer">
			{loginSvg.map((item, index) => (
				<OauthButton
					key={nanoid()}
					buttonText={item.text}
					svgUrl={item.url}
					// 마지막 버튼은 marginBottom 60px 적용
					margin={index !== loginSvg.length - 1 ? "mb12" : "mb40"}
					socialSignIn={item.oauth}
				/>
			))}
			<Line />
			<SignInAuth mb={props.mb} />
			<ForgotPassword>비밀번호를 잊어버렸어요</ForgotPassword>
		</LoginContainer>
	);
}

const LoginContainer = styled("article", {
	base: {
		width: "100%",
		position: "absolute",
		top: "226px",
		transform: "translateX(200%)",
		transition: "transform 0.5s",
		padding: "0px 75px",
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
