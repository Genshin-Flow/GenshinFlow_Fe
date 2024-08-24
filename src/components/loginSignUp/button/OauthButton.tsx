import { styled } from "@/../styled-system/jsx";

type marginType = "mb12" | "mb40" | "mb60";

type propsType = {
	buttonText: string;
	svgUrl: string;
	// variant
	mb?: marginType;
};

export default function OauthButton(props: propsType) {
	return (
		<AuthButton {...(props.mb && { margin: props.mb })}>
			<IconBox>
				<img src={props.svgUrl} alt="구글 아이콘" />
			</IconBox>
			{props.buttonText}
		</AuthButton>
	);
}

const AuthButton = styled("button", {
	base: {
		width: "100%",
		height: "60px",
		position: "relative",
		padding: "0 20px",
		boxSizing: "border-box",
		borderRadius: "68px",
		border: "OauthBtn",
		cursor: "pointer",
		textStyle: "lg",
	},

	variants: {
		margin: {
			mb12: {
				marginBottom: "12px",
			},
			mb40: {
				marginBottom: "40px",
			},
			mb60: {
				marginBottom: "60px",
			},
		},
	},
});

const IconBox = styled("div", {
	base: {
		width: "24px",
		height: "24px",
		position: "absolute",
		left: "30px",
		top: "50%",
		transform: "translateY(-50%)",
	},
});
