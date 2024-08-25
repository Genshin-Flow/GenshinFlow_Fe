import { styled } from "@/../styled-system/jsx";
import { stateType } from "@/app/page";
import { ReactNode } from "react";

type propsType = {
	children: ReactNode;
	SelectBtn: stateType;
};

export default function SelectContainer(props: propsType) {
	return (
		<SelectContainerStyle
			{...(props.SelectBtn && { variant: props.SelectBtn })}
			{...(props.SelectBtn && { defaultTransform: "default" })}
		>
			{props.children}
		</SelectContainerStyle>
	);
}

const SelectContainerStyle = styled("article", {
	base: {
		width: "620px",
		height: "548px",
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		transition: "0.3s height",
		borderRadius: "40px",
		bg: "#ffffff",
		zIndex: "10",
		overflow: "hidden",
	},

	variants: {
		variant: {
			login: {
				height: "938px",
				"& .LoginContainer": {
					transform: "translateX(-0%)",
				},
			},

			signUp: {
				height: "677px",
			},
		},
		defaultTransform: {
			default: {
				"& .SelectBtnContainer": {
					transform: "translateX(-200%)",
				},
			},
		},
	},
});
