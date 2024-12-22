/*
기존에 만들었던 observer 함수를 사용하지 않고 코드가 중복되기는 하지만 
최대한 깔끔하게 작성하고자 새롭게 observer 파일을 생성
*/
import { getMainPostList } from "@/fetch/mainPostList/mainPostList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RefObject, useEffect } from "react";

const observerOption = {
	root: null,
	rootMargin: "0px",
	threshold: 0,
};

export function useMainPostObserve(scrollRef: RefObject<HTMLDivElement>) {
	const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: ["getMainPostList"],
		queryFn: ({ pageParam = 1 }) =>
			getMainPostList({ page: pageParam, size: 20 }),
		initialPageParam: 1,
		retry: 2,
		getNextPageParam: (lastPage) => {
			// 더 이상 데이터가 없으면 undefined 반환
			if (!lastPage.hasMore) return undefined;
			// 다음 페이지 번호 반환
			return lastPage.currentPage + 1;
		},
		// refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 5,
	});

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
	}, [scrollRef.current]);

	return { data, isLoading, hasNextPage };
}
