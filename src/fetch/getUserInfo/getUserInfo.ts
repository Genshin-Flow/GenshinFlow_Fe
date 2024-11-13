export async function getUserInfo() {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const getMyInfoApi = process.env.myInfo;
		if (!baseApi || !getMyInfoApi) {
			throw new Error("정보를 조회하는데 필요한 환경변수를 찾지 못했습니다.");
		}
		const response = await fetch(`${baseApi}${getMyInfoApi}`, {
			method: "get",
		});
		if (response.status !== 200) {
			throw new Error("내 정보를 조회하는데 실패했습니다.");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error);
		}
		return "";
	}
}
