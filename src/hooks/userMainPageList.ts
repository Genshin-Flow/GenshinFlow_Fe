import {
	QueryFilters,
	useInfiniteQuery,
	useQueryClient,
} from "@tanstack/react-query";

export function useInfiniteTanStack(
	postKey: QueryFilters,
	pagesize: number,
	staleTime: number,
	getFn: (params: any) => any,
	fnParam: [...arg: any],
) {
	const filterBool = !!fnParam[0] || !!fnParam[1] || !!fnParam[2];
	const queryClient = useQueryClient();
	const { data, isLoading, refetch, ...rest } = useInfiniteQuery({
		queryKey: [postKey],
		queryFn: ({ pageParam = 1 }) => {
			return filterBool
				? getFn({
						page: pageParam,
						size: pagesize,
						questCategory: fnParam[1].join(","),
						region: fnParam[0].join(","),
						worldLevel: fnParam[2].join(","),
					})
				: getFn({ page: pageParam, size: pagesize });
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.nextCursor;
		},
		retry: 0,
		staleTime,
		enabled: !!fnParam[0] || !!fnParam[1] || !!fnParam[2],
	});

	if (isLoading) {
		// 만약 로딩중 새로운 필터 fetch 요청이 들어올 경우 무시될 수 있으니 취소 코드드
		queryClient.cancelQueries(postKey);
	}

	return { data, isLoading, refetch, ...rest };
}
