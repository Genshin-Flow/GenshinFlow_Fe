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
	MenuContainer,
	MenuItem,
	MobileUserName,
	InfoContainer,
	Info,
	InfoWrapper,
	MobileMoreOptions,
	MobileMessageText,
} from "./styles";
import Modal from "../Modal";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

// 퀘스트 종류 이미지
export const questImage = {
	domain: "/svgs/quests/domain.svg",
	event: "/svgs/quests/event.svg",
	explore: "/svgs/quests/explore.svg",
	gather: "/svgs/quests/gather.svg",
	mission: "/svgs/quests/mission.svg",
	mob: "/svgs/quests/mob.svg",
};

interface MatchingPostItemProps {
	selected?: string;
	isMobile?: boolean;
}

export default function MatchingPostItem({
	selected,
	isMobile = false,
}: MatchingPostItemProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const openModal = () => {
		setIsModalOpen(true);
		setIsMenuOpen(false);
	};
	const closeModal = () => setIsModalOpen(false);
	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);

	useOutsideClick(menuRef, closeMenu);

	return (
		<>
			{!isMobile ? (
				<ItemContainer>
					<UserName selected={selected === "userName"}>
						<ProfileImage />
						<UserInfo>
							<Text>유저명</Text>
							<UserIdButton>UID 80000000</UserIdButton>
						</UserInfo>
					</UserName>
					<QuestType selected={selected === "questType"}>
						<QuestIconWrapper>
							<QuestIcon />
							<CenteredImage src={questImage.domain} alt="Quest Type" />
						</QuestIconWrapper>
						<Text>비경</Text>
					</QuestType>
					<WorldLevel selected={selected === "worldLevel"}>
						<Text>7</Text>
					</WorldLevel>
					<Message selected={selected === "message"}>
						<MessageText>
							맵 밀어주실 착한 분 구해요.한 5판 할 것 같아요.
							가나다라마바사아자차카타파하
						</MessageText>
					</Message>
					<TimeAgo selected={selected === "timeAgo"}>
						<Text color="gray02">1분 전</Text>
					</TimeAgo>
					<MoreOptions>
						<MoreOptionsButton type="moreOption" onClick={openMenu} />
						{isMenuOpen && (
							<MenuContainer ref={menuRef}>
								<MenuItem onClick={closeMenu}>종료</MenuItem>
								<MenuItem onClick={closeMenu}>삭제</MenuItem>
								<MenuItem onClick={openModal}>수정</MenuItem>
								<MenuItem onClick={closeMenu}>끌올</MenuItem>
							</MenuContainer>
						)}
					</MoreOptions>
					{isModalOpen && <Modal onClose={closeModal} type="write" />}
				</ItemContainer>
			) : (
				<ItemContainer isMobile={isMobile}>
					<MobileUserName>
						<ProfileImage />
						<UserInfo>
							<Text>유저명</Text>
							<UserIdButton>UID 80000000</UserIdButton>
						</UserInfo>
					</MobileUserName>
					<MobileMessageText>
						맵 밀어주실 착한 분 구해요.한 5판 할 것 같아요.
						가나다라마바사아자차카타파하
					</MobileMessageText>
					<InfoContainer>
						<InfoWrapper>
							<Info>
								<CenteredImage src={questImage.domain} alt="Quest Type" isMobile={isMobile} />
								퀘스트
							</Info>
							<Info>월드레벨 7</Info>
							<Info>1분전</Info>
						</InfoWrapper>
						<MobileMoreOptions>
							<MoreOptionsButton
								type="moreOption"
								isMobile={isMobile}
								onClick={openMenu}
							/>
							{isMenuOpen && (
								<MenuContainer ref={menuRef} isMobile={isMobile}>
									<MenuItem onClick={closeMenu}>종료</MenuItem>
									<MenuItem onClick={closeMenu}>삭제</MenuItem>
									<MenuItem onClick={openModal}>수정</MenuItem>
									<MenuItem onClick={closeMenu}>끌올</MenuItem>
								</MenuContainer>
							)}
						</MobileMoreOptions>
					</InfoContainer>
				</ItemContainer>
			)}
		</>
	);
}
