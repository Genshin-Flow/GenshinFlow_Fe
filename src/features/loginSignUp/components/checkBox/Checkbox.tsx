"use client";
import { styled } from "@/../styled-system/jsx";
import { Dispatch, SetStateAction } from "react";
import { checkSvg } from "@/data/SvgUrl/svg";
import loginState from "@/stores/loginStateStore";

type propsType = {
	checkState: boolean;
	setCheckState: Dispatch<SetStateAction<boolean>>;
};

export default function Checkbox(props: propsType) {
	const { setPolicyModalState } = loginState();
	return (
		<>
			<AgreeCheckBoxContainer>
				<CheckBox
					type="checkbox"
					id="checkbox"
					onChange={() => props.setCheckState(!props.checkState)}
				/>
				<CheckBoxLabel
					htmlFor="checkbox"
					{...(props.checkState && { variant: "active" })}
				>
					<CheckSVG src={checkSvg} alt="체크표시" />
				</CheckBoxLabel>
				<Policy onClick={() => setPolicyModalState(true)}>
					개인정보 처리방침
				</Policy>
				<TextLabel htmlFor="checkbox">
					<CheckBoxText>에 동의하십니까?</CheckBoxText>
				</TextLabel>
			</AgreeCheckBoxContainer>
		</>
	);
}

const AgreeCheckBoxContainer = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "18px",
	},
});

const CheckBox = styled("input", {
	base: {
		display: "none",
	},
});

const CheckBoxLabel = styled("label", {
	base: {
		width: "24px",
		height: "24px",
		position: "relative",
		display: "block",
		borderRadius: "50%",
		marginRight: "16px",
		cursor: "pointer",
		border: "1px solid {colors.gray.05}",
		transition: "background-color 0.3s",
		backgroundColor: "gray.06",
		overflow: "hidden",
	},
	variants: {
		variant: {
			active: {
				backgroundColor: "gray.01",

				"& > img": {
					transform: "translate(-50%,-50%)",
				},
			},
		},
	},
});

const CheckSVG = styled("img", {
	base: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,200%)",
		transition: "0.3s transform",
	},
});

const TextLabel = styled("label", {
	base: {
		cursor: "pointer",
	},
});

const CheckBoxText = styled("span", {
	base: {
		textStyle: "sm",
	},
});

const Policy = styled("span", {
	base: {
		textStyle: "sm",
		textDecoration: "underline",
		cursor: "pointer",
	},
});
