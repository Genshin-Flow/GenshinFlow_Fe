import UserInfoButton from "@/features/mypage/components/userInfoGroup/userInfoButton";
import { InfoItem, ItemName, ItemBody } from "./style";
type propsType = {
	name: string;
	children: string;
	buttonText?: string;
	password?: boolean;
	onClick?: () => void;
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
			<UserInfoButton clickFn={props.onClick}>
				{props.buttonText}
			</UserInfoButton>
		</InfoItem>
	);
}
