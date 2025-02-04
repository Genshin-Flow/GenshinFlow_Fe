import { QueryFilters, useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteTanStack(
	postKey: QueryFilters,
	pagesize: number,
	staleTime: number,
	getFn: (params: any) => any,
	fnParam: [...arg: any],
) {
	const filterBool = !!fnParam[0] || !!fnParam[1] || !!fnParam[2];
	const { data, isLoading, refetch, ...rest } = useInfiniteQuery({
		queryKey: [postKey],
		queryFn: async ({ pageParam = 1 }) => {
			const data = filterBool
				? getFn({
						page: pageParam,
						size: pagesize,
						questCategory: fnParam[1].join(","),
						region: fnParam[0].join(","),
						worldLevel: fnParam[2].join(","),
					})
				: getFn({ page: pageParam, size: pagesize });
			return data;
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			const { page, totalPages } = lastPage;
			return page < totalPages ? page + 1 : undefined;
		},
		retry: 0,
		staleTime,
	});

	return { data, isLoading, refetch, ...rest };
}
