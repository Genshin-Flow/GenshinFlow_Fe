import { styled } from "@/../styled-system/jsx";
import { TabType } from "@/app/Admin/page";
import { ListInfoType } from "@/data/AdminSideListItem/adminSideListItem";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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

const ListContainer = styled("div", {
	base: {
		marginTop: "47px",
		"&:nth-of-type(1)": {
			marginTop: "0",
		},
	},
});

const ListTitleContainer = styled("div", {
	base: {
		base: {
			display: "flex",
			alignItems: "center",
			marginTop: "47px",
			"&:nth-of-type(1)": {
				marginTop: "0",
			},
		},
	},
});

const BlackList = styled("ul", {
	base: {
		maxWidth: "235px",
		fontSize: "14px",
		fontWeight: "400",
		display: "flex",
		flexDirection: "column",
		marginTop: "8px",
	},
});

const List = styled("li", {
	base: {
		width: "100%",
		cursor: "pointer",
		padding: "10px 20px",
		backgroundColor: "#FFFFFF",
		marginBottom: "4px",
		textStyle: "sm",

		"&.active": {
			border: "1px solid black",
		},
		"&:last-of-type": {
			marginBottom: "0",
		},
	},
});

const Arrow = styled("div", {
	base: {
		width: "24px",
		height: "24px",
		display: "flex",
		alignItems: "center",
	},
});
