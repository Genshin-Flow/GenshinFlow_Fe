import { ReactNode } from "react";
import { TemplateContainer } from "./style";

type propsType = {
	children: ReactNode;
};

export default function MainTemplate(props: propsType) {
	return (
		<TemplateContainer className="naviaBg">{props.children}</TemplateContainer>
	);
}
