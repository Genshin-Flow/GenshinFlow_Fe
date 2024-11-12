import OauthButton from "@/features/loginSignUp/components/button/OauthButton";
import { styled } from "@/../styled-system/jsx";
import { nanoid } from "nanoid";
import { loginSvg } from "@/data/SvgUrl/svg";
import SignInAuth from "@/features/loginSignUp/components/signIn/SignInAuth";
import ForgotPassword from "@/features/loginSignUp/components/button/ForgotPassword";
import ForgotPassAuthMail from "@/features/loginSignUp/ForgotPassAuthMail";
import loginState from "@/stores/loginStateStore";
import Line from "@/features/loginSignUp/components/line/line";

type marginType = "mb12" | "mb20" | "mb60";

export type propsType = {
	mb?: marginType;
};

export default function SignIn(props: propsType) {
	const { selectBtn } = loginState();

	return (
		<>
			<LoginContainer
				className="LoginContainer"
				{...(selectBtn === "authMailPassword" && {
					defaultTransform: "default",
				})}
				{...(selectBtn === "forgotPassword" && {
					defaultTransform: "default",
				})}
			>
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
				<ForgotPassword />
			</LoginContainer>
			<ForgotPassAuthMail />
		</>
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

	variants: {
		defaultTransform: {
			default: {
				"&": {
					transform: "translateX(-200%)",
				},
			},
		},
	},
});
