import { Dispatch, SetStateAction } from "react";
import { nanoid } from "nanoid";
import {
	PostDropdownContainer,
	PostDropDownItemContainer,
	SortingBox,
	TextBox,
} from "@/features/matching/components/dropdown/addPostDropdown/style";

type propsType = {
	select: string;
	placeHolder?: string;
	itemOptionList: {
		value: string;
		data?: string;
	}[];
	setSelect: Dispatch<SetStateAction<string>>;
};

export default function AddPostDropDown(props: propsType) {
	return (
		<PostDropdownContainer
			onClick={(event) => clickHandler(event, props.setSelect)}
		>
			<SortingBox className="postContainer">
				{!props.select ? (
					<TextBox>{props.placeHolder}</TextBox>
				) : (
					<TextBox>{props.select}</TextBox>
				)}
				<img src="/svgs/arrow.svg" alt="화살표" />
			</SortingBox>
			<PostDropDownItemContainer>
				{props.itemOptionList.map((item) => (
					<li
						key={nanoid()}
						className="dropDownOptions"
						data-datavalue={item.data}
					>
						{item.value}
					</li>
				))}
			</PostDropDownItemContainer>
		</PostDropdownContainer>
	);
}

function clickHandler(
	event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	setSelect: Dispatch<SetStateAction<string>>,
) {
	const target = event.target as HTMLLIElement;
	if (target.classList.contains("postContainer")) {
		const nextSibling = target.nextSibling as HTMLElement;
		nextSibling.classList.toggle("active");
	}
	if (target.classList.contains("dropDownOptions")) {
		const dataValue = target.dataset.datavalue as string;
		console.log(dataValue);
		setSelect(dataValue);
	}
}
