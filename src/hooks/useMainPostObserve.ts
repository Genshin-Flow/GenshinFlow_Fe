import { RefObject, useEffect } from "react";
import { useInfiniteTanStack } from "@/hooks/useQueryInfiniteScroll";
import { getMainPostList } from "@/fetch/Main/mainPostList/mainPostList";
import { getFilterMainPostList } from "@/fetch/Main/mainPostList/filterMainPostList";
import { QueryFilters } from "@tanstack/react-query";

const observerOption = {
	root: null,
	rootMargin: "100px",
	threshold: 0,
};

export function useMainPostObserve(
	scrollRef: RefObject<HTMLDivElement>,
	region: string[],
	questCategory: string[],
	worldLevel: string[],
) {
	const staleTime = 1000 * 60 * 10;
	const pagesize = 20;

	// 필터 활성 여부 판단
	const filterBool =
		(region && region.length > 0) ||
		(questCategory && questCategory.length > 0) ||
		(worldLevel && worldLevel.length > 0);

	// 필터 활성 여부에 따라 사용할 API 함수와 queryKey 문자열 결정
	const fetchFn = filterBool ? getFilterMainPostList : getMainPostList;
	const queryFilter = filterBool
		? ("getMainPostFilter" as QueryFilters)
		: ("getMainPost" as QueryFilters);

	const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
		useInfiniteTanStack(
			queryFilter,
			pagesize,
			staleTime,
			fetchFn,
			[region, questCategory, worldLevel],
			filterBool,
		);

	useEffect(() => {
		if (!scrollRef.current || !hasNextPage) return;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !isLoading) {
				fetchNextPage();
			}
		}, observerOption);

		observer.observe(scrollRef.current);

		return () => {
			if (scrollRef.current) {
				observer.unobserve(scrollRef.current);
			}
		};
	}, [scrollRef, hasNextPage, isLoading, fetchNextPage]);

	return { data, isLoading, hasNextPage, refetch };
}
