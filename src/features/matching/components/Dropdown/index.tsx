import { useState, useRef, useEffect } from "react";
import {
	DropdownContainer,
	DropdownButton,
	DropdownList,
	DropdownItem,
	DropdownIcon,
	Arrow,
} from "./styles";

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

	const handleClickOutside = (e: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(e.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

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
