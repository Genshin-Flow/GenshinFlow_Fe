import { errorToast } from "@/utils/customToast/customToast";
type propsType = {
	page: number;
	size: number;
};

export async function getMainPostList({ page, size }: propsType) {
	try {
		const localBaseApi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const mainPostApi = process.env.NEXT_PUBLIC_getMainPageListApi;
		if (!mainPostApi) throw new Error("메인페이지 리스트 api가 없습니다.");
		const response = await fetch(`${localBaseApi}${mainPostApi}`, {
			method: "post",
			body: JSON.stringify({
				page,
				size,
			}),
		});

		if (!response.ok) {
			switch (response.status) {
				default:
					errorToast("서버에러가 발생했습니다. 새로고침 후 다시 이용해주세요");
					throw new Error(
						"서버에러가 발생했습니다. 잠시 후 다시 시도해주세요.",
					);
			}
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
