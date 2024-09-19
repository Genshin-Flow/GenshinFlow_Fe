import { useState, useRef } from "react";
import {
	DropdownContainer,
	DropdownButton,
	DropdownList,
	DropdownItem,
	DropdownIcon,
	Arrow,
} from "./styles";
import useOutsideClick from "@/hooks/useOutsideClick";

type Option = {
	value: string;
	icon?: string;
};

interface DropdownProps {
	options: Option[];
	placeholder?: string;
	value: string;
	setValue: (value: string) => void;
}

export default function Dropdown({
	options,
	placeholder = "",
	value,
	setValue,
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectOption = (option: string) => {
		setValue(option);
		setIsOpen(false);
	};

	useOutsideClick(dropdownRef, () => {
		setIsOpen(false);
	});

	return (
		<DropdownContainer ref={dropdownRef}>
			<DropdownButton onClick={toggleDropdown}>
				{value || placeholder}
				{isOpen ? <Arrow direction="up" /> : <Arrow direction="down" />}
			</DropdownButton>
			{isOpen && (
				<DropdownList>
					{options.map((option) => (
						<DropdownItem
							key={option.value}
							onClick={() => selectOption(option.value)}
						>
							{option.value}
							{option.icon && (
								<DropdownIcon src={option.icon} alt={option.value} />
							)}
						</DropdownItem>
					))}
				</DropdownList>
			)}
		</DropdownContainer>
	);
}
