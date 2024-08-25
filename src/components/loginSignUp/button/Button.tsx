import { styled } from "@/../styled-system/jsx";

type propsType = {
	children: string;
	//  string 타입을 variants의 값으로 사용할 수 없어 타입 any 사용
	variable?: any;
	margin?: any;
};

export default function Button(props: propsType) {
	return (
		<ButtonCompo
			{...(props.margin && { margin: props.margin })}
			{...(props.variable && { variant: props.variable })}
		>
			{props.children}
		</ButtonCompo>
	);
}

const ButtonCompo = styled("button", {
	base: {
		width: "400px",
		height: "60px",
		borderRadius: "98px",
		fontWeight: "bold",
		cursor: "pointer",
		transition: "background 0.5s, color 0.5s",
	},
	variants: {
		variant: {
			login: {
				bg: "primary.01",
				color: "#ffffff",
				"&:hover": {
					bg: "#EFEFEF",
					color: "black",
				},
			},
			signUp: {
				bg: "#EFEFEF",
			},
		},
		margin: {
			mb12: {
				marginBottom: "12px",
			},
			mb20: {
				marginBottom: "20px",
			},
		},
	},
});
