export async function refreshAccess(accessToken: string, refreshToken: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BaseApi}/api/refreshAccessToken`,
		{
			method: "post",
			body: JSON.stringify({
				accessToken: accessToken,
				refreshToken: refreshToken,
			}),
		},
	);
	const data = await response.json();
	return data;
}
