import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// 백엔드 api에 따라 타입지정 필요

export type loginReturnType = {
	failLoginCount: string;
	message: string;
};

export type accessTokenType = {
	accessToken: string;
	refresh: string;
};

export async function postLoginAuth(
	emailValue: string,
	passwordValue: string,
	router?: AppRouterInstance,
): Promise<accessTokenType | unknown> {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BaseApi}/api/loginToken`,
			{
				method: "post",
				headers: {
					"content-Type": "application/json",
				},
				body: JSON.stringify({
					email: emailValue,
					password: passwordValue,
				}),
			},
		);

		// 응답 상태 코드를 수동으로 확인
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// access token 10분 유지 (임시 시간)
		router?.push("/");
		return { message: "로그인" };
	} catch (error: any) {
		// 실패시 리턴 데이터 추가
		return { message: "로그인 실패", failLoginCount: "5" };
	}
}
