import { getMainPostList } from "@/fetch/Main/mainPostList/mainPostList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useMainPageList() {
	const { data, isLoading, ...rest } = useInfiniteQuery({
		queryKey: ["getMainPostList"],
		queryFn: ({ pageParam = 1 }) =>
			getMainPostList({ page: pageParam, size: 10 }),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.nextCursor;
		},
	});

	return { data, isLoading, ...rest };
}
