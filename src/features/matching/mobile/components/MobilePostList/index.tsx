import { copyClipBoard } from "@/utils/clipBoard/clipBoard";
import {
	MobilePostListItem,
	MobilePostListUserInfoContainer,
	MobilePostUserContent,
	MobileUserProfile,
	MobilePostListContent,
	MobileClipBoardContainer,
	CategoryContainer,
	QuestType,
	WorldLevel,
	CreatePostTime,
	InfoBlockContainer,
} from "./style";
import { PostContent, refetchType } from "@/features/matching/components/Tab";
import { filterQuest } from "@/utils/filterQuest/fiilterQuest";
import {
	MenuContainer,
	MenuItem,
	MoreOptions,
	MoreOptionsButton,
} from "@/features/matching/components/MatchingPostItem/styles";
import useOutsideClick from "@/hooks/useOutsideClick";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { confirmType } from "@/features/matching/components/MatchingPostItem";
import Modal from "@/features/matching/components/Modal";
import ConfirmModal from "@/features/matching/components/confirm";
import userStore from "@/stores/userStore";
import dayjs from "dayjs";
import useLoginStateStore from "@/stores/loginStateStore";
type isConfirmModalOpenType = {
	confirmState: boolean;
	type: confirmType;
};

type propsType = {
	postData: PostContent;
	refetch: refetchType;
	isMobile: boolean;
};

export default function MobilePostList({
	postData,
	refetch,
	isMobile,
}: propsType) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditPost, setEditPost] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isConfirmModalOpen, setConfirmModal] =
		useState<isConfirmModalOpenType>({
			confirmState: false,
			type: "",
		});
	const { email } = userStore();
	const { isLogin } = useLoginStateStore();
	const menuRef = useRef<HTMLDivElement>(null);
	const moreButtonContainerRef = useRef<HTMLDivElement>(null);
	const type = postData.writerEmail !== email && isLogin ? "report" : "write";

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

	const handleMoreOptionsClick = () => {
		console.log("werwere");
		if (type === "write") {
			setIsMenuOpen(!isMenuOpen);
		} else {
			openModal();
		}
	};
	useOutsideClick(menuRef, closeMenu, moreButtonContainerRef);
	const createdAt = new Date(postData.createdAt);
	const now = new Date();
	const timeDifference = now.getTime() - createdAt.getTime();
	let minutesAgo = Math.floor(timeDifference / (1000 * 60));
	let timeAgo = "";
	if (minutesAgo > 60) {
		timeAgo = dayjs(createdAt).format("MM월-DD일");
	}
	return (
		<>
			<MobilePostListItem>
				<MobilePostListUserInfoContainer>
					<MobileUserProfile>
						<img src={postData.writerProfileImg} alt="profile" />
					</MobileUserProfile>
					<MobilePostUserContent>
						<h3>{postData.writerName}</h3>
						<MobileClipBoardContainer onClick={copyClipBoard}>
							<img src="/svgs/clarity_paste-line.svg" alt="copy" />
							<span>{postData.uid}</span>
						</MobileClipBoardContainer>
					</MobilePostUserContent>
				</MobilePostListUserInfoContainer>
				<MobilePostListContent>{postData.content}</MobilePostListContent>
				<InfoBlockContainer>
					<CategoryContainer>
						<QuestType>
							<img
								src={filterQuest(postData.questCategory).questImage}
								alt={"퀘스트 이미지"}
							/>
							퀘스트
						</QuestType>
						<WorldLevel>월드레벨 {postData.wordLevel}</WorldLevel>
						<CreatePostTime>
							{minutesAgo > 60 ? timeAgo : minutesAgo + "분 전"}
						</CreatePostTime>
					</CategoryContainer>
					<MoreOptions ref={moreButtonContainerRef}>
						<MoreOptionsButton
							type={type === "write" || !isLogin ? "moreOption" : "report"}
							isMobile={isMobile}
							onClick={handleMoreOptionsClick}
							className="moreOption"
						/>
						{isMenuOpen && type === "write" && (
							<MenuContainer ref={menuRef} isMobile={isMobile}>
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
				</InfoBlockContainer>
			</MobilePostListItem>

			{isModalOpen && (
				<Modal
					onClose={closeModal}
					type={type}
					isMobile={isMobile}
					postContent={type === "report" ? postData : undefined}
					refetch={refetch}
				/>
			)}
			{isEditPost && (
				<Modal
					onClose={closeEditPost}
					type={type}
					isMobile={isMobile}
					postContent={postData}
					refetch={refetch}
				/>
			)}

			{isConfirmModalOpen.confirmState && (
				<ConfirmModal
					postInfo={postData}
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
