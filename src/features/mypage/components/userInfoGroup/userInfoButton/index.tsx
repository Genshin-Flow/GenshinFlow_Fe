import { ReactNode } from "react";
import { Button } from "./style";
type propsType = {
	children: ReactNode;
	clickFn?: () => void;
};

export default function UserInfoButton(props: propsType) {
	if (props.children === undefined) return;
	return <Button onClick={props.clickFn}>{props.children}</Button>;
}
