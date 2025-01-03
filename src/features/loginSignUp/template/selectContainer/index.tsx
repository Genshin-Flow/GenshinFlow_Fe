import { ReactNode } from "react";
import loginState from "@/stores/loginPageStateStore";
import { SelectContainerStyle } from "./style";

type propsType = {
	children: ReactNode;
};

export default function SelectContainer(props: propsType) {
	const { selectBtn } = loginState();
	return (
		<SelectContainerStyle
			{...(selectBtn && { variant: selectBtn })}
			{...(selectBtn && { defaultTransform: "default" })}
		>
			{props.children}
		</SelectContainerStyle>
	);
}
