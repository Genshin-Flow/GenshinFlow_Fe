import React from "react";
import { nanoid } from "nanoid";
import { SelectOptionContainer, SelectOptions, OptionDownArrow } from "./style";

type propsType = {
	optionData: string[];
};

export default function SelectOption(props: propsType) {
	return (
		<SelectOptionContainer onClick={optionClickHandler}>
			{props.optionData.map((item) => (
				<SelectOptions key={nanoid()}>
					<OptionDownArrow
						src="/svgs/fillDownArrow.svg"
						alt="아래방향 화살표"
					/>
					{item}
				</SelectOptions>
			))}
		</SelectOptionContainer>
	);
}

function optionClickHandler(
	event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) {
	const target = event.target as HTMLDivElement;
	const $parentGroup = target.closest(".optionGroup");
	const $disciplinaryText = $parentGroup?.children[1] as HTMLParagraphElement;
	if ($parentGroup && $disciplinaryText) {
		const selectDisciplinary = target.innerText;
		if (selectDisciplinary) {
			$disciplinaryText.innerText = selectDisciplinary;
		} else {
			$disciplinaryText.innerText = "경고 1회 누적";
		}
		$parentGroup?.classList.remove("active");
	}
}
