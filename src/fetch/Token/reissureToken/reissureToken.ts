class returnResponse extends Response {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function reissueToken(refreshToken: string): Promise<Response> {
	try {
		if (!refreshToken) throw new Error("리프레시 토큰을 찾을 수 없습니다.");
		const localBaseApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const tokenReissue = process.env.NEXT_PUBLIC_refreshAccessTokenApi;
		if (!tokenReissue) {
			throw new Error("토큰 재발급에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${localBaseApi}${tokenReissue}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refreshToken }),
		});
		if (!response.ok) throw new returnResponse(response);
		return response;
	} catch (error) {
		const err = error as Error;
		if (error instanceof returnResponse) {
			throw error.response;
		}

		return new Response(err.message, { status: 500 });
	}
}
