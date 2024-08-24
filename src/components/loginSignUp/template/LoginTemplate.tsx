import { styled } from "@/../styled-system/jsx";
import { ReactNode } from "react";

type propsType = {
	children: ReactNode;
};

export default function LoginTemplate(props: propsType) {
	return (
		<LoginContainer>
			<img src="#" alt="원신 플로우 로고" />
			<p>더 나은 인연을 위해</p>
			<ChildrenContainer>{props.children}</ChildrenContainer>
		</LoginContainer>
	);
}

const LoginContainer = styled("article", {
	base: {
		width: "620px",
		bg: "#ffffff",
	},
});

const ChildrenContainer = styled("div", {
	base: {
		marginTop: "100px",
	},

	variants: {
		variant: {
			signUp: {
				marginTop: "40px",
			},
		},
	},
});
