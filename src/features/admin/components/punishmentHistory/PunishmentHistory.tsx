import TableHeader from "@/features/admin/components/tableHeader/TableHeader";
import Table from "@/features/admin/components/table/Table";
import PunishmentList from "@/features/admin/components/punishmentHistory/PunishmentList";
import { useRef, useState } from "react";
import { useObserver } from "@/hooks/useObserver";

export type punishmentHistoryType = {
	userId: string;
	prevReportDate: string;
	totalWarningCount: string;
	prevReportReason: string;
	photo: string;
	judgementItem: string;
};

export default function PunishmentHistory() {
	const ref = useRef(null);
	const [punishmentList, setPunishmentData] =
		useState<punishmentHistoryType[]>(dummy);
	const [loadingState, setLoadingState] = useState(false);

	const tableHeader = [
		"대상 ID",
		"지난 신고 날짜",
		"경고 누적 횟수",
		"지난 신고 사유",
		"사진",
		"제재 항목",
	];
	useObserver<punishmentHistoryType>(
		ref,
		punishmentList,
		setPunishmentData,
		setLoadingState,
	);
	return (
		<>
			<TableHeader<punishmentHistoryType>
				title={"제재 대상 확인"}
				setUserList={setPunishmentData}
			/>
			<Table tableHeaderItems={tableHeader}>
				<PunishmentList
					reportUserData={punishmentList}
					observerRef={ref}
					onLoading={loadingState}
				/>
			</Table>
		</>
	);
}

const dummy = [
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
	{
		userId: "132",
		prevReportDate: "2024-10-25",
		totalWarningCount: "2",
		prevReportReason: "6",
		photo: "상업적/홍보성",
		judgementItem: "7일 글 게시 정지",
	},
];
