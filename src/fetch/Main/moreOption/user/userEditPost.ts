import { errorToast } from "@/utils/customToast/customToast";
type editType = {
	postId: number;
	questCategory: string;
	content: string;
	autoCompleteTime: number;
};
class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function userEditPost(item: editType, accessToken: string) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const moreOptionBaseApi = process.env.NEXT_PUBLIC_moreOptionUserBaseApi;
		if (!baseApi || !moreOptionBaseApi) {
			throw new Error("옵션 fetch를 위한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${baseApi}${moreOptionBaseApi}/modify`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({
				postId: item.postId,
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
