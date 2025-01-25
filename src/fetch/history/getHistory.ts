class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function getHistory() {
	// try {
	// 	const baseApi = process.env.NEXT_PUBLIC_BaseApi;
	// 	const getHistoryApi = process.env.historyGetApi
	// 	const size = process.env.getHistorySize;
	// 	if( !baseApi || !getHistoryApi ){
	// 		throw new Error("히스토리 API를 찾을 수 없습니다.");    // API URL이 없는 경우 에러 throw
	// 	}
	// 	const response = await fetch(`${baseApi}${getHistoryApi}?page=${}&size=${size}`, {
	// 		method: "get",
	// 	});
	// 	if (response.status !== 200) throw new Error("히스토리 가져오기 실패");
	// 	const data = await response.json();
	// 	return data;
	// } catch (error) {
	// 	const err = error as Error;
	// 	if( error instanceof returnResponse ){
	// 		return error.response;
	// 	}
	// 	return new Response(err.message , {status: 500})
	// }
}
