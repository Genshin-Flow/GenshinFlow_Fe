import { styled } from "@/../styled-system/jsx";

type propsType = {
	children: string;
	//  string 타입을 variants의 값으로 사용할 수 없어 타입 any 사용
	clickFn?: () => void;
	variable?: "login" | "signUp" | "deActive";
	margin?: "mb12" | "mb20";
	platform?: "mobile";
};

export default function Button(props: propsType) {
	return (
		<ButtonCompo
			{...(props.margin && { margin: props.margin })}
			{...(props.variable && { variant: props.variable })}
			{...(props.platform && { placeItems: props.platform })}
		>
			{props.children}
		</ButtonCompo>
	);
}

const ButtonCompo = styled("button", {
	base: {
		width: "400px",
		borderRadius: "98px",
		fontWeight: "bold",
		cursor: "pointer",
		transition: "background 0.5s, color",
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
			deActive: {
				bg: "#dddee1",
				color: "#ffffff",
				pointerEvents: "none",
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
		platform: {
			pc: {
				height: "60px",
			},
			mobile: {
				height: "40px",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});
