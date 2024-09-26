export async function forgotPasswordAuthCode(authCode: string) {
	try {
		const response = (await fetch(`${process.env.forgotPasswordAuthCode}`, {
			method: "post",
			body: JSON.stringify({
				authCode,
			}),
		})) as Response;
		if (response.status !== 200) {
			throw new Error("코드전송 실패");
		}
		return true;
	} catch (error) {
		return false;
	}
}
