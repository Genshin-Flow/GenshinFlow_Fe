import { useEffect } from "react";

export default function useOutsideClick(
	ref: React.RefObject<HTMLElement>,
	callback: () => void,
	menuActiveRef?: React.RefObject<HTMLElement>,
) {
	const handleClickOutside = (e: MouseEvent) => {
		const target = e.target as HTMLElement;

		// menuActiveRef가 제공되었고 클릭한 요소가 menuActiveRef 요소라면 동작하지 않음
		if (
			(menuActiveRef?.current && menuActiveRef.current.contains(target)) ||
			(ref.current && ref.current.contains(target))
		) {
			return;
		}

		callback();
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, callback, menuActiveRef]);
}
