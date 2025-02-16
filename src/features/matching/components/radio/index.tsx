import { createContext, useContext, ReactNode, ChangeEvent } from "react";
import { RadioLabel, RadioInput, RadioSpan } from "./styles";

interface RadioContextProps {
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
}

interface RadioGroupProps {
	children: ReactNode;
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
}

interface RadioProps {
	children: ReactNode;
	value: string;
	name?: string;
	defaultChecked?: boolean;
	disabled?: boolean;
}

const RadioContext = createContext<RadioContextProps>({});

function RadioGroup({ children, ...rest }: RadioGroupProps) {
	return (
		<fieldset>
			<RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
		</fieldset>
	);
}

function Radio({
	children,
	value,
	name,
	defaultChecked,
	disabled,
}: RadioProps) {
	const group = useContext(RadioContext);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (group.onChange) {
			group.onChange(e.target.value);
		}
	};

	return (
		<RadioLabel>
			<RadioInput
				type="radio"
				value={value}
				name={name}
				defaultChecked={defaultChecked}
				disabled={disabled || group.disabled}
				checked={group.value !== undefined ? value === group.value : undefined}
				onChange={handleChange}
			/>
			<RadioSpan />
			{children}
		</RadioLabel>
	);
}

export { RadioGroup, Radio };
