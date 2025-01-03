import ReportList from "@/features/admin/components/reportManagement/ReportList";
import { useRef, useState } from "react";
import { useObserver } from "@/hooks/useObserver";
import Table from "@/features/admin/components/table";
import TableHeader from "@/features/admin/components/tableHeader";

export type reportUserType = {
	reportDate: string;
	reportTarget: string;
	reporter: string;
	reportReason: string;
	photo: string;
	judgementItem: string;
};

export default function ReportManagement() {
	const ref = useRef(null);
	const [reportUserList, setUserList] = useState<reportUserType[]>(dummyData);
	const [onLoading, setLoadingState] = useState(false);
	const tableHeaderItems = [
		"신고 날짜",
		"신고 대상",
		"신고자",
		"신고 사유",
		"사진",
		"제재 항목",
	];

	// useObserver<reportUserType>(
	// 	ref,
	// 	onLoading,
	// 	setLoadingState,
	// 	setLoadingState,
	// );
	return (
		<>
			<TableHeader<reportUserType>
				title="신고 관리"
				setUserList={setUserList}
			/>
			<Table tableHeaderItems={tableHeaderItems}>
				<ReportList
					reportUserData={reportUserList}
					observerRef={ref}
					onLoading={onLoading}
				/>
			</Table>
		</>
	);
}

const dummyData = [
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
	{
		reportDate: "2023-03-15",
		reportTarget: "test",
		reporter: "admin",
		reportReason: "test",
		photo: "/images/dummy.jpg",
		judgementItem: "test",
	},
];
