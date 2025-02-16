class OauthSignInError extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function oauthSignIn(
	email: string,
	callBack?: () => void,
): Promise<Response> {
	// 현재 uid가 겹칠때 에러 처리도 필요
	try {
		const baseApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const oauthLoginApi = process.env.NEXT_PUBLIC_LocalOauthLoginApi;
		const response = await fetch(`${baseApi}${oauthLoginApi}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
			}),
		});
		if (response.status === 404) {
			callBack?.();
			throw new OauthSignInError(response);
		} else if (response.status === 403) {
			throw new OauthSignInError(response);
		} else if (!response.ok) {
			throw new OauthSignInError(response);
		}
		return response;
	} catch (error) {
		if (error instanceof OauthSignInError) {
			return error.response;
		}
		throw error;
	}
}
