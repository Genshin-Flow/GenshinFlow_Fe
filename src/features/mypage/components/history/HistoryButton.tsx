import { ReactNode } from "react";
import { styled } from "@/../styled-system/jsx";

type propsType = {
	children: ReactNode;
};

export default function HistoryButton(props: propsType) {
	return <DeleteButton>{props.children}</DeleteButton>;
}

const DeleteButton = styled("button", {
	base: {
		width: "80px",
		height: "40px",
		textStyle: "sm",
		padding: "14px 19px",
		backgroundColor: "primary.01",
		borderRadius: "4px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "{colors.secondary.04}",
		border: "1px solid #696969",
		cursor: "pointer",
	},
});
