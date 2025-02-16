import { FieldValues } from "react-hook-form";
import { getAccessToken } from "@/fetch/Token/getAccessToken/getAccessToken";
import { PostContent } from "@/features/matching/components/tab";
import { errorToast } from "@/utils/customToast/customToast";

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
	editPostData?: PostContent,
) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const signInPostApi = process.env.NEXT_PUBLIC_moreOptionUserBaseApi;
		const withOutSignIn = process.env.NEXT_PUBLIC_moreOptionGuestBaseApi;
		const guestPostEdit = process.env.NEXT_PUBLIC_moreOptionGuestBaseApi;
		const userPostEdit = process.env.NEXT_PUBLIC_moreOptionUserBaseApi;
		let autoCompleteTime: number | unknown = "";
		const defaultQuestCategory = "NORMAL_DOMAIN";
		if (!baseApi || !signInPostApi) {
			throw new Error("api 주소가 없습니다.");
		}
		autoCompleteTime = Number(await changeTime(time));

		const SignInChangeData = {
			autoCompleteTime,
			content: data.content,
			questCategory: quest || defaultQuestCategory,
		};

		const NonSignInChangeData = {
			uid: Number(data.uid),
			questCategory: quest || defaultQuestCategory,
			content: data.content,
			autoCompleteTime,
		};

		const guestModifyData = {
			postId: editPostData?.id,
			password: data?.password,
			questCategory: quest,
			content: data.content,
			autoCompleteTime,
		};

		const userModifyData = {
			postId: editPostData?.id,
			questCategory: quest,
			content: data.content,
			autoCompleteTime,
		};
		// 로그인후 포스트 등록시 fetch
		if (!editPostData && loginState) {
			// 토큰을 가져온 뒤 포스트작성 api 실행
			const tokenResponse = await getAccessToken(setIsLogin);
			if (!tokenResponse.ok) {
				throw new returnResponse(tokenResponse);
			}
			const result = await tokenResponse.json();
			const response = await fetch(`${baseApi}${signInPostApi}`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${result.accessToken}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...SignInChangeData,
				}),
			});
			if (!response.ok) {
				switch (response.status) {
					// 코드에 따른 추가 예외처리
					default:
						throw new returnResponse(response);
				}
			}
		} else if (editPostData) {
			if (loginState) {
				const response = await fetch(`${baseApi}${userPostEdit}/modify`, {
					headers: {
						"Content-Type": "application/json",
					},
					method: "PATCH",
					body: JSON.stringify({
						...userModifyData,
					}),
				});
				if (!response.ok) {
					switch (response.status) {
						// 코드에 따른 추가 예외처리
						default:
							throw new returnResponse(response);
					}
				}
			} else {
				const response = await fetch(`${baseApi}${guestPostEdit}/modify`, {
					headers: {
						"Content-Type": "application/json",
					},
					method: "PATCH",
					body: JSON.stringify({
						...guestModifyData,
					}),
				});
				if (!response.ok) {
					throw new returnResponse(response);
				}
			}
		}

		// 로그아웃 상태에서 포스트 등록시 fetch
		else if (!loginState) {
			if (!withOutSignIn) {
				throw new Error("api 주소가 없습니다.");
			}
			const response = await fetch(`${baseApi}${withOutSignIn}`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					...NonSignInChangeData,
					password: data.password,
				}),
			});
			if (!response.ok) {
				throw new returnResponse(response);
			}
		}
	} catch (error) {
		if (error instanceof returnResponse) {
			if (error.response.status === 400) {
				errorToast("비밀번호가 일치하지 않습니다.");
			}
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
