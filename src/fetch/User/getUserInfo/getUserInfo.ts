class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function getUserInfo(accessToken: string): Promise<Response> {
	try {
		const localBaseApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const getMyInfoApi = process.env.NEXT_PUBLIC_getMyInfo;
		if (!getMyInfoApi) {
			throw new Error("정보를 조회하는데 필요한 환경변수를 찾지 못했습니다.");
		}
		const response = await fetch(`${localBaseApi}${getMyInfoApi}`, {
			method: "POST",
			headers: {
				Authorization: `${accessToken}`,
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
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
