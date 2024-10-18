import { styled } from "@/../styled-system/jsx";
import { ReactNode } from "react";

type propsType = {
	children: ReactNode;
	clickFn?: () => void;
};

export default function UserInfoButton(props: propsType) {
	if (props.children === undefined) return;
	return <Button onClick={props.clickFn}>{props.children}</Button>;
}

const Button = styled("button", {
	base: {
		cursor: "pointer",
		border: "1px solid #E7E7E7",
		padding: "8px 16px",
		borderRadius: "4px",
		marginLeft: "auto",
	},
});
