import { styled } from "@/../styled-system/jsx";

export default function LoginDefaultInfo() {
	return (
		<div>
			<LogoContainer>
				<LogoSvg src="/svg/logo/GenshinFlowLogo.svg" alt="원신 플로우 로고" />
			</LogoContainer>
			<LoginText>더 나은 인연을 위해</LoginText>
		</div>
	);
}

const LogoContainer = styled("div", {
	base: {
		width: "274px",
		height: "124px",
	},
});

const LogoSvg = styled("img", {
	base: {
		display: "block",
		width: "100%",
		height: "100%",
	},
});

const LoginText = styled("p", {
	base: {
		width: "100%",
		height: "29px",
		textAlign: "center",
		fontSize: "xl",
		fontWeight: "medium",
		mb: "100px",
	},
});
