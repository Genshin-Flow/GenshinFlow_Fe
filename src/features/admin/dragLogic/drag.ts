import { MutableRefObject } from "react";
import { boxOption } from "@/features/admin/components/reportManagement/ReportList";

export function Drag(
	ref: MutableRefObject<HTMLElement | null>,
	boxOption: boxOption,
) {
	if (!ref.current) return;
	const target = ref.current;
	let moveX = "";
	let moveY = "";
	const positionSet = (event: MouseEvent) => {
		event.preventDefault();
		const $imageBox = document.querySelector(".imgBox") as HTMLAnchorElement;

		// 초기 마우스 위치와 타겟 요소의 위치 계산
		const startX = event.clientX;
		const startY = event.clientY;
		const initialLeft = target.offsetLeft;
		const initialTop = target.offsetTop;

		const onMouseMove = (moveEvent: MouseEvent) => {
			// a태그 새탭 나오기 막기
			if ($imageBox) {
				$imageBox.style.pointerEvents = "none";
			}
			// 이동 거리 계산 (마우스 시작 위치와 현재 위치 간의 차이)
			let deltaX = moveEvent.clientX - startX;
			let deltaY = moveEvent.clientY - startY;
			const elementWidth = target.getBoundingClientRect().width;
			const elementHeight = target.getBoundingClientRect().height;
			const elementTop = target.getBoundingClientRect().top;
			const elementLeft = target.getBoundingClientRect().left;
			const elementRight = target.getBoundingClientRect().right;
			if (elementLeft < 0) {
				target.style.left = `${elementWidth / 2}px`;
				return;
			} else if (elementRight > innerWidth) {
				target.style.left = `${innerWidth - elementWidth / 2}px`;
				return;
			} else if (elementTop < 0) {
				target.style.top = `${elementHeight / 2}px`;
				return;
			}
			// 요소의 새로운 위치 계산
			moveX = initialLeft + deltaX + "px";
			moveY = initialTop + deltaY + "px";
			target.style.left = moveX;
			target.style.top = moveY;
		};

		const onMouseUp = () => {
			// 드래그 종료 시 이벤트 리스너 제거
			if ($imageBox) {
				$imageBox.style.pointerEvents = "auto";
			}
			rememberBoxPosition();
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		};

		const rememberBoxPosition = () => {
			if (boxOption === "imgBox") {
				if (moveX || moveY) {
					localStorage.setItem(
						"imgPosition",
						JSON.stringify({
							x: moveX,
							y: moveY,
						}),
					);
				}
			} else if (boxOption === "reportTargetBox") {
				if (moveX || moveY) {
					localStorage.setItem(
						"reportTargetBox",
						JSON.stringify({
							x: moveX,
							y: moveY,
						}),
					);
				}
			} else if (boxOption === "reporterBox") {
				if (moveX || moveY) {
					localStorage.setItem(
						"reporterBox",
						JSON.stringify({
							x: moveX,
							y: moveY,
						}),
					);
				}
			}
		};

		if (target.classList.contains("exitButton")) {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		}

		// 문서에 이벤트 리스너 추가
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
	};

	// 드래그 시작 시 이벤트 리스너 추가
	target.addEventListener("mousedown", positionSet);

	// 정리 함수 반환
	return () => {
		target.removeEventListener("mousedown", positionSet);
	};
}
