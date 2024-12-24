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
		const baseAPi = process.env.NEXT_PUBLIC_BaseApi;
		const authMailApi = process.env.NEXT_PUBLIC_authMail;
		if (!baseAPi || !authMailApi) {
			throw new Error("인증코드 전송 환경변수를 찾을 수 없습니다.");
		}

		// 메일 유효성 검사
		const response = await fetch(`${baseAPi}${authMailApi}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
			}),
		});
		if (response.ok) {
			return response;
		} else if (!response.ok) {
			throw new MailAuthError(response);
		}
	} catch (error) {
		if (error instanceof MailAuthError) {
			return error.response;
		}
	}
}
