"use client";
import { AuthButton, IconBox } from "./style";
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
