"use client";
import {
	Container,
	TabContainer,
	TabItem,
	MatchingMenu,
	WriteButton,
	MatchingHeader,
	UserName,
	QuestType,
	WorldLevel,
	Message,
	TimeAgo,
	MoreOptions,
	Gap,
	PostList,
} from "./styles";
import MatchingPostItem from "../MatchingPostItem";
import Dropdown from "../Dropdown";
import Modal from "../Modal";
import { useState } from "react";

export default function Tab() {
	const [activeTab, setActiveTab] = useState(0);

	const renderContent = () => {
		switch (activeTab) {
			case 0:
				return <Matching />;
			case 1:
				return <div>ABOUT</div>;
			case 2:
		}
	};

	return (
		<Container>
			<TabContainer>
				<TabItem active={activeTab === 0} onClick={() => setActiveTab(0)}>
					구인글
				</TabItem>
				<TabItem active={activeTab === 1} onClick={() => setActiveTab(1)}>
					ABOUT
				</TabItem>
			</TabContainer>
			{renderContent()}
		</Container>
	);
}

function Matching() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [quest, setQuest] = useState("");
	const [lv, setLv] = useState("");
	const [region, setRegion] = useState("ASIA");
	const [selectType, setSelectType] = useState("");

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const handleSelectType = (type: string) => {
		setSelectType((prevType) => (prevType === type ? "" : type));
	};

	const questOptions = [
		{ value: "일반비경" },
		{ value: "이벤트 퀘스트" },
		{ value: "영역 토벌" },
		{ value: "일일 임무" },
		{ value: "맵 탐사" },
		{ value: "채집" },
	];

	const lvOptions = [
		{ value: "1" },
		{ value: "2" },
		{ value: "3" },
		{ value: "4" },
		{ value: "5" },
		{ value: "6" },
		{ value: "7" },
		{ value: "8" },
		{ value: "9" },
	];

	const regionOptions = [
		{ value: "ASIA" },
		{ value: "AMERICA" },
		{ value: "EUROPE" },
		{ value: "CHINA" },
		{ value: "TW, HK, MO" },
	];

	return (
		<>
			<MatchingMenu>
				<div>
					<Dropdown
						placeholder="퀘스트 종류"
						value={quest}
						setValue={setQuest}
						options={questOptions}
						style="genshin"
					/>
					<Dropdown
						placeholder="월드 레벨"
						value={lv}
						setValue={setLv}
						options={lvOptions}
						style="genshin"
					/>
				</div>
				<div>
					<Dropdown
						value={region}
						setValue={setRegion}
						options={regionOptions}
						style="genshin"
					/>
					<WriteButton onClick={openModal}>구인글 쓰기</WriteButton>
				</div>
			</MatchingMenu>
			<MatchingHeader>
				<UserName
					select={selectType === "userName"}
					onClick={() => handleSelectType("userName")}
				>
					유저명
				</UserName>
				<QuestType
					select={selectType === "questType"}
					onClick={() => handleSelectType("questType")}
				>
					퀘스트 종류
				</QuestType>
				<WorldLevel
					select={selectType === "worldLevel"}
					onClick={() => handleSelectType("worldLevel")}
				>
					월드 레벨
				</WorldLevel>
				<Message
					select={selectType === "message"}
					onClick={() => handleSelectType("message")}
				>
					이야기
				</Message>
				<TimeAgo
					select={selectType === "timeAgo"}
					onClick={() => handleSelectType("timeAgo")}
				>
					등록일시
				</TimeAgo>
				<MoreOptions></MoreOptions>
				<Gap />
			</MatchingHeader>
			<PostList>
				{Array.from({ length: 50 }).map((_, index) => (
					<MatchingPostItem key={index} selected={selectType} />
				))}
			</PostList>
			{isModalOpen && <Modal onClose={closeModal} type="write" />}
		</>
	);
}
