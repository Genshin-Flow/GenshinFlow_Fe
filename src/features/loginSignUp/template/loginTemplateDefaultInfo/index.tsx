"use client";
import loginState from "@/stores/loginPageStateStore";
import {
	DefaultInfoContainer,
	LogoContainer,
	LogoSvg,
	LoginText,
} from "./style";

type propsType = {
	mobile?: "mobile";
};

export default function LoginDefaultInfo(props: propsType) {
	const { selectBtn } = loginState();
	return (
		<DefaultInfoContainer
			{...(selectBtn === "login" ? { logoTop: "top49" } : { logoTop: "top60" })}
			{...(props.mobile && { mobile: "top105" })}
		>
			<LogoContainer {...(props.mobile && { platform: "mobile" })}>
				<LogoSvg src="/icons/logo/GenshinFlowLogo.svg" alt="원신 플로우 로고" />
			</LogoContainer>
			<LoginText {...(props.mobile && { platform: "mobile" })}>
				더 나은 인연을 위해
			</LoginText>
		</DefaultInfoContainer>
	);
}
