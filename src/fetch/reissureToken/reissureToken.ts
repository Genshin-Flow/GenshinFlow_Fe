export async function reissueToken(refreshToken?: string) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const tokenReissue = process.env.TokenReissue;
		if (!baseApi || !tokenReissue) {
			throw new Error("토큰 재발급에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${baseApi}${tokenReissue}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `${refreshToken}`,
			},
		});
		if (response.status !== 200) throw new Error("access token reissue failed");
		const data = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error);
		}
		return new Error("access token reissue failed");
	}
}
