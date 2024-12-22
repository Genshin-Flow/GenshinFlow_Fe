// 지정된 요소 외부에서 클릭이 감지되면 콜백을 트리거하는 커스텀 훅입니다. 모달이나 메뉴에 사용함.
import { useEffect } from "react";

export default function useOutsideClick(
	ref: React.RefObject<HTMLElement>,
	callback: () => void,
) {
	const handleClickOutside = (e: MouseEvent) => {
		const target = e.target as HTMLButtonElement;
		if (ref.current && !ref.current.contains(target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, callback]);
}
