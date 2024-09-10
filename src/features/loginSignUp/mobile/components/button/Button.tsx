import { styled } from "@/../styled-system/jsx";

type propsType = {
	changePage?: boolean;
	buttonState?: "login" | "deActive";
	mb?: "mb12" | "mb40" | "mb48";
	children: string;
};

export default function Button(props: propsType) {
	return (
		<ButtonStyle
			{...(props.changePage && { buttonType: "changePage" })}
			{...(props.mb && { marginBottom: props.mb })}
			{...(props.buttonState && { buttonState: props.buttonState })}
		>
			{props.children}
		</ButtonStyle>
	);
}

const ButtonStyle = styled("button", {
	base: {
		width: "100%",
		height: "40px",
		borderRadius: "98px",
		textStyle: "xl",
		cursor: "pointer",
		transition: "0.5s background-color",
	},
	variants: {
		buttonType: {
			changePage: {
				borderRadius: "0",
				backgroundColor: "gray.06",
				color: "black",
				textStyle: "md",
			},
		},
		marginBottom: {
			mb12: {
				marginBottom: "12px",
			},
			mb40: {
				marginBottom: "40px",
			},
			mb48: {
				marginBottom: "48px",
			},
		},
		buttonState: {
			deActive: {
				backgroundColor: "primary.01",
				color: "#fff",
				pointerEvents: "none",
			},
			login: {
				color: "#fff",
				backgroundColor: "{colors.primary.01}",

				"&:hover": {
					backgroundColor: "{colors.gray.07}",
					color: "black",
				},
			},
		},
	},
});
