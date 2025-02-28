class MailAuthError extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function forwardingMailFetch(emailValue: string) {
	// 추후 api 스팩에 따라 body 결정
	try {
		const localBaseAPi = process.env.NEXT_PUBLIC_LocalBaseApi;
		const sendAuthMailApi = process.env.NEXT_PUBLIC_sendAuthMailApi;
		if (!localBaseAPi || !sendAuthMailApi) {
			throw new Error("인증코드 전송 환경변수를 찾을 수 없습니다.");
		}

		// 메일 유효성 검사
		const response = await fetch(`${localBaseAPi}${sendAuthMailApi}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				emailValue,
			}),
		});
		if (!response.ok) {
			throw new MailAuthError(response);
		}
		return new Response("성공", { status: response.status });
	} catch (error) {
		if (error instanceof MailAuthError) {
			return new Response("실패", { status: error.response.status });
		}
		return new Response("실패", { status: 500 });
	}
}
