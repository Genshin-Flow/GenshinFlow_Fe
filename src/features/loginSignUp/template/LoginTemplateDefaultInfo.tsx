"use client";
import { styled } from "@/../styled-system/jsx";
import loginState from "@/stores/loginStateStore";

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

const DefaultInfoContainer = styled("div", {
	base: {
		position: "absolute",
		top: "77.5px",
		left: "50%",
		transform: "translateX(-50%)",
	},

	variants: {
		logoTop: {
			top60: {
				top: "60px",
			},
			top49: {
				top: "49px",
			},
		},
		mobile: {
			top105: {
				top: "152px",
			},
		},
	},
});

const LogoContainer = styled("div", {
	base: {
		width: "274px",
	},
	variants: {
		platform: {
			mobile: {
				width: "184.26px",
				height: "84px",
			},
		},
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
	},
	variants: {
		platform: {
			mobile: {
				fontSize: "md",
				fontWeight: "medium",
			},
		},
	},
});
