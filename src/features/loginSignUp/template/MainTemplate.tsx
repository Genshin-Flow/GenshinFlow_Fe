import { ReactNode } from "react";
import { styled } from "@/../styled-system/jsx";

type propsType = {
	children: ReactNode;
};

export default function MainTemplate(props: propsType) {
	return (
		<TemplateContainer className="naviaBg">{props.children}</TemplateContainer>
	);
}

const TemplateContainer = styled("section", {
	base: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
});
