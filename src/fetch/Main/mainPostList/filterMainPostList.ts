import { errorToast } from "@/utils/customToast/customToast";
type propsType = {
	page: number;
	size: number;
	region: string;
	questCategory: string;
	worldLevel: string;
};

export async function getFilterMainPostList({
	page,
	size,
	region,
	questCategory,
	worldLevel,
}: propsType) {
	const localBaseApi =
		process.env.NODE_ENV === "production"
			? ""
			: process.env.NEXT_PUBLIC_LocalBaseApi;
	const filterPostApi = process.env.NEXT_PUBLIC_getFilterPageListApi;
	if (!process.env.NEXT_PUBLIC_mainPostListFilterApi)
		throw new Error("메인페이지 리스트 api가 없습니다.");
	const response = await fetch(`${localBaseApi}${filterPostApi}`, {
		method: "post",
		body: JSON.stringify({
			page,
			size,
			region,
			questCategory,
			worldLevel,
		}),
	});

	if (!response.ok) {
		switch (response.status) {
			default:
				errorToast("서버에러가 발생했습니다. 새로고침 후 다시 이용해주세요요");
				throw new Error("서버에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
		}
	}

	const data = await response.json();
	return data;
}
