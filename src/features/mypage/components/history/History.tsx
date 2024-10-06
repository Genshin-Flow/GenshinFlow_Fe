"use client";
import { styled } from "@/../styled-system/jsx";
import { nanoid } from "nanoid";
import HistoryButton from "@/features/mypage/components/history/HistoryButton";
import JellyBox from "@/features/mypage/components/jellyCheckbox/JellyBox";
import {
	Dispatch,
	FormEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { getHistory } from "@/fetch/history/getHistory";
import { deleteHistory } from "@/fetch/history/deleteHistory";

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
	const [checkId, setCheckId] = useState<string[]>([]);
	const [listItem, setItem] = useState<listItemType[]>(data);
	// useEffect(() => {
	// 	const fetch = async () => {
	// 		const data = await getHistory();
	// 		setItem(data);
	// 	};
	// 	fetch();
	// }, []);
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
						{listItem.map((item, index) => (
							<Item key={nanoid()} data-id={item.id}>
								<ItemLeftBox>
									<JellyBox
										index={index}
										listId={item.id}
										checkboxId={checkId}
									/>
									<p>{item.date}</p>
									<p>{item.quest}</p>
								</ItemLeftBox>
								<ItemRightBox>{item.body}</ItemRightBox>
							</Item>
						))}
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

	console.log(newData);
	// 상태 업데이트
	setListData(newData); // 필요에 따라 상태를 비웁니다.
	setBoxId([]);
	deleteHistory(listData);
}

const HistoryContainer = styled("article", {
	base: {
		width: "100%",
		marginTop: "25px",
		borderRadius: "8px",
		padding: "0 20px",
		overflow: "hidden",
	},
});

const HistoryTitle = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		textStyle: "lg",
		marginTop: "40px",
	},
});

const StarBox = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
	},
});

const Star = styled("img", {
	base: {
		width: "40px",
		height: "40px",
		marginRight: "20px",
	},
});

const ListItemContainer = styled("ul", {
	base: {
		width: "100%",
		height: "40%",
		maxHeight: "290px",
		overflow: "auto",
		backgroundColor: "#FCFCFC",
		borderRadius: "8px",
		border: "1px solid #E0E0E0",
	},
});

const Item = styled("li", {
	base: {
		width: "100%",
		height: "57px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		overflow: "hidden",
		padding: "0 20px",
		borderBottom: "1px solid {colors.gray.04}",
		"&:last-of-type": {
			borderBottom: "0",
		},
	},
});

const ItemLeftBox = styled("div", {
	base: {
		display: "flex",
		columnGap: "20px",
		marginRight: "auto",
	},
});

const ItemRightBox = styled("p", {
	base: {
		width: "200px",
		textAlign: "right",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
});

const data = [
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요맵 밀어주세요맵 밀어주세요맵 밀어주세요",
		id: 1,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요맵 밀어주세요맵 밀어주세요맵 밀어주세요맵 밀어주세요맵 밀어주세요맵 밀어주세요",
		id: 2,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요",
		id: 3,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요",
		id: 4,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요",
		id: 5,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요",
		id: 6,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요",
		id: 7,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요",
		id: 8,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요",
		id: 9,
	},
	{
		date: "2024-08-09",
		quest: "비경",
		body: "맵 밀어주세요",
		id: 10,
	},
];
