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
<<<<<<< HEAD
		const LocalBaseApi = process.env.NEXT_PUBLIC_LocalBaseApi;
		const OauthSignUpApi = process.env.NEXT_PUBLIC_LocalOauthSignUpApi;
		if (!LocalBaseApi && !OauthSignUpApi) {
			throw new Error("BaseApi 혹은 OauthSignUpApi를 찾을 수 없습니다.");
=======
		const LocalBaseApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const OauthSignUpApi = process.env.NEXT_PUBLIC_LocalOauthSignUpApi;
		if (!OauthSignUpApi) {
			throw new Error("Oauth 로그인을 위한 환경변수를 찾을 수 없습니다.");
>>>>>>> 663f51d6d1ca89c5a8a95d271f9d5e63d04aa098
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
