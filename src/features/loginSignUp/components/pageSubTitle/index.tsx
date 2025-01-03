import { SubTitleStyle } from "./style";

type propsType = {
	children: string;
	platform?: "mobile";
};

export default function SubTitle(props: propsType) {
	return (
		<SubTitleStyle {...(props.platform && { platform: props.platform })}>
			{props.children}
		</SubTitleStyle>
	);
}
