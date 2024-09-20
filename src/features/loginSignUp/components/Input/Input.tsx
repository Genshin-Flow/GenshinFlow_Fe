import React from "react";
import { styled } from "@/../styled-system/jsx";

type marginType = "mb12" | "mb20" | "mb40" | "mb60";

type propsType = {
	type: string;
	placeholder: string;
	margin: marginType;
	platform?: "mobile";
};

export default function Input(props: propsType) {
	return (
		<DefaultInput
			type={props.type}
			placeholder={props.placeholder}
			margin={props.margin}
			{...(props.platform && { platform: props.platform })}
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
			mb12: {
				marginBottom: "12px",
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
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});
