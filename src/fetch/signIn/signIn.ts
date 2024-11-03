import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// 백엔드 api에 따라 타입지정 필요

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
	router?: AppRouterInstance,
): Promise<fetchReturnType | any> {
	try {
		const localBaseApi = process.env.NEXT_PUBLIC_LocalBaseApi;
		if (!localBaseApi) {
			throw new Error("로그인 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${localBaseApi}/api/login`, {
			method: "post",
			body: JSON.stringify({
				email: emailValue,
				password: passwordValue,
			}),
		});
		if (response.status !== 200) {
			throw new extendedResponseError(response);
		}
		const data = await response.json();
		router?.push("/");
		return data;
	} catch (error) {
		if (error instanceof extendedResponseError) {
			return error.response;
		}

		if (error instanceof Error) {
			console.error(error);
			return false;
		}
	}
}
