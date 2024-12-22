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
	MobileContainer,
	FilterContainer,
	EventContainer,
	EventItem,
	BannerImage,
	EventTitle,
	EventDesc,
	EventDate,
	EventShortCut,
	MobileWriteButton,
	VisibleTabList,
} from "./styles";
import MatchingPostItem from "../MatchingPostItem";
import Dropdown from "../Dropdown";
import Modal from "../Modal";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useMainPostObserve } from "@/hooks/useMainPostObserve";
import { InfiniteData } from "@tanstack/react-query";

interface TabProps {
	isMobile?: boolean;
}

interface MatchingProps {
	isMobile?: boolean;
}

interface PostData {
	title: string;
	id: number;
	uid: number;
	region: string;
	questCategory: string;
	wordLevel: number;
	content: string;
	password: string;
	completed: boolean;
	completedAt: string;
	sortedAt: string;
	createdAt: string;
	updatedAt: string;
}

export default function Tab({ isMobile = false }: TabProps) {
	const [activeTab, setActiveTab] = useState(0);

	const renderContent = () => {
		switch (activeTab) {
			case 0:
				return <Matching isMobile={isMobile} />;
			case 1:
				return <>{isMobile ? <Event /> : <div>ABOUT</div>}</>;
			case 2:
		}
	};

	// 하이드레이션 에러 방지
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<Container isMobile={isMobile}>
			<TabContainer isMobile={isMobile}>
				<TabItem
					isMobile={isMobile}
					active={activeTab === 0}
					onClick={() => setActiveTab(0)}
				>
					구인글
				</TabItem>
				<TabItem
					isMobile={isMobile}
					active={activeTab === 1}
					onClick={() => setActiveTab(1)}
				>
					{isMobile ? "EVENT" : "ABOUT"}
				</TabItem>
			</TabContainer>
			{renderContent()}
		</Container>
	);
}

function Matching({ isMobile = false }: MatchingProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [quest, setQuest] = useState("");
	const [lv, setLv] = useState("");
	const [region, setRegion] = useState("ASIA");
	const [selectType, setSelectType] = useState("");
	const [postData, setPostData] = useState<PostData[]>([]);
	const scrollRef = useRef<HTMLDivElement>(null);
	const { data, isLoading, hasNextPage } = useMainPostObserve(scrollRef);
	useEffect(() => {
		if (data?.pages) {
			const newPosts = data.pages.flatMap((page) => page);
			setPostData((prev) => [...prev, ...newPosts]);
		}
	}, [data]);

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
			{!isMobile ? (
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
						{postData.map((_, index) => (
							<MatchingPostItem
								key={index}
								selected={selectType}
								type={"report"}
							/>
						))}
						{hasNextPage && !isLoading && <VisibleTabList ref={scrollRef} />}
					</PostList>
					{isModalOpen && <Modal onClose={closeModal} type="write" />}
				</>
			) : (
				<MobileContainer>
					<FilterContainer>
						<Dropdown
							placeholder="퀘스트 종류"
							value={quest}
							setValue={setQuest}
							options={questOptions}
							style="genshin"
							isMobile={isMobile}
						/>
						<Dropdown
							placeholder="월드 레벨"
							value={lv}
							setValue={setLv}
							options={lvOptions}
							style="genshin"
							isMobile={isMobile}
						/>
						<Dropdown
							value={region}
							setValue={setRegion}
							options={regionOptions}
							style="genshin"
							isMobile={isMobile}
						/>
					</FilterContainer>
					<PostList isMobile={isMobile}>
						{Array.from({ length: 50 }).map((_, index) => (
							<MatchingPostItem
								key={index}
								selected={selectType}
								isMobile={isMobile}
								type={"write"}
							/>
						))}
					</PostList>
					<MobileWriteButton onClick={openModal} />
					{isModalOpen && (
						<Modal onClose={closeModal} type="write" isMobile={isMobile} />
					)}
				</MobileContainer>
			)}
		</>
	);
}

function Event() {
	return (
		<EventContainer>
			<EventItem>
				<BannerImage src="/images/banner/event1.png" />
				<div>
					<EventTitle>[원신] 4.8 버전 내용 미리보기</EventTitle>
					<EventDesc>여름 나기에 필요한 것들은 다음과 같다.</EventDesc>
					<div>
						<EventDate>07/08</EventDate>
						<EventShortCut>바로가기</EventShortCut>
					</div>
				</div>
			</EventItem>
			<EventItem>
				<BannerImage src="/images/banner/event1.png" />
				<div>
					<EventTitle>[원신] 4.8 버전 내용 미리보기</EventTitle>
					<EventDesc>여름 나기에 필요한 것들은 다음과 같다.</EventDesc>
					<div>
						<EventDate>07/08</EventDate>
						<EventShortCut>바로가기</EventShortCut>
					</div>
				</div>
			</EventItem>
			<EventItem>
				<BannerImage src="/images/banner/event1.png" />
				<div>
					<EventTitle>[원신] 4.8 버전 내용 미리보기</EventTitle>
					<EventDesc>여름 나기에 필요한 것들은 다음과 같다.</EventDesc>
					<div>
						<EventDate>07/08</EventDate>
						<EventShortCut>바로가기</EventShortCut>
					</div>
				</div>
			</EventItem>
		</EventContainer>
	);
}
