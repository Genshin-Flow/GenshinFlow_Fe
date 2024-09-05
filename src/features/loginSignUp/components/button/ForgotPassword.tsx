import { ReactNode } from "react";
import Link from "next/link";
import { styled } from "@/../styled-system/jsx";

type propsType = {
	children: ReactNode;
};

export default function ForgotPassword(props: propsType) {
	return (
		<LinkContainer>
			<Link href={"#"}>{props.children}</Link>
		</LinkContainer>
	);
}

const LinkContainer = styled("div", {
	base: {
		color: "gray.03",
		fontSize: "sm",
		fontWeight: "regular",
		textAlign: "center",
	},
});
