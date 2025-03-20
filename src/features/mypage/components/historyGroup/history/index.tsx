"use client";
import { nanoid } from "nanoid";
import HistoryButton from "@/features/mypage/components/historyGroup/historyDeleteButton";
import JellyBox from "@/features/mypage/components/jellyCheckbox";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { deleteHistory } from "@/fetch/history/deleteHistory";
import {
	HistoryContainer,
	HistoryTitle,
	ListItemContainer,
	StarBox,
	Star,
	Item,
	ItemLeftBox,
	ItemRightBox,
	NextScrollBar,
	TextBox,
} from "./style";
import { useInfiniteTanStack } from "@/hooks/useQueryInfiniteScroll";
import { QueryFilters } from "@tanstack/react-query";
import { getHistory } from "@/fetch/history/getHistory";
import { after60Minutes, before60Minutes } from "@/utils/dayJs/day";
import { filterQuest } from "@/utils/filterQuest/fiilterQuest";
import { userDeletePost } from "@/fetch/Main/moreOption/user/userDeletePost";

export type listItemType = {
	date: string;
	quest: string;
	body: string;
	id: number;
};

/*
임시로 props로 받아오는 itemList데이터를 이용하고 있지만 추후 useState의 listItem
의 기본값을 []로 설정
*/

export default function History() {
	const postKey = "writeMyPost" as QueryFilters;
	const pagesize = 10;
	const staleTime = 1000 * 60 * 10;
	const { data, isLoading, refetch } = useInfiniteTanStack(
		postKey,
		pagesize,
		staleTime,
		getHistory,
	);

	const [checkId, setCheckId] = useState<string[]>([]);
	const [listItem, setItem] = useState<listItemType[]>([]);

	return (
		<>
			<form
				action="#"
				onSubmit={(event) =>
					historySubmitHandler(event, checkId, listItem, setCheckId, setItem)
				}
			>
				<HistoryTitle>
					<StarBox>
						<Star src="/svgs/star.svg" alt="별" />
						히스토리
					</StarBox>
					<HistoryButton>글 삭제</HistoryButton>
				</HistoryTitle>
				<HistoryContainer
					onClick={(event) =>
						historyCheckboxClickHandler(event, checkId, setCheckId)
					}
				>
					<ListItemContainer className="scrollbar">
						{data?.pages.map((page) => {
							return page.content.map((item: any, index: number) => {
								let minutesAgo = before60Minutes(item.createdAt);
								let timeAgo = "";
								if (minutesAgo > 60) {
									timeAgo = after60Minutes(item.createdAt);
								}
								const quest = filterQuest(item.questCategory);
								return (
									<Item key={nanoid()} data-id={item.id}>
										<ItemLeftBox>
											<JellyBox
												index={index}
												listId={item.id}
												checkboxId={checkId}
											/>
											<TextBox>
												{minutesAgo > 60 ? timeAgo : minutesAgo + "분 전"}
											</TextBox>
											<TextBox>{quest.quest}</TextBox>
										</ItemLeftBox>
										<ItemRightBox>{item.content}</ItemRightBox>
									</Item>
								);
							});
						})}
						{isLoading && <NextScrollBar />}
					</ListItemContainer>
				</HistoryContainer>
			</form>
		</>
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

export function historySubmitHandler(
	event: FormEvent<HTMLFormElement>,
	checkboxId: string[],
	listData: listItemType[],
	setBoxId: Dispatch<SetStateAction<string[]>>,
	setListData: Dispatch<SetStateAction<listItemType[]>>,
) {
	event.preventDefault(); // 기본 폼 제출 방지
	if (checkboxId.length <= 0) return;
	const newData = listData.filter((item) => {
		return !checkboxId.includes(String(item.id));
	});

	// 상태 업데이트
	setListData(newData); // 필요에 따라 상태를 비웁니다.
	setBoxId([]);
	deleteHistory(listData);
}
