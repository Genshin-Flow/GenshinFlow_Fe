export async function crawl() {
	try {
		const baseApi = process.env.NEXT_PUBLIC_LocalBaseApi;
		const scrapingApi = process.env.NEXT_PUBLIC_getEventApi;
		if (!baseApi || !scrapingApi) {
			throw new Error("이벤트 스크레핑에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const response = await fetch(`${baseApi}${scrapingApi}`);
		const result = response.json();
		return result;
	} catch (error) {
		throw new Response("이벤트 페이지를 불러오는데 실패 했습니다.", {
			status: 500,
		});
	}
}
