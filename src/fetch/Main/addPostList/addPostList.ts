import { FieldValues } from "react-hook-form";
import { getAccessToken } from "@/fetch/Token/getAccessToken/getAccessToken";

class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function addPostSignIn(
	data: FieldValues,
	quest: string,
	time: string,
	loginState: boolean,
	setIsLogin: (value: boolean) => void,
) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const signInPostApi = process.env.NEXT_PUBLIC_posting_user;
		const withOutSignIn = process.env.NEXT_PUBLIC_posting_guest;
		let autoCompleteTime: number | unknown = "";
		const defaultQuestCategory = "NORMAL_DOMAIN";
		if (!baseApi || !signInPostApi) {
			throw new Error("api 주소가 없습니다.");
		}
		autoCompleteTime = Number(await changeTime(time));

		const changeData = {
			autoCompleteTime,
			content: data.content,
			writerName: data.name,
			questCategory: quest || defaultQuestCategory,
			worldLevel: Number(data.worldLevel),
		};

		// 로그인후 포스트 등록시 fetch
		if (loginState) {
			// 토큰을 가져온 뒤 포스트작성 api 실행
			const tokenResponse = await getAccessToken(setIsLogin);
			if (!tokenResponse.ok) {
				throw new returnResponse(tokenResponse);
			}
			const result = await tokenResponse.json();
			const response = await fetch(`${baseApi}${signInPostApi}`, {
				method: "POST",
				headers: {
					Authorization: `${result.accessToken}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...changeData,
				}),
			});
			if (!response.ok) {
				switch (response.status) {
					// 코드에 따른 추가 예외처리
					default:
						throw new returnResponse(response);
				}
			}
		}
		// 로그아웃 상태에서 포스트 등록시 fetch
		else {
			if (!withOutSignIn) {
				throw new Error("api 주소가 없습니다.");
			}
			const response = await fetch(`${baseApi}${withOutSignIn}`, {
				method: "POST",
				body: JSON.stringify({
					...changeData,
					uid: Number(data.uid),
					password: data.password,
				}),
			});
			if (!response.ok) {
				switch (response.status) {
					// 코드에 따른 추가 예외처리
					default:
						throw new returnResponse(response);
				}
			}
		}
	} catch (error) {
		if (error instanceof returnResponse) {
			return error.response;
		}
		return error;
	}
}

async function changeTime(time: string): Promise<string | unknown> {
	try {
		await new Promise((resolve, reject) => {
			if (time) {
				resolve(time);
			} else {
				reject(new Error("time 변수 사용불가"));
			}
		});

		let currentTime = "";
		switch (time) {
			case "30분":
				currentTime = "30";
				break;
			case "1시간":
				currentTime = "60";
				break;
			case "1시간 30분":
				currentTime = "90";
				break;
			case "2시간":
				currentTime = "120";
				break;
			default:
				currentTime = "0"; // 기본 값 설정
		}
		return currentTime;
	} catch (error) {
		return error;
	}
}
