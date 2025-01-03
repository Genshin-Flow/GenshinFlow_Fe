"use client";
import { styled } from "@/../styled-system/jsx";
import { Dispatch, SetStateAction } from "react";
import { checkSvg } from "@/data/SvgUrl/svg";
import loginState from "@/stores/loginPageStateStore";
import {
	AgreeCheckBoxContainer,
	CheckBox,
	CheckBoxLabel,
	CheckSVG,
	Policy,
	TextLabel,
	CheckBoxText,
} from "./style";

type propsType = {
	checkState: boolean;
	setCheckState: Dispatch<SetStateAction<boolean>>;
	mb?: "mb40";
};

export default function Checkbox(props: propsType) {
	const { setPolicyModalState } = loginState();
	return (
		<>
			<AgreeCheckBoxContainer {...(props.mb && { marginBottom: props.mb })}>
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
