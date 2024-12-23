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
	UserInfo,
	InputContainer,
	TextInput,
	QuestInfo,
	UserQuestContainer,
	Content,
	ContentInput,
	Options,
	PasswordInput,
	WarningText,
	Btns,
	Button,
	FlexWrapper,
	MobileText,
	InputWrapper,
	MobileBtns,
} from "./styles";
import { Radio, RadioGroup } from "../Radio";
import { useState } from "react";
import Dropdown from "../Dropdown";
import ReportAttackButton from "../Radio/ReportAttackButton";
import { report } from "@/fetch/report/report";

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

	const questOptions = [
		{ value: "일반비경", icon: "/svgs/quests/domain.svg" },
		{ value: "이벤트 퀘스트", icon: "/svgs/quests/event.svg" },
		{ value: "영역 토벌", icon: "/svgs/quests/mob.svg" },
		{ value: "일일 임무", icon: "/svgs/quests/mission.svg" },
		{ value: "맵 탐사", icon: "/svgs/quests/explore.svg" },
		{ value: "채집", icon: "/svgs/quests/gather.svg" },
	];

	const timeOptions = [
		{ value: "30분" },
		{ value: "1시간" },
		{ value: "1시간 30분" },
		{ value: "2시간" },
	];

	return (
		<>
			{!isMobile ? (
				<>
					<UserQuestContainer>
						<UserInfo>
							<p>유저 정보</p>
							<InputContainer>
								UID
								<TextInput placeholder="800000000" />
							</InputContainer>
							<InputContainer>
								닉네임
								<TextInput placeholder="여행자" />
							</InputContainer>
							<InputContainer>
								월드레벨
								<TextInput placeholder="9" />
							</InputContainer>
						</UserInfo>
						<QuestInfo>
							<p>퀘스트 정보</p>
							<Dropdown
								placeholder="퀘스트 종류"
								value={quest}
								setValue={setQuest}
								options={questOptions}
							/>
						</QuestInfo>
					</UserQuestContainer>
					<Content>
						<p>내용</p>
						<ContentInput placeholder="내용을 입력해주세요" />
					</Content>
					<Options>
						<p>설정</p>
						<div>
							<InputContainer>
								자동 완료 시간
								<Dropdown
									value={time}
									setValue={setTime}
									options={timeOptions}
								/>
							</InputContainer>
							<InputContainer>
								비밀번호
								<PasswordInput
									type="password"
									placeholder="4자리 숫자+특수문자로 설정해주세요."
								/>
							</InputContainer>
						</div>
						<WarningText>
							설정한 시간이 지나면 자동으로 도움을 받은 것으로 처리 됩니다.
						</WarningText>
					</Options>
					<Btns>
						<WarningText>
							상대방을 비방하거나 UID 도용, 악용할 경우 차단당할 수 있습니다.
						</WarningText>
						<div>
							<Button type="cancel" onClick={onClose}>
								취소
							</Button>
							<Button type="submit" onClick={onClose}>
								작성
							</Button>
						</div>
					</Btns>
				</>
			) : (
				<>
					<UserQuestContainer isMobile={isMobile}>
						<UserInfo isMobile={isMobile}>
							<p>유저 정보</p>
							<InputContainer isMobile={isMobile}>
								<div>UID</div>
								<TextInput placeholder="800000000" isMobile={isMobile} />
							</InputContainer>
							<InputContainer isMobile={isMobile}>
								<div>닉네임</div>
								<TextInput placeholder="여행자" isMobile={isMobile} />
							</InputContainer>
							<InputContainer isMobile={isMobile}>
								<div>월드레벨</div>
								<TextInput placeholder="9" isMobile={isMobile} />
							</InputContainer>
						</UserInfo>
						<QuestInfo isMobile={isMobile}>
							<p>퀘스트 정보</p>
							<Dropdown
								placeholder="퀘스트 종류"
								value={quest}
								setValue={setQuest}
								options={questOptions}
							/>
						</QuestInfo>
					</UserQuestContainer>
					<Content isMobile={isMobile}>
						<p>내용</p>
						<ContentInput
							placeholder="맵 밀어주실 착한 분 구해요. 한 5판 할 것 같아요."
							isMobile={isMobile}
						/>
					</Content>
					<Options isMobile={isMobile}>
						<p>설정</p>
						<FlexWrapper>
							<MobileText>자동완료시간</MobileText>
							<InputWrapper>
								<Dropdown
									value={time}
									setValue={setTime}
									options={timeOptions}
									isMobile2={isMobile}
								/>
							</InputWrapper>
						</FlexWrapper>
						<WarningText>
							설정한 시간이 지나면 자동으로 도움을 받은 것으로 처리 됩니다.
						</WarningText>
						<InputContainer isMobile2={isMobile}>
							<div>비밀번호</div>
							<PasswordInput
								type="password"
								placeholder="4자리 숫자+특수문자로 설정해주세요."
								isMobile={isMobile}
							/>
						</InputContainer>
						<WarningText>
							상대방을 비방하거나 UID 도용, 악용할 경우 차단당할 수 있습니다.
						</WarningText>
					</Options>
					<MobileBtns>
						<Button type="cancel" onClick={onClose} isMobile={isMobile}>
							취소
						</Button>
						<Button type="submit" onClick={onClose} isMobile={isMobile}>
							작성
						</Button>
					</MobileBtns>
				</>
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
