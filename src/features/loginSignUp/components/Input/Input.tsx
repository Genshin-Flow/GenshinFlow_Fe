import React from "react";
import { styled } from "@/../styled-system/jsx";

type marginType = "mb0" | "mb12" | "mb16" | "mb20" | "mb40" | "mb60";

type propsType = {
	type: string;
	placeholder: string;
	margin: marginType;
	authCodeInput?: boolean;
	platform?: "mobile";
};

export default function Input(props: propsType) {
	return (
		<DefaultInput
			type={props.type}
			placeholder={props.placeholder}
			margin={props.margin}
			{...(props.platform && { platform: props.platform })}
			{...(props.authCodeInput && { authCodeInput: "authInput" })}
		/>
	);
}

const DefaultInput = styled("input", {
	base: {
		width: "100%",
		padding: "0 30px",
		textStyle: "lg",
		bg: "gray.06",
		"&::placeholder": {
			textStyle: "lg",
		},
	},

	variants: {
		margin: {
			mb0: {
				marginBottom: "0px",
			},
			mb12: {
				marginBottom: "12px",
			},
			mb16: {
				marginBottom: "16px",
			},
			mb20: {
				marginBottom: "20px",
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
				padding: "0 12px",
				textStyle: "md",

				"&::placeholder": {
					textStyle: "md",
				},
			},
		},
		authCodeInput: {
			authInput: {
				paddingRight: "145px",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});
