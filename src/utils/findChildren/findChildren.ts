export function findChild<T extends HTMLElement>(
	parent: HTMLElement,
	selector: string,
): T | null {
	for (const child of Array.from(parent.children)) {
		// 타입 단언을 사용해 Element를 HTMLElement로 변환
		const element = child as HTMLElement;

		// 조건에 맞는 요소를 찾으면 반환
		if (element.matches(selector)) {
			return element as T;
		}

		// 재귀적으로 하위 요소 탐색
		const found = findChild<T>(element, selector);
		if (found) {
			return found;
		}
	}

	// 일치하는 요소가 없을 경우 null 반환
	return null;
}
