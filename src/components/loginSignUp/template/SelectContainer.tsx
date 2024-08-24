import { styled } from "@/../styled-system/jsx";
import { ReactNode } from "react";

type propsType = {
	children: ReactNode;
};

export default function SelectContainer(props: propsType) {
	return <SelectContainerStyle>{props.children}</SelectContainerStyle>;
}

const SelectContainerStyle = styled("article", {
	base: {
		width: "620px",
		padding: "60px 110px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		transition: "0.3s height",
		borderRadius: "40px",
		bg: "#ffffff",
		zIndex: "10",
	},
});
