export async function oauthToken() {
	// 서버 명세서 확인후 제작필요
	const response = fetch(`${process.env.NEXT_PUBLIC_BaseApi}/api/oauthCookie`, {
		method: "post",
		body: JSON.stringify({}),
	});
}
