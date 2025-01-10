class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function getUserInfo(accessToken: string): Promise<Response> {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const getMyInfoApi = process.env.NEXT_PUBLIC_myInfoApi;
		if (!baseApi || !getMyInfoApi) {
			throw new Error("정보를 조회하는데 필요한 환경변수를 찾지 못했습니다.");
		}
		const response = await fetch(`${baseApi}${getMyInfoApi}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
		});
		if (response.status !== 200) {
			throw new returnResponse(response);
		}
		return response;
	} catch (error) {
		const err = error as Error;
		if (error instanceof returnResponse) {
			return error.response;
		}
		return new Response(err.message, { status: 500 });
	}
}
