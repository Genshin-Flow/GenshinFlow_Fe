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
} from "./styles";
import { Radio, RadioGroup } from "../Radio";
import { useState } from "react";
import Dropdown from "../Dropdown";

interface ModalProps {
	onClose: () => void;
	type: "report" | "write";
}

export default function Modal({ onClose, type }: ModalProps) {
	return (
		<ModalBackground onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<ModalHeader>
					{type === "report" ? "신고" : "글 작성하고 도와줄 사람 구하기"}
					<CloseButton onClick={onClose} />
				</ModalHeader>
				<ModalContent type={type}>
					{type === "report" ? <ReportModal /> : <WriteModal onClose={onClose}/>}
				</ModalContent>
			</ModalContainer>
		</ModalBackground>
	);
}

// 신고 모달
function ReportModal() {
	const [value, setValue] = useState("0");
	return (
		<>
			<RadioGroup value={value} onChange={setValue}>
				<RadioGroupContainer>
					<RadioColumn>
						<Radio value="0">상업적/홍보성</Radio>
						<Radio value="1">불법정보</Radio>
						<Radio value="2">개인정보누출</Radio>
						<Radio value="3">기타</Radio>
					</RadioColumn>
					<RadioColumn right>
						<Radio value="4">음란/선정성</Radio>
						<Radio value="5">욕설/인신공격</Radio>
						<Radio value="6">권리침해</Radio>
					</RadioColumn>
				</RadioGroupContainer>
			</RadioGroup>
			<ReportInput placeholder="" />
			<ReportButton>신고하기</ReportButton>
		</>
	);
}

// 글 작성/수정 모달
function WriteModal({ onClose }: { onClose: () => void }) {
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
						<Dropdown value={time} setValue={setTime} options={timeOptions} />
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
					<Button type="cancel" onClick={onClose}>취소</Button>
					<Button type="submit" onClick={onClose}>작성</Button>
				</div>
			</Btns>
		</>
	);
}
