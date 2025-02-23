class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function guestCompletePost(
	postId: number,
	password: string | undefined,
) {
	try {
		const localApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const completeApi = process.env.NEXT_PUBLIC_guest_completePostApi;
		if (!completeApi) {
			throw new Error("옵션 fetch를 위한 환경변수를 찾을 수 없습니다.");
		}
		if (!password) {
			throw new Error("비밀번호를 인식하지 못했습니다. 다시 시도해 주세요");
		}
		const response = await fetch(`${localApi}${completeApi}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				postId,
				password,
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
