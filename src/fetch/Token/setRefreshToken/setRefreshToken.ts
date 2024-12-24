class responseState extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function setRefreshToken(
	refreshToken: string,
	accessToken: string,
): Promise<Response> {
	try {
		const LocalApi = process.env.NEXT_PUBLIC_LocalBaseApi;
		const setRefreshTokenApi = process.env.NEXT_PUBLIC_setRefreshTokenApi;
		if (!LocalApi || !setRefreshTokenApi) {
			throw new Error("토큰 설정에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${LocalApi}${setRefreshTokenApi}`, {
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
