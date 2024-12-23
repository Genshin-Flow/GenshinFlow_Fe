/*
기존에 만들었던 observer 함수를 사용하지 않고 코드가 중복되기는 하지만 
최대한 깔끔하게 작성하고자 새롭게 observer 파일을 생성
*/
import { getMainPostList } from "@/fetch/mainPostList/mainPostList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RefObject, useEffect } from "react";

const observerOption = {
	root: null,
	rootMargin: "100px",
	threshold: 0,
};

export function useMainPostObserve(scrollRef: RefObject<HTMLDivElement>) {
	const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: ["getMainPostList"],
		queryFn: ({ pageParam = 1 }) =>
			getMainPostList({ page: pageParam, size: 20 }),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			if (!lastPage || lastPage.page >= lastPage.totalPages) return undefined;
			return lastPage.page + 1;
		},
		staleTime: 1000 * 60 * 5,
	});

	useEffect(() => {
		if (!scrollRef.current || !hasNextPage) return;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !isLoading) {
				fetchNextPage();
			}
		}, observerOption);

		console.log(scrollRef.current);
		observer.observe(scrollRef.current);

		return () => {
			if (scrollRef.current) {
				observer.unobserve(scrollRef.current);
			}
		};
	}, [scrollRef.current]);

	return { data, isLoading, hasNextPage };
}
