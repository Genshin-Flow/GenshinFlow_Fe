// 경로가 변경될 때마다 로딩 상태 업데이트
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLoadingStore } from "@/stores/loadingStore";

export const useLoading = () => {
	const { isLoading, setIsLoading } = useLoadingStore();
	const pathname = usePathname();

	useEffect(() => {
		setIsLoading(true);
		// 완료시 실행할 콜백 함수
		const onPageLoad = () => {
			setIsLoading(false);
		};

		// document 로딩상태 감지
		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad, false);
			// 이벤트 클린업
			return () => window.removeEventListener("load", onPageLoad);
		}
	}, [pathname, setIsLoading]);

	return isLoading;
};
