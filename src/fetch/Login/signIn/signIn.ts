// 백엔드 api에 따라 타입지정 필요

export type loginReturnType = {
	failLoginCount: string;
	message: string;
};

type fetchReturnType = {
	state: number;
};

class extendedResponseError extends Error {
	status: number;
	statusText: string;
	response: Response;

	constructor(response: Response) {
		// Error 생성자에 문자열 메시지 전달
		super();
		this.status = response.status;
		this.statusText = response.statusText;
		this.response = response; // 원본 Response 객체 저장
	}
}

export async function postLoginAuth(
	emailValue: string,
	passwordValue: string,
): Promise<fetchReturnType | any> {
	try {
		const localBaseAPi = process.env.NEXT_PUBLIC_LocalBaseApi;
		const Login = process.env.NEXT_PUBLIC_signInApi;
		if (!Login) {
			throw new Error("로그인 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${localBaseAPi}${Login}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
				password: passwordValue,
			}),
		});
		if (!response.ok) {
			throw new extendedResponseError(response);
		}
		return response;
	} catch (error) {
		if (error instanceof extendedResponseError) {
			return error.response;
		}

		if (error instanceof Error) {
			return error;
		}
	}
}
