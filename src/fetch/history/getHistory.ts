export async function getHistory() {
	try {
		const response = await fetch(`${process.env.historyGetApi}`, {
			method: "get",
		});

		// if (response.status !== 200) throw new Error("히스토리 가져오기 실패");

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("히스토리 가져오기에 실패했습니다");
		return [];
	}
}
