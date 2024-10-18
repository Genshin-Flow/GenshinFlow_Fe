"use client";
import { styled } from "@/../styled-system/jsx";
import MypageInfo from "@/features/mypage/template/mypageInfo/MypageInfo";
import MypageText from "@/features/mypage/components/mypageText/MypageText";
import HistoryData from "@/app/allHistory/HistoryData";
import Button from "@/features/loginSignUp/mobile/components/button/Button";
import { listItemType } from "@/features/mypage/components/historyInfo/History";
import { useEffect, useState } from "react";
import { historySubmitHandler } from "@/features/mypage/components/historyInfo/HistoryButton";
export default function page() {
	const [listData, setListData] = useState<listItemType[]>(data);
	const [checkboxId, setBoxId] = useState<string[]>([]);
	useEffect(() => {
		console.log(checkboxId);
	}, [checkboxId]);
	return (
		<AllHistoryContainer>
			<MypageText mt="mt40">전체 히스토리</MypageText>
			<Form
				action="#"
				onSubmit={(event) =>
					historySubmitHandler(
						event,
						checkboxId,
						listData,
						setBoxId,
						setListData,
					)
				}
			>
				<MypageInfo mt="mt40" currentHistory="history">
					<HistoryData
						listData={listData}
						setListData={setListData}
						checkboxId={checkboxId}
						setBoxId={setBoxId}
					/>
				</MypageInfo>
				<ButtonContainer>
					<Button buttonState="login">전체 삭제하기</Button>
				</ButtonContainer>
			</Form>
		</AllHistoryContainer>
	);
}

const AllHistoryContainer = styled("section", {
	base: {
		width: "100%",
		height: "100%",
		padding: "40px 20px",
		backgroundColor: "primary.02",
		position: "relative",
	},
});

const Form = styled("form", {
	base: {
		height: "100%",
		overflow: "hidden",
	},
});
const ButtonContainer = styled("div", {
	base: {
		width: "100%",
		boxSizing: "border-box:",
		marginTop: "40px",
	},
});

const data = [
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 1,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 2,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 3,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 4,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 5,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 6,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 7,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 8,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 9,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 10,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 11,
	},
	{
		date: "2024-10-01",
		quest: "비경",
		desc: "비경ㅇ도와주세요",
		id: 12,
	},
];
