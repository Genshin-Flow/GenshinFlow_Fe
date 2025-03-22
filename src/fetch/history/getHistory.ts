import { getAccessToken } from "@/fetch/Token/getAccessToken/getAccessToken";

class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function getHistory({
	page,
	size,
}: {
	page: string;
	size: string;
}) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const getHistoryApi = process.env.NEXT_PUBLIC_historyGetApi;

		if (!baseApi || !getHistoryApi) {
			throw new Error("히스토리 API를 찾을 수 없습니다."); // API URL이 없는 경우 에러 throw
		}
		const accessTokenResponse = await getAccessToken();
		if (!accessTokenResponse.ok) {
			throw new returnResponse(accessTokenResponse);
		}
		const accessToken = await accessTokenResponse.json();
		const response = await fetch(
			`${baseApi}${getHistoryApi}?page=${page}&size=${size}`,
			{
				method: "get",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken.accessToken}`,
				},
			},
		);
		if (!response.ok) throw new Error("히스토리 가져오기 실패");
		const data = await response.json();

		return data;
	} catch (error) {
		const err = error as Error;
		if (error instanceof returnResponse) {
			return error.response;
		}
		return new Response(err.message, { status: 500 });
	}
}
