export async function reissueToken(accessToken?: string) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BaseApi}${process.env.TokenReissue}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${accessToken}`,
				},
			},
		);
		if (response.status !== 200) throw new Error("access token reissue failed");
		const data = await response.json();
		return data;
	} catch (error) {
		return new Error("access token reissue failed");
	}
}
