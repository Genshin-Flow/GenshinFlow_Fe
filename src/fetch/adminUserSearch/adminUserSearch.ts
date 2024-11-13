import { Dispatch, SetStateAction } from "react";

export async function adminUserSearch<T>(
	userId: string,
	setUserList: Dispatch<SetStateAction<T[]>>,
) {
	try {
		const baseAPI = process.env.NEXT_PUBLIC_LocalBaseApi;
		const adminSearchUserNextServerResult =
			process.env.adminSearchUserNextServerResult;
		// 환경변수 에러 핸들링
		if (!baseAPI || !adminSearchUserNextServerResult)
			throw new Error(
				"어드민 페이지 유저 검색에 필요한 환경변수를 찾을 수 없습니다.",
			);
		// NextServer 유저 id전달
		const response = await fetch(
			`${baseAPI}/${adminSearchUserNextServerResult}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ userId }),
			},
		);
		if (response.status !== 200) {
			throw new Error(
				`Next server로 전송하는 과정에서 문제가 발생했습니다. 새로고침 후 요청이 전송 되는지 확인하고 문제가 지속될시 개발자에게 알려주세요`,
			);
		}
		const data = await response.json();
		if (data) {
			setUserList(data);
		} else {
			throw new Error(
				"해당 유저 정보를 찾을 수 없습니다. 새로고침 후 다시 시도 혹은 서버 개발자에게 문의해주세요",
			);
		}
	} catch (error) {
		console.error(error);
	}
}
