import React from "react";
import { styled } from "@/../styled-system/jsx";
import { nanoid } from "nanoid";

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

const SelectOptionContainer = styled("div", {
	base: {
		width: "140px",
		padding: "3px 0",
		marginLeft: "8px",
		backgroundColor: "#fff",
		position: "absolute",
		top: "0",
		left: "-4%",
		display: "none",
		zIndex: "10",
		border: "1px solid black",
	},
});

const SelectOptions = styled("div", {
	base: {
		marginBottom: "5px",
		paddingLeft: "30px",

		"&:hover": {
			backgroundColor: "#f5f5f5",
		},

		"&:first-of-type": {
			display: "flex",
		},
	},
});

const OptionDownArrow = styled("img", {
	base: {
		position: "absolute",
		top: "-0.5%",
		left: "-2%",
	},
});
