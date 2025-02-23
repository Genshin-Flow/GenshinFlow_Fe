class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function userCompletePost(postId: number, accessToken: string) {
	try {
		const localApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const completeApi = process.env.NEXT_PUBLIC_user_completePost;
		if (!completeApi) {
			throw new Error("옵션 fetch를 위한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${localApi}${completeApi}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `${accessToken}`,
			},
			body: JSON.stringify({
				postId,
			}),
		});
		if (!response.ok) {
			throw new returnResponse(response);
		}
		return response;
	} catch (error) {
		const err = error as Error;
		if (err instanceof returnResponse) {
			throw new returnResponse(err.response);
		}
		return new Response(err.message, { status: 500 });
	}
}
