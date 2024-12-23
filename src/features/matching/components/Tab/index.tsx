"use client";
import {
	Container,
	TabContainer,
	TabItem,
	MobileContainer,
	EventContainer,
	EventItem,
	BannerImage,
	EventTitle,
	EventDesc,
	EventDate,
	EventShortCut,
	MobileWriteButton,
} from "./styles";
import MatchingPostItem from "../MatchingPostItem";

import Modal from "../Modal";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useMainPostObserve } from "@/hooks/useMainPostObserve";
import { nanoid } from "nanoid/non-secure";
import userStore from "@/stores/userStore";
import MatchingMenu from "@/features/matching/components/MatchingMenu";
import MobileFilterContainer from "@/features/matching/mobile/components/MobileContainer";
import MatchingHeader from "@/features/matching/components/MatchingHeader";
import PostList from "@/features/matching/components/PostList";

interface TabProps {
	isMobile?: boolean;
}

interface MatchingProps {
	isMobile?: boolean;
}

export interface PostContent {
	title: string;
	writerName: string;
	writerEmail: string;
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

interface PostData {
	content: PostContent[];
	page: number;
	size: number;
	totalElements: number;
	totalPages: number;
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
	const [selectType, setSelectType] = useState("");
	const [postData, setPostData] = useState<PostContent[]>();
	const [quest, setQuest] = useState("");
	const [lv, setLv] = useState("");
	const [region, setRegion] = useState("ASIA");
	const scrollRef = useRef<HTMLDivElement>(null);
	const { email } = userStore();
	const { data, isLoading, hasNextPage } = useMainPostObserve(scrollRef);
	useEffect(() => {
		const pageData = data?.pages[0] as unknown as PostData;
		if (pageData?.content) {
			const newPosts = pageData.content;
			setPostData((prev) => (prev ? [...prev, ...newPosts] : newPosts));
		}
		console.log(isLoading);
	}, [data]);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const handleSelectType = (type: string) => {
		setSelectType((prevType) => (prevType === type ? "" : type));
	};

	return (
		<>
			{!isMobile ? (
				<>
					<MatchingMenu
						openModal={openModal}
						quest={quest}
						setQuest={setQuest}
						lv={lv}
						setLv={setLv}
						region={region}
						setRegion={setRegion}
					/>
					<MatchingHeader
						selectType={selectType}
						handleSelectType={handleSelectType}
					/>
					<PostList
						postData={postData}
						hasNextPage={hasNextPage}
						isLoading={isLoading}
						scrollRef={scrollRef}
						selectType={selectType}
						email={email}
					/>
					{isModalOpen && <Modal onClose={closeModal} type="write" />}
				</>
			) : (
				<MobileContainer>
					<MobileFilterContainer
						isMobile={isMobile}
						quest={quest}
						setQuest={setQuest}
						lv={lv}
						setLv={setLv}
						region={region}
						setRegion={setRegion}
					/>
					<PostList
						postData={postData}
						hasNextPage={hasNextPage}
						isLoading={isLoading}
						scrollRef={scrollRef}
						selectType={selectType}
						email={email}
					/>
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
