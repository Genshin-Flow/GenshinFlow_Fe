import { ChangeEvent } from "react";

export function textOnChange(
	event: ChangeEvent<HTMLInputElement>,
	regular: RegExp,
) {
	let result = event.target.value;
	if (result) {
		for (let i = 0; i < result.length; i++) {}

		return result;
	}
}
