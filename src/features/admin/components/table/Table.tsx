import { styled } from "@/../styled-system/jsx";
import { nanoid } from "nanoid";
import { ReactNode } from "react";

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

const TableContainer = styled("article", {
	base: {
		width: "100%",
		height: "700px",
		maxHeight: "700px",
	},
});

const TableHeader = styled("div", {
	base: {
		height: "32px",
		backgroundColor: "gray.06",
	},
});

const HeaderUl = styled("ul", {
	base: {
		width: "100%",
		height: "100%",
		display: "flex",
	},
});

const HeaderList = styled("li", {
	base: {
		height: "100%",
		fontSize: "14px",
		fontWeight: "bold",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		"&:nth-of-type(1)": {
			width: "15%",
		},
		"&:nth-of-type(2)": {
			width: "15%",
		},
		"&:nth-of-type(3)": {
			width: "20%",
		},
		"&:nth-of-type(4)": {
			width: "15%",
		},
		"&:nth-of-type(5)": {
			width: "15%",
		},
		"&:nth-of-type(6)": {
			width: "20%",
		},
	},
});

const TableBody = styled("div", {
	base: {
		width: "100%",
		height: "660px",
		overflow: "auto",
	},
});
