class getAccessTokenError extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function getAccessToken(
	setIsLogin?: (value: boolean) => void,
): Promise<Response> {
	try {
		const localBaseApi =
			process.env.NODE_ENV === "production"
				? "/api"
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const tokenReissue = process.env.NEXT_PUBLIC_getAccessTokenApi;
		if (!localBaseApi || !tokenReissue) {
			throw new Error("토큰 재발급에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${localBaseApi}${tokenReissue}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			if (setIsLogin) {
				setIsLogin(false);
			}
			throw new getAccessTokenError(response);
		}
		if (setIsLogin) {
			setIsLogin(true);
		}

		return response;
	} catch (error) {
		const err = error as Error;
		if (error instanceof getAccessTokenError) {
			return error.response;
		}
		return new Response(err.message, { status: 500 });
	}
}
