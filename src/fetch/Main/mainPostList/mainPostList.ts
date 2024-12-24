type propsType = {
	page: number;
	size: number;
};

export async function getMainPostList({ page, size }: propsType) {
	if (!process.env.NEXT_PUBLIC_mainPostListApi)
		throw new Error("메인페이지 리스트 api가 없습니다.");
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BaseApi}${process.env.NEXT_PUBLIC_mainPostListApi}?size=${size}&page=${page}`,
		{
			method: "get",
		},
	);
	const data = await response.json();
	return data;
}
