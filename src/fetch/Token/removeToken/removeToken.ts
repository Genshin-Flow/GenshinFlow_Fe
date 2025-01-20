class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function removeToken() {
	try {
		const localBaseApi = process.env.NEXT_PUBLIC_LocalBaseApi;
		const removeTokenApi = process.env.NEXT_PUBLIC_removeTokenApi;
		if (!localBaseApi || !removeTokenApi) {
			throw new Error("토큰을 삭제하기 위한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${localBaseApi}${removeTokenApi}`);
		if (!response.ok) {
			throw new returnResponse(response);
		}
		return response;
	} catch (error) {
		const err = error as Error;
		if (err instanceof returnResponse) {
			return err.response;
		}
		return new Response(err.message, { status: 400 });
	}
}
