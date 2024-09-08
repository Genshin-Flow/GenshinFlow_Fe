"use client";
import { styled } from "@/../styled-system/jsx";
import { signIn } from "next-auth/react";

type SignInType = typeof signIn;

type marginType = "mb12" | "mb40" | "mb60";

type propsType = {
	buttonText: string;
	svgUrl: string;
	socialSignIn: string;
	// variant
	margin?: marginType;
	platform?: "mobile";
};

export default function OauthButton(props: propsType) {
	return (
		<AuthButton
			{...(props.margin && { margin: props.margin })}
			{...(props.platform && { platform: props.platform })}
			onClick={() => {
				onClick(signIn, props.socialSignIn);
			}}
		>
			<IconBox>
				<img src={props.svgUrl} alt="구글 아이콘" />
			</IconBox>
			<span>{props.buttonText}</span>
		</AuthButton>
	);
}

async function onClick(SignIn: SignInType, type: string) {
	switch (type) {
		case "google":
			await SignIn(type, {
				callbackUrl: "/",
			});

			break;
		case "naver":
			SignIn(type, {
				callbackUrl: "/",
			});
			break;
		case "discord":
			SignIn(type, {
				callbackUrl: "/",
			});
			break;
	}
}

const AuthButton = styled("button", {
	base: {
		width: "100%",
		height: "60px",
		position: "relative",
		padding: "0 20px",
		boxSizing: "border-box",
		borderRadius: "68px",
		border: "1px solid {colors.gray.03}",
		cursor: "pointer",
		textStyle: "lg",
	},

	variants: {
		margin: {
			mb12: {
				marginBottom: "12px",
			},
			mb40: {
				marginBottom: "40px",
			},
			mb60: {
				marginBottom: "60px",
			},
		},
		platform: {
			pc: {
				height: "60px",
			},
			mobile: {
				height: "40px",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});

const IconBox = styled("div", {
	base: {
		width: "24px",
		height: "24px",
		position: "absolute",
		left: "30px",
		top: "50%",
		transform: "translateY(-50%)",
	},
});
