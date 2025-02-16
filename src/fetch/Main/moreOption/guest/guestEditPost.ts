import { errorToast } from "@/utils/customToast/customToast";
class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

type editType = {
	postId: number;
	password: string;
	questCategory: string;
	content: string;
	autoCompleteTime: number;
};

export async function guestEditPost(item: editType) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const moreOptionBaseApi = process.env.NEXT_PUBLIC_moreOptionGuestBaseApi;
		if (!baseApi || !moreOptionBaseApi) {
			throw new Error("옵션 fetch를 위한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${baseApi}/${moreOptionBaseApi}/modify`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				postId: item.postId,
				password: item.password,
				questCategory: item.questCategory,
				content: item.content,
				autoCompleteTime: item.autoCompleteTime,
			}),
		});
		if (!response.ok) {
			throw new returnResponse(response);
		}
	} catch (error) {
		const err = error as Error;
		if (err instanceof returnResponse) {
			throw new returnResponse(err.response);
		}
		throw err;
	}
}
