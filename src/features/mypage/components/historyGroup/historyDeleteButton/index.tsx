import { ReactNode } from "react";
import { DeleteButton } from "./style";

type propsType = {
	children: ReactNode;
};

export default function HistoryButton(props: propsType) {
	return <DeleteButton>{props.children}</DeleteButton>;
}
