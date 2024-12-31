import useLoginStateStore from "@/stores/loginStateStore";

class getAccessTokenError extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function getAccessToken() {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const tokenReissue = process.env.NEXT_PUBLIC_getAccessTokenApi;
		const { setIsLogin } = useLoginStateStore();
		if (!baseApi || !tokenReissue) {
			throw new Error("토큰 재발급에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${baseApi}${tokenReissue}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			setIsLogin(false);
			throw new getAccessTokenError(response);
		}
		const data = await response.json();
		setIsLogin(true);
		return data;
	} catch (error) {
		if (error instanceof getAccessTokenError) {
			return error.response;
		}
		return error;
	}
}
