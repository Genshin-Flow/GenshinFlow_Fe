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
		const localApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const editPostApi = process.env.NEXT_PUBLIC_guest_editPostApi;
		if (!editPostApi) {
			throw new Error("포스트를 수정하기 위한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${localApi}/${editPostApi}`, {
			method: "POST",
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
