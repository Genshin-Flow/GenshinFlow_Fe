import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Cookies } from "react-cookie";
// 백엔드 api에 따라 타입지정 필요

type fetchReturnType = {
	state: number;
};

const cookies = new Cookies();

export async function postLoginAuth(
	emailValue: string,
	passwordValue: string,
	router?: AppRouterInstance,
): Promise<fetchReturnType | unknown> {
	try {
		const response = await fetch(`${process.env.login}`, {
			method: "post",
			headers: {
				"content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
				password: passwordValue,
			}),
		});
		const data = await response.json();
		// access token 10분 유지 (임시 시간)
		if (true) {
			cookies.set("accessToken", "accessToken", {
				maxAge: 600,
				secure: true,
			});
			// 리프레시 토큰 1시간 유지 (임시 시간)
			cookies.set("Refresh", "리프레시 토큰 데이터", {
				maxAge: 3600,
				secure: true,
			});
		}
		router?.push("/");
		return data;
	} catch (error) {
		return error;
	}
}
