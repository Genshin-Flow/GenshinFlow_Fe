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
import { Radio, RadioGroup } from "../Radio";
import { useState } from "react";

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
					{type === "report" ? <ReportModal /> : <WriteModal />}
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
function WriteModal() {
	return <></>;
}
