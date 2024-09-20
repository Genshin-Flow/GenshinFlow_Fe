import { styled } from "@/../styled-system/jsx";

type propsType = {
	mb?: "mb40";
};

export default function Line(props: propsType) {
	return <LineStyle {...(props.mb && { marginBottom: props.mb })} />;
}

const LineStyle = styled("div", {
	base: {
		width: "100%",
		height: "1px",
		backgroundColor: "gray.03",
		marginBottom: "20px",
	},
	variants: {
		marginBottom: {
			mb40: {
				marginBottom: "40px",
			},
		},
	},
});
