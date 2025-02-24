import { Dispatch, SetStateAction, useRef, useState } from "react";
import { nanoid } from "nanoid";
import {
	PostDropdownContainer,
	PostDropDownItemContainer,
	SortingBox,
	TextBox,
} from "@/features/matching/components/Dropdown_tmp/addPostDropdown/style";
import useOutsideClick from "@/hooks/useOutsideClick";

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
	const dropDownRef = useRef(null);
	const dropDownContainer = useRef(null);
	const [modalOpen, setModalOpen] = useState(false);
	const closeModal = () => setModalOpen(false);
	const openModal = () => setModalOpen(true);
	const toggle = modalOpen ? closeModal : openModal;
	useOutsideClick(dropDownRef, closeModal, dropDownContainer);
	return (
		<PostDropdownContainer
			ref={dropDownContainer}
			onClick={(event) => clickHandler(event, props.setSelect, toggle)}
		>
			<SortingBox className="postContainer">
				{!props.select ? (
					<TextBox>{props.placeHolder}</TextBox>
				) : (
					<TextBox>{props.select}</TextBox>
				)}
				<img src="/svgs/arrow.svg" alt="화살표" />
			</SortingBox>
			{modalOpen && (
				<PostDropDownItemContainer ref={dropDownRef}>
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
			)}
		</PostDropdownContainer>
	);
}

function clickHandler(
	event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	setSelect: Dispatch<SetStateAction<string>>,
	toggleModal: () => void,
) {
	const target = event.target as HTMLLIElement;
	toggleModal();
	if (target.classList.contains("dropDownOptions")) {
		const dataValue = target.dataset.datavalue as string;
		setSelect(dataValue);
	}
}
