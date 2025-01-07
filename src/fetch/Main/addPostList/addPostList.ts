import { FieldValues } from "react-hook-form";

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
) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const signInPostApi = process.env.NEXT_PUBLIC_posting_user;
		let autoCompleteTime: number | unknown = "";
		if (!baseApi || !signInPostApi) {
			throw new Error("api 주소가 없습니다.");
		}
		autoCompleteTime = Number(await changeTime(time));

		const changeData = {
			...data,
			uid: Number(data.uid),
			worldLevel: Number(data.worldLevel),
			questCategory: quest,
			autoCompleteTime,
		};

		const response = await fetch(`${baseApi}${signInPostApi}`, {
			method: "POST",
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
