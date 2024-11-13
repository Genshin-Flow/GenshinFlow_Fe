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
	style?: "default" | "genshin";
	isMobile?: boolean;
	isMobile2?: boolean;
}

export default function Dropdown({
	options,
	placeholder = "",
	value,
	setValue,
	style = "default",
	isMobile = false,
	isMobile2 = false,
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
		<DropdownContainer ref={dropdownRef} isMobile={isMobile2}>
			<DropdownButton onClick={toggleDropdown} style={style} isOpen={isOpen} isMobile={isMobile}>
				{value || placeholder}
				{isOpen ? (
					<Arrow direction="up" style={style} />
				) : (
					<Arrow direction="down" style={style} />
				)}
			</DropdownButton>
			{isOpen && (
				<DropdownList style={style}>
					{options.map((option) => (
						<DropdownItem
							key={option.value}
							onClick={() => selectOption(option.value)}
							style={style}
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
