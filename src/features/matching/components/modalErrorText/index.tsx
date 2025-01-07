import { ErrorTextContainer } from "./style";
type propsType = {
	children: string;
};

export default function ErrorText(props: propsType) {
	return <ErrorTextContainer>{props.children}</ErrorTextContainer>;
}
