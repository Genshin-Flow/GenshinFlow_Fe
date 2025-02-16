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

import Modal from "../modal";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useMainPostObserve } from "@/hooks/useMainPostObserve";
import userStore from "@/stores/userStore";
import MatchingMenu from "@/features/matching/components/matchingMenu";
import MobileFilterContainer from "@/features/matching/mobile/components/mobileContainer";
import MatchingHeader from "@/features/matching/components/matchingHeader";
import PostList from "@/features/matching/components/postList";
import { OauthSignUpModal } from "@/features/loginSignUp/components/modalGroup/oauthSignUpModal";
import { useSession } from "next-auth/react";
import { oauthSignIn } from "@/fetch/Login/oauthSignIn/oauthSignIn";
import { loadingToast, warningToast } from "@/utils/customToast/customToast";
import MobileAboutModal from "@/components/Header/modal/mobileAboutModal";
import mobileAboutStore from "@/stores/mobileAboutStore";
import PcAbout from "@/features/matching/components/About";
import {
	InfiniteData,
	QueryObserverResult,
	RefetchOptions,
} from "@tanstack/react-query";

export type refetchType = (
	options?: RefetchOptions,
) => Promise<QueryObserverResult<InfiniteData<any, unknown>, Error>>;

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
	writerProfileImg: string;
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

export interface PostData {
	content: PostContent[];
	page: number;
	size: number;
	totalElements: number;
	totalPages: number;
}

export interface OauthSignUpModalProps {
	email: string;
	provider: string;
	onClose: () => void;
	loadingToast: (promise: Promise<any>) => Promise<Response>;
}

export type LoadingToastType = OauthSignUpModalProps["loadingToast"];

export default function Tab({ isMobile = false }: TabProps) {
	const [activeTab, setActiveTab] = useState(0);
	const renderContent = () => {
		switch (activeTab) {
			case 0:
				return <Matching isMobile={isMobile} />;
			case 1:
				return <>{isMobile ? <Event /> : <PcAbout />}</>;
			case 2:
		}
	};

	// 하이드레이션 에러 방지
	const [isClient, setIsClient] = useState(false);
	const [OauthUidModalState, setOauthUidModalState] = useState(false);
	const [OauthSignUpModalProps, setOauthSignUpModalProps] =
		useState<OauthSignUpModalProps>({
			email: "",
			provider: "",
			onClose: () => {},
			loadingToast: (promise: Promise<any>) => loadingToast(promise),
		});

	const OauthSignUpModalClose = async () => {
		await update({
			user: {
				email: session?.user.email,
				provider: session?.user.provider,
				status: 0,
				responseOk: false,
			},
		});
		setOauthUidModalState(false);
	};

	const { data: session, update } = useSession();

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		const oauthSignInFetch = async () => {
			// 회원가입 진행
			if (session?.user.status === 404) {
				setOauthSignUpModalProps({
					email: session.user.email,
					provider: session.user.provider,
					onClose: OauthSignUpModalClose,
					loadingToast: loadingToast,
				});
				setOauthUidModalState(true);
			}
		};

		// 세션 정보가 없는 경우 UID 입력 모달창 닫기
		if (session?.user.status === 0) {
			setOauthUidModalState(false);
		}
		// 이미 회원인경우 로그인 로직 실행하여 쿠키 등록
		if (session?.user.status === 200) {
			loadingToast(
				oauthSignIn(session.user.email, () => setOauthUidModalState(true)),
			)
				.then((response) => {
					switch (response.status) {
						case 404:
							setOauthUidModalState(true);
							break;
						case 403:
							throw new Error("이미 가입된 계정입니다");
						default:
							throw new Error("토큰을 받아오는데 실패했습니다.");
					}
				})
				.catch((error) => {
					warningToast(error.message);
				});
		}

		// 모든 정보가 들어오면 함수 실행
		if (
			session?.user.email &&
			session?.user.provider &&
			session?.user.status === 404
		) {
			oauthSignInFetch();
		}
	}, [update]);

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
			{OauthUidModalState && (
				<OauthSignUpModal
					onClose={OauthSignUpModalProps.onClose}
					email={OauthSignUpModalProps.email}
					provider={OauthSignUpModalProps.provider}
					loadingToast={OauthSignUpModalProps.loadingToast}
				/>
			)}
		</Container>
	);
}

function Matching({ isMobile = false }: MatchingProps) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectType, setSelectType] = useState("");
	const [postData, setPostData] = useState<PostContent[]>([]);
	const [quest, setQuest] = useState<string[]>([]);
	const [lv, setLv] = useState<string[]>([]);
	const [region, setRegion] = useState<string[]>([]);
	const { email } = userStore();
	const { aboutState, setAboutStore } = mobileAboutStore();
	const { data, isLoading, hasNextPage, refetch } = useMainPostObserve(
		scrollRef,
		region,
		quest,
		lv,
		setPostData,
	);

	useEffect(() => {
		if (data) {
			const contentArray = data.pages.map((items) => items.content);
			const flatArray = contentArray.flat();
			setPostData(flatArray);
		}
	}, [data]);

	const openModal = () => {
		setIsModalOpen(true);
		// 스크롤 2개가 생기는 현상 제거
		document.body.style.overflow = "hidden";
	};
	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = "auto";
	};
	const handleSelectType = (type: string) => {
		setSelectType((prevType) => (prevType === type ? "" : type));
	};
	return (
		<>
			{!isMobile ? (
				<>
					<MatchingMenu
						openModal={openModal}
						setQuest={setQuest}
						setLv={setLv}
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
						refetch={refetch}
					/>
					{isModalOpen && (
						<Modal onClose={closeModal} type="write" refetch={refetch} />
					)}
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
						refetch={refetch}
					/>
					<MobileWriteButton onClick={openModal} />
					{isModalOpen && (
						<Modal
							onClose={closeModal}
							type="write"
							isMobile={isMobile}
							refetch={refetch}
						/>
					)}
					{aboutState && (
						<MobileAboutModal setModalState={() => setAboutStore(false)} />
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
