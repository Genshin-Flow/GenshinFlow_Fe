class OauthSignUpError extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function oauthSignUp(
	email: string,
	uid: number,
	provider: string,
): Promise<Response | unknown> {
	try {
		const LocalBaseApi =
			process.env.NODE_ENV === "production"
				? "/api"
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const OauthSignUpApi = process.env.NEXT_PUBLIC_LocalOauthSignUpApi;
		if (!LocalBaseApi && !OauthSignUpApi) {
			throw new Error("BaseApi 혹은 OauthSignUpApi를 찾을 수 없습니다.");
		}
		const response = await fetch(`${LocalBaseApi}${OauthSignUpApi}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				uid,
				provider,
			}),
		});
		if (!response.ok) {
			throw new OauthSignUpError(response);
		}

		return response;
	} catch (error) {
		if (error instanceof OauthSignUpError) {
			throw error.response;
		}
		throw error;
	}
}
