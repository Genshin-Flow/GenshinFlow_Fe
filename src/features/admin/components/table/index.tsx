import { nanoid } from "nanoid";
import { ReactNode } from "react";
import {
	TableContainer,
	TableHeader,
	HeaderUl,
	TableBody,
	HeaderList,
} from "./style";

type propsType = {
	tableHeaderItems: string[];
	children: ReactNode;
};

export default function Table(props: propsType) {
	return (
		<TableContainer>
			<TableHeader>
				<HeaderUl>
					{props.tableHeaderItems.map((item) => (
						<HeaderList key={nanoid()}>{item}</HeaderList>
					))}
				</HeaderUl>
			</TableHeader>
			<TableBody>{props.children}</TableBody>
		</TableContainer>
	);
}
