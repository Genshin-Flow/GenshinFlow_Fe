import OauthButton from "@/features/loginSignUp/components/buttonGroup/oauthButton";
import { nanoid } from "nanoid";
import { loginSvg } from "@/data/SvgUrl/svg";
import SignInAuth from "@/features/loginSignUp/components/signinGroup/signInAuth";
import ForgotPassword from "@/features/loginSignUp/components/forgotPassGroup/forgotPasswordButton";
import ForgotPassAuthMail from "@/features/loginSignUp/components/forgotPassGroup/forgorPasswordAuth";
import loginState from "@/stores/loginPageStateStore";
import Line from "@/features/loginSignUp/components/line";
import { LoginContainer } from "./style";

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
