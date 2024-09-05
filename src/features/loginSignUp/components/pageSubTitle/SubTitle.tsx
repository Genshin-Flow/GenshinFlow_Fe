import { styled } from "@/../styled-system/jsx";

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

const SubTitleStyle = styled("h2", {
	base: {
		fontWeight: "bold",
		marginTop: "-60px",
		marginBottom: "40px",
		textAlign: "center",
	},

	variants: {
		platform: {
			pc: {
				fontSize: "2xl",
			},
			mobile: {
				fontSize: "lg",
			},
		},
	},
	defaultVariants: {
		platform: "pc",
	},
});
