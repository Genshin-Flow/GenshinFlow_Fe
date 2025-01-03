import React from "react";
import { CheckBoxLabel, CheckboxInput, Icon } from "./style";

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
