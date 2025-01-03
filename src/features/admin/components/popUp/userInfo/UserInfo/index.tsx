import {
	boxOption,
	positionReset,
	setBoxPosition,
} from "@/features/admin/components/reportManagement/ReportList";
import { Drag } from "@/features/admin/dragLogic/drag";
import adminStore from "@/stores/adminPage/adminPageStore";
import { useEffect, useRef } from "react";
import {
	CancelButton,
	InfoTitle,
	ResetPositionButton,
	UserInfoBody,
	UserInfoContainer,
	UserInfoItem,
	UserInfoTitle,
	UserReportContainer,
} from "./style";

type propsType = {
	boxOption: boxOption;
	userInfo: {
		userId: string;
		writePost: string;
		reportCount: number;
		getReport: number;
		prevReport: string;
		prevDisciplinary: string;
	};
};

export default function UserInfo(props: propsType) {
	const userInfoRef = useRef(null);
	const { setReporterBoxState, setReportTargetBoxState } = adminStore();
	useEffect(() => {
		if (userInfoRef) {
			setBoxPosition(userInfoRef, props.boxOption);
			Drag(userInfoRef, props.boxOption);
		}
	}, [userInfoRef]);
	return (
		<UserInfoContainer ref={userInfoRef} boxOption={props.boxOption}>
			<InfoTitle>
				{props.boxOption === "reportTargetBox" ? "신고 대상" : "신고자"}
			</InfoTitle>
			<ResetPositionButton
				onClick={() => positionReset(userInfoRef, props.boxOption)}
			>
				위치 초기화
			</ResetPositionButton>
			<CancelButton
				className="exitButton"
				onClick={() =>
					closeHandler(
						props.boxOption,
						setReporterBoxState,
						setReportTargetBoxState,
					)
				}
			>
				x
			</CancelButton>
			<UserInfoItem>
				<UserInfoTitle>ID</UserInfoTitle>
				<UserInfoBody>{props.userInfo.userId}</UserInfoBody>
			</UserInfoItem>
			<UserInfoItem>
				<UserInfoTitle>글 게시 수</UserInfoTitle>
				<UserInfoBody>{props.userInfo.writePost}</UserInfoBody>
			</UserInfoItem>
			<UserReportContainer>
				<UserInfoItem>
					<UserInfoTitle>신고한 횟수</UserInfoTitle>
					<UserInfoBody>{props.userInfo.reportCount}</UserInfoBody>
				</UserInfoItem>
				<UserInfoItem>
					<UserInfoTitle>신고 당한 횟수</UserInfoTitle>
					<UserInfoBody>{props.userInfo.getReport}</UserInfoBody>
				</UserInfoItem>
			</UserReportContainer>
			<UserInfoItem>
				<UserInfoTitle>지난 신고 사유</UserInfoTitle>
				<UserInfoBody>
					{props.userInfo.prevReport ? props.userInfo.prevReport : ""}
				</UserInfoBody>
			</UserInfoItem>
			<UserInfoItem>
				<UserInfoTitle>지난 제재항목</UserInfoTitle>
				<UserInfoBody>
					{props.userInfo.prevDisciplinary
						? props.userInfo.prevDisciplinary
						: ""}
				</UserInfoBody>
			</UserInfoItem>
		</UserInfoContainer>
	);
}

function closeHandler(
	boxOption: string,
	setReporterBoxState: (boxState: boolean) => void,
	setReportTargetBoxState: (boxState: boolean) => void,
) {
	if (boxOption === "reportTargetBox") {
		setReportTargetBoxState(false);
	} else if (boxOption === "reporterBox") {
		setReporterBoxState(false);
	}
}
