import {
	CloseButton,
	ModalBackground,
	ModalContainer,
	ModalHeader,
	ModalContent,
	RadioGroupContainer,
	RadioColumn,
	ReportInput,
	ReportButton,
	MobileCloseButtonContainer,
} from "./styles";
import { Radio, RadioGroup } from "../Radio";
import { useState } from "react";
import ReportAttackButton from "../Radio/ReportAttackButton";
import { FieldValues, useForm } from "react-hook-form";
import AddPostModalPC from "./modalPc/index";
import AddPostModalMobile from "@/features/matching/mobile/components/modalMobile/index";
import { addPostSignIn } from "@/fetch/Main/post/addPostList/addPostList";
import { loadingToast } from "@/utils/customToast/customToast";
import { loadingToastType } from "@/utils/customToast/customToast";
import useLoginStateStore from "@/stores/loginStateStore";
import { PostContent } from "@/features/matching/components/Tab";
import { reportPost } from "@/fetch/report/report";
import { refetchType } from "@/features/matching/components/Tab";

interface ModalProps {
	onClose: () => void;
	type: "report" | "write";
	refetch: refetchType;
	isMobile?: boolean;
	postContent?: PostContent;
}

export default function Modal({
	onClose,
	type,
	refetch,
	isMobile = false,
	postContent,
}: ModalProps) {
	return (
		<ModalBackground onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()} isMobile={isMobile}>
				<ModalHeader isMobile={isMobile}>
					{type === "report"
						? "신고"
						: isMobile
							? "도움 요청"
							: "글 작성하고 도와줄 사람 구하기"}
					{!isMobile && <CloseButton onClick={onClose} />}
					{isMobile && (
						<MobileCloseButtonContainer onClick={onClose}>
							<img src="/svgs/arrow3.svg" alt="모달 닫기 버튼" />
						</MobileCloseButtonContainer>
					)}
				</ModalHeader>
				<ModalContent type={type} isMobile={isMobile}>
					{type === "write" ? (
						<WriteModal
							onClose={onClose}
							isMobile={isMobile}
							postContent={postContent}
							refetch={refetch}
						/>
					) : (
						<ReportModal postContent={postContent} />
					)}
				</ModalContent>
			</ModalContainer>
		</ModalBackground>
	);
}

// 신고 모달
function ReportModal({ postContent }: { postContent?: PostContent }) {
	// 데이터를 바로 submitHandler에 전달하기 위해  0,1,2... -> 상업적/홍보성, 불법정보, 개인정보누출... 로 변경
	const [value, setValue] = useState("상업적/홍보성");
	const [image, setImage] = useState<File[]>([]);
	const { setIsLogin } = useLoginStateStore();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm();
	const fileName = image.flatMap((item) => item.name);
	return (
		<>
			<form
				action="#"
				onSubmit={handleSubmit((data) =>
					loadingToast(
						reportPost(
							data.etc ? data.etc : value,
							fileName,
							data,
							postContent?.writerEmail,
							setIsLogin,
						),
						"포스트 신고 전송중",
						"포스트 신고 완료!",
						"포스트 신고 실패패",
					),
				)}
			>
				<RadioGroup value={value} onChange={setValue}>
					<RadioGroupContainer>
						<RadioColumn>
							<Radio value="상업적/홍보성">상업적/홍보성</Radio>
							<Radio value="불법정보">불법정보</Radio>
							<Radio value="개인정보누출">개인정보누출</Radio>
							<Radio value="기타">기타</Radio>
						</RadioColumn>
						<RadioColumn right>
							<Radio value="음란/선정성">음란/선정성</Radio>
							<Radio value="욕설/인신공격">욕설/인신공격</Radio>
							<Radio value="권리침해">권리침해</Radio>
						</RadioColumn>
					</RadioGroupContainer>
				</RadioGroup>
				{value === "기타" && (
					<ReportInput placeholder="기타사항 입력" {...register("etc")} />
				)}
				{/* 이미지 첨부 버튼 추가 */}
				<ReportAttackButton image={image} setImage={setImage} />
				<ReportButton disabled={isSubmitting}>신고하기</ReportButton>
			</form>
		</>
	);
}

// 글 작성/수정 모달
function WriteModal({
	onClose,
	isMobile = false,
	postContent,
	refetch,
}: {
	onClose: () => void;
	refetch: refetchType;
	isMobile?: boolean;
	postContent?: PostContent;
}) {
	const [quest, setQuest] = useState(postContent?.questCategory ?? "");
	const [time, setTime] = useState("1시간");
	const { isLogin, setIsLogin } = useLoginStateStore();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm();
	return (
		<>
			{!isMobile ? (
				<form
					action="#"
					method="post"
					onSubmit={handleSubmit((data) =>
						postHandler(
							data,
							quest,
							time,
							loadingToast,
							onClose,
							isLogin,
							setIsLogin,
							refetch,
							postContent,
						),
					)}
				>
					<AddPostModalPC
						onClose={onClose}
						setQuest={setQuest}
						quest={quest}
						time={time}
						setTime={setTime}
						register={register}
						errors={errors}
						isSubmitting={isSubmitting}
						postContent={postContent ?? ""}
					/>
				</form>
			) : (
				<form
					action="#"
					method="post"
					onSubmit={handleSubmit((data) =>
						postHandler(
							data,
							quest,
							time,
							loadingToast,
							onClose,
							isLogin,
							setIsLogin,
							refetch,
							postContent,
						),
					)}
				>
					<AddPostModalMobile
						isMobile={isMobile}
						onClose={onClose}
						setQuest={setQuest}
						quest={quest}
						time={time}
						setTime={setTime}
						register={register}
						errors={errors}
						isSubmitting={isSubmitting}
					/>
				</form>
			)}
		</>
	);
}

async function postHandler(
	data: FieldValues,
	quest: string,
	time: string,
	loadingToast: loadingToastType,
	onClose: () => void,
	isLogin: boolean,
	setIsLogin: (value: boolean) => void,
	refetch: refetchType,
	postContent?: PostContent,
) {
	await loadingToast(
		addPostSignIn(data, quest, time, isLogin, setIsLogin, postContent),
		"등록 중입니다",
		"등록 완료!",
		"등록에 실패했습니다.",
	)
		.then(() => {
			refetch();
			onClose();
		})
		.catch((error) => {
			const responseCode = error.status;
			// 코드에 따른 예외처리
		});
}
