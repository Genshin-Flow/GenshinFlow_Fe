import React from "react";
import { DefaultInput } from "./style";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { regionOptions } from "@/data/MainOptions/mainOptions";

type marginType = "mb0" | "mb12" | "mb16" | "mb20" | "mb40" | "mb60";

type propsType = {
	type: string;
	placeholder: string;
	margin: marginType;
	authCodeInput?: "authInput" | "mobileAuthInput";
	platform?: "mobile";
	register?: UseFormRegister<FieldValues>;
	registerName?: string;
};

export default function Input(props: propsType) {
	console.log(props.registerName);
	return (
		<DefaultInput
			type={props.type}
			placeholder={props.placeholder}
			margin={props.margin}
			{...(props.platform && { platform: props.platform })}
			{...(props.authCodeInput && { authCodeInput: props.authCodeInput })}
			{...(props.register && props.register(props.registerName ?? ""))}
		/>
	);
}
