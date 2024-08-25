import SelectButton from "@/components/loginSignUp/SelectButton";
import { Dispatch, SetStateAction } from "react";
import { stateType } from "@/app/page";

type propsType = {
	SetSelectBtn: Dispatch<SetStateAction<stateType>>;
};

export default function Select(props: propsType) {
	return (
		<>
			<SelectButton SetSelectBtn={props.SetSelectBtn} />
		</>
	);
}
