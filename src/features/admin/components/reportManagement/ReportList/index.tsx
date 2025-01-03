import React, { MutableRefObject, useState } from "react";
import { reportUserType } from "@/features/admin/components/reportManagement/ReportManagement";
import { nanoid } from "nanoid";
import EvidencePhoto from "@/features/admin/components/popUp/evidencePhoto/EvidencePhoto/EvidencePhoto";
import ImageBox from "@/features/admin/components/popUp/evidencePhoto/ImageBox/ImageBox";
import adminStore from "@/stores/adminPage/adminPageStore";
import DisciplinaryItems from "@/features/admin/components/popUp/disciplinaryItems/DisciplinaryItems/index.ts";
import ReportTarget from "@/features/admin/components/popUp/userInfo/ReportTarget";
import Reporter from "@/features/admin/components/popUp/userInfo/reporter";
import UserInfo from "@/features/admin/components/popUp/userInfo/UserInfo";
import { TableItemContainer, TableItem, LastItemBlock } from "./style";
type propsType = {
	reportUserData: reportUserType[];
	observerRef: MutableRefObject<null>;
	onLoading: boolean;
};

export type boxOption = "imgBox" | "reportTargetBox" | "reporterBox";

export default function ReportList(props: propsType) {
	const { imageBoxState, reporterBoxState, reportTargetBoxState } =
		adminStore();
	const [selectPhoto, setPhoto] = useState("");

	return (
		<TableItemContainer>
			{props.reportUserData.map((item) => (
				<TableItem key={nanoid()}>
					<div>{item.reportDate}</div>
					<div>
						<ReportTarget reportTarget={"신고대상자"} />
					</div>
					<div>
						<Reporter reporter={"신고자"} />
					</div>
					<div>{item.reportReason}</div>
					<div>
						<EvidencePhoto imageUrl={item.photo} setPhoto={setPhoto} />
					</div>
					<div>
						<DisciplinaryItems />
					</div>
				</TableItem>
			))}
			{!props.onLoading && (
				<LastItemBlock ref={props.observerRef}></LastItemBlock>
			)}
			{imageBoxState && <ImageBox selectPhoto={selectPhoto} />}
			{reporterBoxState && (
				<UserInfo
					boxOption={"reporterBox"}
					userInfo={{
						userId: "",
						writePost: "",
						reportCount: 0,
						getReport: 0,
						prevReport: "",
						prevDisciplinary: "",
					}}
				/>
			)}
			{reportTargetBoxState && (
				<UserInfo
					boxOption={"reportTargetBox"}
					userInfo={{
						userId: "",
						writePost: "",
						reportCount: 0,
						getReport: 0,
						prevReport: "",
						prevDisciplinary: "",
					}}
				/>
			)}
		</TableItemContainer>
	);
}

export function setBoxPosition(
	ImageRef: MutableRefObject<null>,
	boxOption: boxOption,
) {
	if (boxOption === "imgBox") {
		const localStorageBoxPosition = localStorage.getItem("imgPosition");
		if (localStorageBoxPosition && ImageRef.current) {
			const currentRef = ImageRef.current as HTMLDivElement;
			const parsingItem = JSON.parse(localStorageBoxPosition);
			currentRef.style.top = parsingItem.y;
			currentRef.style.left = parsingItem.x;
		}
	} else if (boxOption === "reportTargetBox") {
		const localStorageBoxPosition = localStorage.getItem("reportTargetBox");
		if (localStorageBoxPosition && ImageRef.current) {
			const currentRef = ImageRef.current as HTMLDivElement;
			const parsingItem = JSON.parse(localStorageBoxPosition);
			currentRef.style.top = parsingItem.y;
			currentRef.style.left = parsingItem.x;
		}
	} else if (boxOption === "reporterBox") {
		const localStorageBoxPosition = localStorage.getItem("reporterBox");
		if (localStorageBoxPosition && ImageRef.current) {
			const currentRef = ImageRef.current as HTMLDivElement;
			const parsingItem = JSON.parse(localStorageBoxPosition);
			currentRef.style.top = parsingItem.y;
			currentRef.style.left = parsingItem.x;
		}
	}
}

export function positionReset(
	ImageRef: MutableRefObject<null>,
	boxPosition: boxOption,
) {
	// 각 박스별 위치 초기화시 포지션
	if (boxPosition === "imgBox") {
		localStorage.removeItem("imgPosition");
		resetRefPosition(ImageRef, "80", "50");
	} else if (boxPosition === "reportTargetBox") {
		localStorage.removeItem("reportTargetBox");
		resetRefPosition(ImageRef, "30", "50");
	} else if (boxPosition === "reporterBox") {
		localStorage.removeItem("reporterBox");
		resetRefPosition(ImageRef, "52", "50");
	}
}

function resetRefPosition(
	ImageRef: MutableRefObject<null>,
	positionX: string,
	positionY: string,
) {
	if (ImageRef && ImageRef.current) {
		const currentRef = ImageRef.current as HTMLDivElement;
		currentRef.style.left = `${positionX}%`;
		currentRef.style.top = `${positionY}%`;
	}
}
