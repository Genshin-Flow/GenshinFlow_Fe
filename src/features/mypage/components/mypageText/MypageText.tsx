import { styled } from "@/../styled-system/jsx";

type propsType = {
	children: React.ReactNode;
	mt?: "mt20" | "mt40";
	mb?: "mb40";
	align?: "center" | "right";
};

export default function MypageText(props: propsType) {
	return (
		<MyPageText
			{...(props.mt && { variant: props.mt })}
			{...(props.align && { align: props.align })}
			{...(props.mb && { mb: props.mb })}
		>
			{props.children}
		</MyPageText>
	);
}

const MyPageText = styled("p", {
	base: {
		width: "100%",
		textStyle: "xl",
	},
	variants: {
		variant: {
			mt20: {
				marginTop: "20px",
			},
			mt40: {
				marginTop: "40px",
			},
		},
		align: {
			left: {
				textAlign: "left",
			},
			center: {
				textAlign: "center",
			},
			right: {
				textAlign: "right",
			},
		},
		mb: {
			mb40: {
				marginBottom: "40px",
			},
		},
	},
	defaultVariants: {
		align: "left",
	},
});
