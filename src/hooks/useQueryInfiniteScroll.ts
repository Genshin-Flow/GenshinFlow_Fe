import { QueryFilters, useInfiniteQuery } from "@tanstack/react-query";

type dataObjType = {
	[key: string]: any;
};

export function useInfiniteTanStack(
	postKey: QueryFilters,
	pagesize: number,
	staleTime: number,
	getFn: (params: any) => any,
	fnParam?: [...arg: any],
	isFilterActive?: boolean, // 필터 활성 여부 플래그 추가
) {
	const { data, isLoading, refetch, ...rest } = useInfiniteQuery({
		queryKey: fnParam ? [postKey, ...fnParam] : [postKey],
		queryFn: ({ pageParam }) =>
			dataFn({ pageParam, pagesize, isFilterActive, fnParam, getFn }),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			const { page, totalPages } = lastPage;
			return page < totalPages ? page + 1 : undefined;
		},
		retry: 0,
		staleTime,
	});

	const mergedData = data?.pages.flatMap((page) => page.content) || [];

	return { data: mergedData, isLoading, refetch, ...rest };
}

const dataFn = async ({
	pageParam = 1,
	pagesize = 10,
	fnParam,
	getFn,
	isFilterActive,
}: {
	pageParam: number;
	pagesize: number;
	isFilterActive?: boolean;
	fnParam?: any[];
	getFn: (dataObj: dataObjType) => Promise<any>;
}) => {
	const dataObj: { [key: string]: any } = {
		page: pageParam,
		size: pagesize,
	};

	if (isFilterActive && fnParam) {
		dataObj["region"] = fnParam[0].join(",");
		dataObj["questCategory"] = fnParam[1].join(",");
		dataObj["worldLevel"] = fnParam[2].join(",");
	}

	const data = await getFn({ ...dataObj });

	return data;
};
