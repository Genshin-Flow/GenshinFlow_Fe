import { styled } from "@/../styled-system/jsx";

type propsType = {
	children: React.ReactNode;
	mt?: "mt20" | "mt40";
};

export default function MypageInfo(props: propsType) {
	return (
		<MypageInfoContainer {...(props.mt && { marginTop: props.mt })}>
			{props.children}
		</MypageInfoContainer>
	);
}

const MypageInfoContainer = styled("div", {
	base: {
		width: "100%",
		display: "grid",
		padding: "12px",
		backgroundColor: "primary.04",
		borderRadius: "8px",
		border: "1px solid {colors.gray.04}",
	},
	variants: {
		marginTop: {
			mt40: {
				marginTop: "40px",
			},
			mt20: {
				marginTop: "20px",
			},
		},
	},
});
