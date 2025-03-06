"use client";
import {
	ItemContainer,
	UserName,
	ProfileImageContainer,
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
	ProfileImg,
} from "./styles";
import Modal from "../Modal";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { PostContent } from "@/features/matching/components/Tab";
import dayjs from "dayjs";
import { copyClipBoard } from "@/utils/clipBoard/clipBoard";
import ConfirmModal from "@/features/matching/components/confirm";
import useLoginStateStore from "@/stores/loginStateStore";
import { refetchType } from "@/features/matching/components/Tab";
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
	index: number;
	totalPost: number;
	refetch: refetchType;
}

export type confirmType = "complete" | "delete" | "edit" | "postUp" | "";

type isConfirmModalOpenType = {
	confirmState: boolean;
	type: confirmType;
};

export default function MatchingPostItem({
	type,
	selected,
	item,
	isMobile = false,
	quest,
	questImage,
	index,
	totalPost,
	refetch,
}: MatchingPostItemProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditPost, setEditPost] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [modalPosition, setModalPosition] = useState<"up" | "down">("down");
	const [isConfirmModalOpen, setConfirmModal] =
		useState<isConfirmModalOpenType>({
			confirmState: false,
			type: "",
		});

	const menuRef = useRef<HTMLDivElement>(null);
	const moreButtonContainerRef = useRef<HTMLDivElement>(null);

	const { isLogin } = useLoginStateStore();

	const openModal = () => {
		setIsModalOpen(true);
		setIsMenuOpen(false);
	};

	const closeModal = () => setIsModalOpen(false);
	const closeMenu = () => setIsMenuOpen(false);

	const openEditPost = () => {
		setEditPost(true);
		setIsMenuOpen(false);
	};
	const closeEditPost = () => setEditPost(false);

	const selectModalFn = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
		selectModalType(event, setConfirmModal, setIsMenuOpen);

	const confirmModalClose = () => {
		setConfirmModal({
			confirmState: false,
			type: "complete",
		});
	};

	const handleMoreOptionsClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		totalPost: number,
	) => {
		const target = event.target as HTMLElement;
		const closest = target.closest("div[data-postnum]") as HTMLDivElement;
		const targetPostNum = closest.dataset.postnum as unknown as number;
		if (totalPost - 4 < targetPostNum) {
			setModalPosition("up");
		} else {
			setModalPosition("down");
		}

		if (type === "write") {
			setIsMenuOpen(!isMenuOpen);
		} else {
			openModal();
		}
	};

	useOutsideClick(menuRef, closeMenu, moreButtonContainerRef);

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
			<ItemContainer data-postnum={index + 1}>
				<UserName selected={selected === "userName"}>
					<ProfileImageContainer>
						<ProfileImg src={item.writerProfileImg} alt="프로필" />
					</ProfileImageContainer>
					<UserInfo>
						<Text className="pointerNone">{item.writerName}</Text>
						<UserIdButton onClick={copyClipBoard}>
							<img src="/svgs/clarity_paste-line.svg" alt="copy" />
							<span>{item.uid}</span>
						</UserIdButton>
					</UserInfo>
				</UserName>
				<QuestType selected={selected === "questType"}>
					<QuestIconWrapper>
						<QuestIcon />
						<CenteredImage src={questImage} alt="Quest Type" />
					</QuestIconWrapper>
					<Text questVariants={true}>{quest}</Text>
				</QuestType>
				<WorldLevel selected={selected === "worldLevel"}>
					<Text className="textCenter">{item.wordLevel}</Text>
				</WorldLevel>
				<Message selected={selected === "message"}>
					<MessageText>{item.content}</MessageText>
				</Message>
				<TimeAgo selected={selected === "timeAgo"}>
					<Text color="gray02">
						{minutesAgo > 60 ? timeAgo : minutesAgo + "분 전"}
					</Text>
				</TimeAgo>
				<MoreOptions ref={moreButtonContainerRef}>
					<MoreOptionsButton
						type={type === "write" || !isLogin ? "moreOption" : "report"}
						onClick={(event) => handleMoreOptionsClick(event, totalPost)}
						className="moreOption"
					/>
					{isMenuOpen && type === "write" && (
						<MenuContainer
							ref={menuRef}
							isMobile={isMobile}
							position={modalPosition}
						>
							<MenuItem data-settext={"complete"} onClick={selectModalFn}>
								완료
							</MenuItem>
							<MenuItem data-settext={"delete"} onClick={selectModalFn}>
								삭제
							</MenuItem>
							<MenuItem data-settext={"edit"} onClick={openEditPost}>
								수정
							</MenuItem>
							<MenuItem data-settext={"postUp"} onClick={selectModalFn}>
								끌올
							</MenuItem>
						</MenuContainer>
					)}
				</MoreOptions>
			</ItemContainer>

			{isModalOpen && (
				<Modal
					onClose={closeModal}
					type={type}
					isMobile={isMobile}
					postContent={type === "report" ? item : undefined}
					refetch={refetch}
				/>
			)}
			{isEditPost && (
				<Modal
					onClose={closeEditPost}
					type={type}
					isMobile={isMobile}
					postContent={item}
					refetch={refetch}
				/>
			)}

			{isConfirmModalOpen.confirmState && (
				<ConfirmModal
					postInfo={item}
					type={isConfirmModalOpen.type}
					modalClose={confirmModalClose}
					refetch={refetch}
				/>
			)}
		</>
	);
}

function selectModalType(
	event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	setType: Dispatch<SetStateAction<isConfirmModalOpenType>>,
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>,
) {
	const target = event.target as HTMLElement;
	const dataValue = target.dataset.settext as unknown as confirmType;
	setType({
		confirmState: true,
		type: dataValue ?? "",
	});
	setIsMenuOpen(false);
}
