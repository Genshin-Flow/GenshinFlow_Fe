import { TabType } from "@/app/(Admin)/Admin/page";
import { ListInfoType } from "@/data/AdminSideListItem/adminSideListItem";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
	ListContainer,
	ListTitleContainer,
	BlackList,
	List,
	Arrow,
} from "./style";
type propsType = {
	listInfo: ListInfoType;
	setCurrentTab: Dispatch<SetStateAction<TabType>>;
};

export default function TabList(props: propsType) {
	const [activeTab, setActiveTab] = useState<TabType | null>(
		"reportManagement",
	);
	const clickFn = (event: MouseEvent) =>
		clickHandler(event, props.setCurrentTab);
	useEffect(() => {
		document.addEventListener("click", clickFn);

		return () => document.removeEventListener("click", clickFn);
	}, []);
	return (
		<>
			{props.listInfo.map((item) => (
				<ListContainer key={nanoid()}>
					<ListTitleContainer>
						<Arrow>
							<img src="/svgs/downArrow.svg" alt="아래쪽을 향한 화살표" />
						</Arrow>
						<p>{item.title}</p>
					</ListTitleContainer>
					<BlackList>
						{item.listItem.map((listItem) => (
							<List
								className={`TabList ${activeTab === listItem.dataset ? "active" : ""}`}
								key={nanoid()}
								data-currenttab={listItem.dataset}
								onClick={() => {
									setActiveTab(listItem.dataset as TabType);
									props.setCurrentTab(listItem.dataset as TabType);
								}}
							>
								{listItem.title}
							</List>
						))}
					</BlackList>
				</ListContainer>
			))}
		</>
	);
}

function clickHandler(
	event: MouseEvent,
	setCurrentTab: Dispatch<SetStateAction<TabType>>,
) {
	try {
		const target = event.target as HTMLElement;
		if (target.classList.contains("TabList")) {
			const targetData = target.dataset.currenttab as TabType;
			if (targetData) {
				activeHandler(target);
				setCurrentTab(targetData);
			} else {
				throw new Error(
					"dataset을 찾을 수 없습니다 새로고침후 다시 시도해주세요",
				);
			}
		}
	} catch (error) {
		console.error(error);
	}
}

function activeHandler(target: HTMLElement) {
	const $list = target.closest("li") as HTMLElement;
	const $allList = document.querySelectorAll("TabList");
	if (!$list.classList.contains("active")) {
		$allList.forEach((list) => {
			list.classList.remove("active");
		});
		$list.classList.add("active");
	}
}
