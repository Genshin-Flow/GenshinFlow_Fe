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
import { PostContent } from "@/features/matching/components/Tab";
import dayjs from "dayjs";
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
	type: "report" | "write";
	item: PostContent;
	selected?: string;
	isMobile?: boolean;
	email: string;
	quest: string;
	questImage: string;
}

export default function MatchingPostItem({
	type,
	selected,
	item,
	isMobile = false,
	email,
	quest,
	questImage,
}: MatchingPostItemProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuRef = useRef<HTMLDivElement>(null);
	const openModal = () => {
		setIsModalOpen(true);
		setIsMenuOpen(false);
	};

	const closeModal = () => setIsModalOpen(false);
	const closeMenu = () => setIsMenuOpen(false);

	const handleMoreOptionsClick = () => {
		if (type === "write") {
			setIsMenuOpen(!isMenuOpen);
		} else {
			openModal();
		}
	};

	useOutsideClick(menuRef, closeMenu);

	const createdAt = new Date(item.createdAt);
	const now = new Date();
	const timeDifference = now.getTime() - createdAt.getTime();
	let minutesAgo = Math.floor(timeDifference / (1000 * 60));
	let timeAgo = "";
	if (minutesAgo > 60) {
		timeAgo = dayjs(createdAt).format("YYYY-MM-DD HH:mm");
	}

	return (
		<>
			{!isMobile ? (
				<ItemContainer>
					<UserName selected={selected === "userName"}>
						<ProfileImage />
						<UserInfo>
							<Text>{item.writerName}</Text>
							<UserIdButton>{item.uid}</UserIdButton>
						</UserInfo>
					</UserName>
					<QuestType selected={selected === "questType"}>
						<QuestIconWrapper>
							<QuestIcon />
							<CenteredImage src={questImage} alt="Quest Type" />
						</QuestIconWrapper>
						<Text>{quest}</Text>
					</QuestType>
					<WorldLevel selected={selected === "worldLevel"}>
						<Text>{item.wordLevel}</Text>
					</WorldLevel>
					<Message selected={selected === "message"}>
						<MessageText>{item.title}</MessageText>
					</Message>
					<TimeAgo selected={selected === "timeAgo"}>
						<Text color="gray02">
							{minutesAgo > 60 ? timeAgo : minutesAgo + "분 전"}
						</Text>
					</TimeAgo>
					<MoreOptions>
						<MoreOptionsButton
							type={type === "write" ? "moreOption" : "report"}
							onClick={handleMoreOptionsClick}
							className="moreOption"
						/>
						{isMenuOpen && type === "write" && (
							<MenuContainer ref={menuRef} isMobile={isMobile}>
								<MenuItem onClick={closeMenu}>종료</MenuItem>
								<MenuItem onClick={closeMenu}>삭제</MenuItem>
								<MenuItem onClick={openModal}>수정</MenuItem>
								<MenuItem onClick={closeMenu}>끌올</MenuItem>
							</MenuContainer>
						)}
					</MoreOptions>
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
								<CenteredImage
									src={questImage}
									alt="Quest Type"
									isMobile={isMobile}
								/>
								퀘스트
							</Info>
							<Info>월드레벨 7</Info>
							<Info>1분전</Info>
						</InfoWrapper>
						<MobileMoreOptions>
							<MoreOptionsButton
								type={email === item.writerEmail ? "moreOption" : "report"}
								isMobile={isMobile}
								onClick={handleMoreOptionsClick}
							/>
							{isMenuOpen && type === "write" && (
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
			{isModalOpen && (
				<Modal onClose={closeModal} type={type} isMobile={isMobile} />
			)}
		</>
	);
}
