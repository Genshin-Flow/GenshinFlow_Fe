import { styled } from "@/../styled-system/jsx";
import { listItemType } from "@/features/mypage/components/historyInfo/History";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction } from "react";
import JellyBox from "@/features/mypage/components/jellyCheckbox/JellyBox";
import { historyCheckboxClickHandler } from "@/features/mypage/components/historyInfo/History";

type propsType = {
	listData: listItemType[];
	setListData: Dispatch<SetStateAction<listItemType[]>>;
	checkboxId: string[];
	setBoxId: Dispatch<SetStateAction<string[]>>;
};

export default function HistoryData(props: propsType) {
	return (
		<HistoryListContainer className="scrollbar">
			{props.listData.map((item, index) => (
				<HistoryList
					key={nanoid()}
					onClick={(event) =>
						historyCheckboxClickHandler(event, props.checkboxId, props.setBoxId)
					}
				>
					<JellyBox
						index={index}
						listId={item.id}
						checkboxId={props.checkboxId}
					/>
					<ListDataContainer>
						<Date>{item.date}</Date>
						<Quest>{item.quest}</Quest>
						<Desc>{item.desc}</Desc>
					</ListDataContainer>
				</HistoryList>
			))}
		</HistoryListContainer>
	);
}

const HistoryListContainer = styled("ul", {
	base: {
		width: "100%",
		height: "100%",
		maxHeight: "477px",
		overflow: "auto",
		textStyle: "md",
		textAlign: "right",
		padding: "0 12px",
		minHeight: "50px",
	},
});

const HistoryList = styled("li", {
	base: {
		width: "100%",
		minHeight: "51px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: "20px",
		"&:first-of-type": {
			marginTop: "0px",
		},
	},
});

const ListDataContainer = styled("p", {
	base: {
		width: "85%",
		display: "flex",
		borderBottom: "1px solid {colors.gray.01}",
	},
});

const Date = styled("span", {
	base: {
		flexGrow: "1",
	},
});

const Quest = styled("span", {
	base: {
		flexGrow: "1",
	},
});

const Desc = styled("span", {
	base: {
		maxWidth: "150px",
		overflow: "hidden",
		textWrap: "nowrap",
		flexGrow: "1",
	},
});
