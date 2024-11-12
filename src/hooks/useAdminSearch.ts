import { Dispatch, SetStateAction, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export async function useAdminSearch(
	searchValue: string,
	setSearchResult: Dispatch<SetStateAction<string[]>>,
) {
	const debouncedValue = useDebounce(searchValue, 300);

	useEffect(() => {
		changeHandler();
	}, [debouncedValue]);

	async function changeHandler() {
		console.log("실행");
		const searchApi = process.env.NEXT_PUBLIC_adminSearchApi;
		if (!searchApi) {
			throw new Error(
				"어드민 페이지 검색에 필요한 환경변수를 찾을 수 없습니다",
			);
		}
		if (searchValue) {
			const response = await fetch(`${process.env.searchApi}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ searchValue }),
			});
			const data = await response.json();
			setSearchResult(data);
		} else if (searchValue) {
			setSearchResult([]);
		}
	}
}
