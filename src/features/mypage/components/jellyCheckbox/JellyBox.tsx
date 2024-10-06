import React from "react";
import { styled } from "@/../styled-system/jsx";

type propsType = {
	index: number;
	listId: number;
	checkboxId: string[];
};

export default function JellyBox(props: propsType) {
	return (
		<CheckBoxLabel
			htmlFor={`box${props.index}`}
			className="checkboxLabel"
			data-id={props.listId}
		>
			<CheckboxInput
				type="checkbox"
				id={`box${props.index}`}
				className="checkboxLabel"
				data-id={props.listId}
				defaultChecked={props.checkboxId.includes(String(props.listId))}
			/>
			<Icon />
		</CheckBoxLabel>
	);
}

const CheckboxInput = styled("input", {
	base: {
		display: "none",
		"&:checked ~ span": {
			backgroundColor: "gray.01",
			// animation: "jelly 0.6s ease",
		},
		"&:checked ~ span::after": {
			opacity: "1",
			transform: "rotate(45deg) scale(1)",
		},
	},
});

const CheckBoxLabel = styled("label", {
	base: {
		width: "18px",
		height: "18px",
		display: "block",
		boxSizing: "border-box",
	},
});

const Icon = styled("span", {
	base: {
		width: "100%",
		height: "100%",
		position: "relative",
		display: "block",
		backgroundColor: "transparent",
		border: "1px solid {colors.gray.01}",

		"&::after": {
			content: "''",
			position: "absolute",
			display: "block",
			top: "1px",
			left: "5px",
			width: "5px",
			height: "11px",
			borderRight: "2px solid #fff",
			borderBottom: "2px solid #fff",
			transform: "rotate(45deg) scale(0)",
			transition: "all 0.2s ease",
			opacity: "0",
		},
	},
});
