import { listItemType } from "@/features/mypage/components/history/History";

export function deleteHistory(historyArray: listItemType[]) {
	try {
		fetch(`${process.env.historyDeleteApi}`, {
			method: "post",
			body: JSON.stringify(historyArray),
		});
	} catch (error) {
		console.error("히스토리 삭제에 실패했습니다");
	}
}
