import React, { useState, useRef, useEffect } from "react";
import {
	DropdownContainer,
	DropdownButton,
	DropdownList,
	DropdownItem,
	CheckBox,
	Arrow,
	CenterBox,
	TextBox,
} from "./styles";
import { nanoid } from "nanoid";
import { findChild } from "@/utils/findChildren/findChildren";
import useOutsideClick from "@/hooks/useOutsideClick";
import MainDropDown from "@/features/matching/components/dropdown/mainDropdown";

export type Option = {
	value: string;
	icon?: string;
	data?: string;
};

interface DropdownProps {
	options: Option[];
	placeholder?: string;
	setValue: (value: string[]) => void;
	style?: "default" | "genshin";
	useArea?: "main" | "addPost";
	isMobile?: boolean;
	isMobile2?: boolean;
}

export default function Dropdown({
	options,
	placeholder = "",
	setValue,
	style = "default",
	isMobile = false,
	isMobile2 = false,
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectButtonValue, setButtonValue] = useState<string[]>([]);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	useOutsideClick(dropdownRef, () => setIsOpen(false));

	const selectOption = (event: React.MouseEvent) => {
		const target = event.target as HTMLElement;
		const $parentElement = target.closest("li") as HTMLLIElement;
		const $targetChildren = findChild<HTMLInputElement>(
			$parentElement,
			"input",
		);
		if ($targetChildren) {
			const childrenDataValue = $targetChildren.dataset.itemdata;
			$targetChildren.checked = !$targetChildren.checked;
			if (childrenDataValue && $targetChildren.checked) {
				setButtonValue((prev) => [...prev, childrenDataValue]);
			} else {
				setButtonValue((prev) => {
					return prev.filter((item) => item !== childrenDataValue);
				});
			}
		}
	};

	useEffect(() => {
		setValue(selectButtonValue);
	}, [selectButtonValue]);

	return (
		<DropdownContainer ref={dropdownRef} isMobile={isMobile2}>
			<DropdownButton
				onClick={toggleDropdown}
				style={style}
				isOpen={isOpen}
				isMobile={isMobile}
				type="button"
			>
				{placeholder}
				{isOpen ? (
					<Arrow direction="up" style={style} />
				) : (
					<Arrow direction="down" style={style} />
				)}
			</DropdownButton>
			{isOpen && (
				<DropdownList style={style}>
					{options.map((option) => (
						<DropdownItem key={nanoid()} onClick={selectOption} style={style}>
							<CenterBox>
								<TextBox>
									<CheckBox
										type="checkBox"
										data-itemdata={option.data}
										defaultChecked={
											option.data
												? selectButtonValue.includes(option.data)
												: false
										}
									/>
									<span>{option.value}</span>
								</TextBox>
							</CenterBox>
						</DropdownItem>
					))}
				</DropdownList>
			)}
		</DropdownContainer>
	);
}
