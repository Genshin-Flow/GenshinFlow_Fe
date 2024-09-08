import { styled } from "@/../styled-system/jsx";
import { ReactNode } from "react";
import loginState from "@/stores/loginStateStore";

type propsType = {
	children: ReactNode;
};

export default function SelectContainer(props: propsType) {
	const { selectBtn } = loginState();
	return (
		<SelectContainerStyle
			{...(selectBtn && { variant: selectBtn })}
			{...(selectBtn && { defaultTransform: "default" })}
		>
			{props.children}
		</SelectContainerStyle>
	);
}

const SelectContainerStyle = styled("div", {
	base: {
		width: "620px",
		height: "548px",
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		transition: "0.3s height, 0.3s width",
		transform: "translateX(0%)",
		borderRadius: "40px",
		bg: "#ffffff",
		zIndex: "10",
		overflow: "hidden",
	},

	variants: {
		variant: {
			login: {
				width: "550px",
				height: "800px",
				"& .LoginContainer": {
					transform: "translateX(0%)",
				},
			},

			signUpSelect: {
				height: "677px",
				"& .SignUpSelectContainer": {
					transform: "translateX(0%)",
				},
			},
			forgotPassword: {
				height: "625px",
				"& .forgotPassword": {
					transform: "translateX(0%)",
				},
			},
			signUp: {
				height: "712px",

				"& .SignUp": {
					transform: "translateX(0%)",
				},
			},
		},
		defaultTransform: {
			default: {
				"& .SelectBtnContainer": {
					transform: "translateX(-200%)",
				},
			},
		},
	},
});
