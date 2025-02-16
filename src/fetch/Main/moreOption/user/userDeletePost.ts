class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function userDeletePost(postId: number, accessToken: string) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const moreOptionBaseApi = process.env.NEXT_PUBLIC_moreOptionUserBaseApi;
		if (!baseApi || !moreOptionBaseApi) {
			throw new Error("옵션 fetch를 위한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${baseApi}${moreOptionBaseApi}/${postId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
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
