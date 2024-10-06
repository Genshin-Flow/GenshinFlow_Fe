import { styled } from "@/../styled-system/jsx";
import UserInfoButton from "@/features/mypage/components/userInfo/UserInfoButton";

type propsType = {
	name: string;
	children: string;
	buttonText?: string;
	password?: boolean;
};

export default function UserInfoItem(props: propsType) {
	let children = props.children;
	if (props.password) {
		const passwordLeng = children.length;
		children = "";
		for (let i = 0; i <= passwordLeng; i++) {
			children += "*";
		}
	}
	return (
		<InfoItem>
			<ItemName>{props.name}</ItemName>
			<ItemBody>{children}</ItemBody>
			<UserInfoButton>{props.buttonText}</UserInfoButton>
		</InfoItem>
	);
}

const InfoItem = styled("div", {
	base: {
		width: "100%",
		height: "33px",
		display: "flex",
		alignItems: "center",
		textStyle: "md",
		marginTop: "12px",

		"&:first-of-type": {
			marginTop: "0",
		},
	},
});

const ItemBody = styled("p", {
	base: {
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
});

const ItemName = styled("p", {
	base: {
		width: "80px",
		color: "gray.04",
	},
});
