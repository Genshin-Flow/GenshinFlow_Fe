class responseState extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function setLoginToken(
	refreshToken: string,
	accessToken: string,
): Promise<Response> {
	try {
		const LocalApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const setLoginTokenApi = process.env.NEXT_PUBLIC_setLoginTokenApi;
		if (!setLoginTokenApi) {
			throw new Error("토큰 설정에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${LocalApi}${setLoginTokenApi}`, {
			method: "post",
			body: JSON.stringify({
				refreshToken: refreshToken,
				accessToken: accessToken,
			}),
		});
		if (!response.ok) throw new responseState(response);
		return response;
	} catch (error) {
		if (error instanceof responseState) {
			return error.response;
		}
		return new Response("refreshToken 설정 실패", { status: 500 });
	}
}
