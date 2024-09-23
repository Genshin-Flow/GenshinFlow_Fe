import { ReactNode } from "react";
import { styled } from "@/../styled-system/jsx";

type propsType = {
	children: ReactNode;
};

export default function MainTemplate(props: propsType) {
	return <TemplateContainer>{props.children}</TemplateContainer>;
}

const TemplateContainer = styled("section", {
	base: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		background: "url('/img/loginBackground/naviaBg.webp') no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "50% 50%",
		"&:after": {
			content: "''",
			position: "absolute",
			opacity: "0.7",
			width: "100%",
			height: "100%",
			backgroundColor: "#ffffff",
		},
	},
});
