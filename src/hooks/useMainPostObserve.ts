import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { useInfiniteTanStack } from "@/hooks/userMainPageList";
import { getMainPostList } from "@/fetch/Main/mainPostList/mainPostList";
import { getFilterMainPostList } from "@/fetch/Main/mainPostList/filterMainPostList";
import { QueryFilters } from "@tanstack/react-query";
import { PostContent } from "@/features/matching/components/tab";

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
	setPostData: Dispatch<SetStateAction<PostContent[] | undefined>>,
) {
	const staleTime = 1000 * 60 * 10;
	const pagesize = 10;

	// 조건에 따라 API 함수를 선택
	const filterBool =
		region?.length > 0 || questCategory?.length > 0 || worldLevel?.length > 0;
	const fetchFn = filterBool ? getFilterMainPostList : getMainPostList;
	const queryFilter = filterBool
		? ("getMainPost" as QueryFilters)
		: ("getMainPostFilter" as QueryFilters);
	const {
		data,
		isLoading,
		fetchNextPage,
		hasNextPage,
		fetchPreviousPage,
		refetch,
	} = useInfiniteTanStack(queryFilter, pagesize, staleTime, fetchFn, [
		region,
		questCategory,
		worldLevel,
	]);

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

	useEffect(() => {
		if (filterBool) {
			setPostData([]);
		}
		refetch();
	}, [region, questCategory, worldLevel]); // 필터 변경 시 refetch 실행

	return { data, isLoading, hasNextPage };
}
