"use client";
import { styled } from "@/../styled-system/jsx";
import MypageText from "@/features/mypage/components/mypageText/MypageText";
import MypageInfo from "@/features/mypage/template/mypageInfo/MypageInfo";
import { nanoid } from "nanoid";
import HistoryButton from "@/features/mypage/components/historyInfo/HistoryButton";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import JellyBox from "@/features/mypage/components/jellyCheckbox/JellyBox";

export type listItemType = {
	date: string;
	quest: string;
	desc: string;
	id: number;
};

type propsType = {
	currentHistory?: "mypage";
};

const data = [
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 1,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 2,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 3,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 4,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 5,
	},
];

export default function History(props: propsType) {
	const [checkboxId, setBoxId] = useState<string[]>([]);
	const [listData, setListData] = useState<listItemType[]>(data);

	return (
		<HistoryContainer
			{...(props.currentHistory && { variable: props.currentHistory })}
			onClick={(event) =>
				historyCheckboxClickHandler(event, checkboxId, setBoxId)
			}
		>
			<HistoryTitleContainer>
				<MypageText>히스토리</MypageText>
				<HistoryButton
					checkboxId={checkboxId}
					listData={listData}
					setBoxId={setBoxId}
					setListData={setListData}
				/>
			</HistoryTitleContainer>
			<MypageInfo mt="mt20" currentHistory="history">
				<HistoryListContainer>
					{listData.map((item, index) => (
						<HistoryList key={nanoid()}>
							<JellyBox
								index={index}
								listId={item.id}
								checkboxId={checkboxId}
							/>
							<ListDataContainer>
								<Date>{item.date}</Date>
								<Quest>{item.quest}</Quest>
								<Desc>{item.desc}</Desc>
							</ListDataContainer>
						</HistoryList>
					))}
				</HistoryListContainer>
			</MypageInfo>
		</HistoryContainer>
	);
}

export function historyCheckboxClickHandler(
	event: React.MouseEvent<HTMLElement, MouseEvent>,
	checkboxId: string[],
	setBoxId: Dispatch<SetStateAction<string[]>>,
) {
	const target = event.target as HTMLElement;
	if (
		target.classList.contains("checkboxLabel") &&
		target instanceof HTMLInputElement
	) {
		const id = target.dataset.id as string;
		if (!checkboxId.includes(id)) {
			setBoxId((prev) => [...prev, id]);
		} else {
			setBoxId((prev) => prev.filter((item) => item !== id));
		}
	}
}
const HistoryContainer = styled("article", {
	base: {
		width: "100%",
		position: "relative",
	},
});

const HistoryTitleContainer = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		marginTop: "40px",
	},
});

const HistoryListContainer = styled("ul", {
	base: {
		width: "100%",
		textStyle: "md",
		padding: "0 12px",
		minHeight: "50px",
		maxHeight: "200px",
		overflow: "hidden",
	},
});

const HistoryList = styled("li", {
	base: {
		width: "100%",
		minHeight: "51px",
		display: "flex",
		justifyContent: "space-between",
		columnGap: "20px",
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
