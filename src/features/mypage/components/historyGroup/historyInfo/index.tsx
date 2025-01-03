"use client";
import MypageText from "@/features/mypage/mobile/components/mypageText";
import MypageInfo from "@/features/mypage/template/mypageInfo";
import { nanoid } from "nanoid";
import HistoryButton from "@/features/mypage/mobile/components/historyMoreButton";
import { Dispatch, SetStateAction, useState } from "react";
import JellyBox from "@/features/mypage/components/jellyCheckbox";
import {
	HistoryContainer,
	HistoryTitleContainer,
	HistoryListContainer,
	HistoryList,
	ListDataContainer,
	Quest,
	Desc,
} from "./style";

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
