import {
	CenterBox,
	CheckBox,
	DropdownItem,
	TextBox,
} from "@/features/matching/components/Dropdown/styles";
import { nanoid } from "nanoid";
import { Option } from "../index";

type propsType = {
	options: Option[];
	selectButtonValue: string[];
	style?: "default" | "genshin";
	selectOption: (event: React.MouseEvent) => void;
};

export default function MainDropDown(props: propsType) {
	return props.options.map((option) => (
		<DropdownItem
			key={nanoid()}
			onClick={props.selectOption}
			style={props.style}
		>
			<CenterBox>
				<TextBox>
					<CheckBox
						type="checkBox"
						data-itemdata={option.data}
						defaultChecked={
							option.data
								? props.selectButtonValue.includes(option.data)
								: false
						}
					/>
					<span>{option.value}</span>
				</TextBox>
			</CenterBox>
		</DropdownItem>
	));
}
