import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

const observerOption = {
	root: null,
	rootMargin: "0px",
	threshold: 0,
};

export function useObserver<T>(
	targetRef: MutableRefObject<null>,
	LoadingState: boolean,
	setLoadingState: Dispatch<SetStateAction<boolean>>,
	callBack?: () => void,
) {
	useEffect(() => {
		if (targetRef && targetRef.current) {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					// dom이 보이면 새로운 데이터 호출 다른 함수도 호출이 필요할시 이곳에 추가로 작성
					if (callBack && !LoadingState) {
						callBack();
					}
					setLoadingState(true);
				}
			}, observerOption);
			observer.observe(targetRef.current);
			return () => {
				if (targetRef.current) {
					observer.unobserve(targetRef.current);
				}
			};
		}
	}, [LoadingState]);
}
