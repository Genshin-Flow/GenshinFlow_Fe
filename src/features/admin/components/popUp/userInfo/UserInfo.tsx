import { styled } from "@/../styled-system/jsx";
import { Drag } from "@/features/admin/dragLogic/drag";
import { useEffect, useRef } from "react";
import {
	setBoxPosition,
	positionReset,
} from "@/features/admin/components/reportManagement/ReportList";
import adminStore from "@/stores/adminPage/adminPageStore";
import { boxOption } from "@/features/admin/components/reportManagement/ReportList";

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

const UserInfoContainer = styled("div", {
	base: {
		minWidth: "350px",
		position: "absolute",
		left: "30%",
		top: "50%",
		transform: "translate(-50%,-50%)",
		padding: "20px",
		border: "1px solid #D3D3D3",
		borderRadius: "16px",
		display: "inline-flex",
		flexDirection: "column",
		backgroundColor: "#fff",
		textStyle: "md",
		cursor: "move",

		"& > div": {
			marginBottom: "19px",
		},
	},

	variants: {
		boxOption: {
			imgBox: {},
			reporterBox: {
				left: "52%",
			},
			reportTargetBox: {
				left: "30%",
			},
		},
	},
});

const InfoTitle = styled("p", {
	base: {
		textStyle: "sm",
		marginBottom: "12px",
	},
});

const ResetPositionButton = styled("button", {
	base: {
		position: "absolute",
		top: "7%",
		right: "15.7%",
		cursor: "pointer",
		textStyle: "sm",
	},
});

const CancelButton = styled("button", {
	base: {
		position: "absolute",
		top: "5%",
		right: "5.7%",
		cursor: "pointer",
		fontSize: "20px",
	},
});

const UserInfoTitle = styled("p", {
	base: {
		color: "gray.04",
	},
});

const UserReportContainer = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		columnGap: "20px",
		marginBottom: "19px",
	},
});

const UserInfoItem = styled("div", {
	base: {
		display: "inline-flex",
		alignItems: "center",
		borderBottom: "1px solid {colors.gray.04}",

		"&:last-of-type": {
			marginBottom: "0px",
		},
	},
});

const UserInfoBody = styled("span", {
	base: {
		marginLeft: "25px",
	},
});
