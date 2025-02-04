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
} from "./styles";
import { Radio, RadioGroup } from "../radio";
import { useState } from "react";
import ReportAttackButton from "../radio/ReportAttackButton";
import { FieldValues, useForm } from "react-hook-form";
import AddPostModalPC from "./modalPc/index";
import AddPostModalMobile from "@/features/matching/mobile/components/modalMobile/index";
import { addPostSignIn } from "@/fetch/Main/addPostList/addPostList";
import { loadingToast } from "@/utils/customToast/customToast";
import { loadingToastType } from "@/utils/customToast/customToast";
import useLoginStateStore from "@/stores/loginStateStore";

interface ModalProps {
	onClose: () => void;
	type: "report" | "write";
	isMobile?: boolean;
}

export default function Modal({ onClose, type, isMobile = false }: ModalProps) {
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
				</ModalHeader>
				<ModalContent type={type} isMobile={isMobile}>
					{type === "write" ? (
						<WriteModal onClose={onClose} isMobile={isMobile} />
					) : (
						<ReportModal />
					)}
				</ModalContent>
			</ModalContainer>
		</ModalBackground>
	);
}

// 신고 모달
function ReportModal() {
	// 데이터를 바로 submitHandler에 전달하기 위해  0,1,2... -> 상업적/홍보성, 불법정보, 개인정보누출... 로 변경
	const [value, setValue] = useState("상업적/홍보성");
	const [image, setImage] = useState<File[]>([]);
	return (
		<>
			<form action="#" onSubmit={(e) => reportSubmitHandler(e, value)}>
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
				<ReportInput placeholder="기타사항 입력" />
				{/* 이미지 첨부 버튼 추가 */}
				<ReportAttackButton image={image} setImage={setImage} />
				<ReportButton>신고하기</ReportButton>
			</form>
		</>
	);
}

// 글 작성/수정 모달
function WriteModal({
	onClose,
	isMobile = false,
}: {
	onClose: () => void;
	isMobile?: boolean;
}) {
	const [quest, setQuest] = useState("");
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

async function reportSubmitHandler(
	e: React.FormEvent<HTMLFormElement>,
	value: string,
) {
	e.preventDefault();
	// id 추가되면 신고자 , 신고받은 대상 id를 함게 넘김
	// const fetchResult = await report(value, image);
	// if (!fetchResult) alert("신고 진행중 문제가 발생했습니다.");
}

async function postHandler(
	data: FieldValues,
	quest: string,
	time: string,
	loadingToast: loadingToastType,
	onClose: () => void,
	isLogin: boolean,
	setIsLogin: (value: boolean) => void,
) {
	await loadingToast(
		addPostSignIn(data, quest, time, isLogin, setIsLogin),
		"등록 중입니다",
		"등록 완료!",
		"등록에 실패했습니다.",
	)
		.then((response) => {
			if (response.ok) {
				onClose();
			}
		})
		.catch((error) => {
			const responseCode = error.status;
			// 코드에 따른 예외처리
		});
}
