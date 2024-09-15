"use client";
import {
	ItemContainer,
	UserName,
	ProfileImage,
	UserInfo,
	UserIdButton,
	QuestType,
	QuestIconWrapper,
	QuestIcon,
	CenteredImage,
	WorldLevel,
	Message,
	MessageText,
	TimeAgo,
	MoreOptions,
	MoreOptionsButton,
	Text,
} from "./styles"
import Modal from "../Modal";
import { useState } from "react";

// 퀘스트 종류 이미지
export const questImage = {
	domain: "/images/quests/domain.png",
	event: "/images/quests/event.png",
	explore: "/images/quests/explore.png",
	gather: "/images/quests/gather.png",
	mission: "/images/quests/mission.png",
	mob: "/images/quests/mob.png",
};

export default function MatchingPostItem() {
	// 모달 상태 
	const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

	return (
		<ItemContainer>
			<UserName>
				<ProfileImage />
				<UserInfo>
					<Text>유저명</Text>
					<UserIdButton>UID 80000000</UserIdButton>
				</UserInfo>
			</UserName>
			<QuestType>
				<QuestIconWrapper>
					<QuestIcon />
					<CenteredImage src={questImage.domain} alt="Quest Type" />
				</QuestIconWrapper>
				<Text>비경</Text>
			</QuestType>
			<WorldLevel>
				<Text>7</Text>
			</WorldLevel>
			<Message>
				<MessageText>
					맵 밀어주실 착한 분 구해요.한 5판 할 것 같아요.
					가나다라마바사아자차카타파하
				</MessageText>
			</Message>
			<TimeAgo>
				<Text color="gray02">1분 전</Text>
			</TimeAgo>
			<MoreOptions>
				<MoreOptionsButton type="report" onClick={openModal}/>
			</MoreOptions>
			{isModalOpen && <Modal onClose={closeModal} type="report" />}
		</ItemContainer>
	);
}
