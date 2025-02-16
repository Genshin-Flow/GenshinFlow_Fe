class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function guestUpPost(
	postId: number,
	password: string | undefined,
) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const moreOptionBaseApi = process.env.NEXT_PUBLIC_moreOptionGuestBaseApi;
		if (!baseApi || !moreOptionBaseApi) {
			throw new Error("옵션 fetch를 위한 환경변수를 찾을 수 없습니다.");
		}
		if (!password) {
			throw new Error("비밀번호를 인식하지 못했습니다. 다시 시도해 주세요");
		}
		const response = await fetch(
			`${baseApi}/${moreOptionBaseApi}/${postId}/pull-up`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		if (!response.ok) {
			throw new returnResponse(response);
		}
		return response;
	} catch (error) {
		const err = error as Error;
		if (err instanceof returnResponse) {
			return err.response;
		}
		throw new Response(err.message, { status: 500 });
	}
}
