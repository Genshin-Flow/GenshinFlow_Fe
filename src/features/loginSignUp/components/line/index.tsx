import { LineStyle } from "./style";

type propsType = {
	mb?: "mb40";
};

export default function Line(props: propsType) {
	return <LineStyle {...(props.mb && { marginBottom: props.mb })} />;
}
