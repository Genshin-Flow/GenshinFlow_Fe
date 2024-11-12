import { Dispatch, SetStateAction } from "react";

export async function reportManageMentList<T>(
	reportUserList: T[],
	setReportUserList: Dispatch<SetStateAction<T[]>>,
	setLoadingState: Dispatch<SetStateAction<boolean>>,
	currentPage: number,
	setPage: Dispatch<SetStateAction<number>>,
) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const reportListApi = process.env.NEXT_PUBLIC_reportListApi;

		if (baseApi || reportListApi) {
			throw new Error(
				"신고 받은 유저 목록을 불러오는데 필요한 환경변수를 찾을 수 없습니다.",
			);
		}

		// 신고받은 유저 호출
		const response = await fetch(`${baseApi}${reportListApi}/${currentPage}`);
		const data = await response.json();
		setReportUserList([...reportUserList, data]);
		// 불러온 데이터가 있으면 dom을 다시 랜더링 없으면 삭제
		if (data) {
			setLoadingState(false);
			setPage(currentPage + 1);
		} else {
			setLoadingState(true);
		}
	} catch (error) {
		console.error(error);
	}
}
