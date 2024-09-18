import { useState } from "react";
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
	placeholder: string;
}

export default function Dropdown({ options, placeholder }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const blurContainer = () => {
		setTimeout(() => {
			setIsOpen(false);
		}, 200);
	};

	const selectOption = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<DropdownContainer onBlur={blurContainer}>
			<DropdownButton onClick={toggleDropdown}>
				{selectedOption || placeholder}
				{isOpen ? (
					<Arrow direction="up" />
				) : (
					<Arrow direction="down" />
				)}
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
