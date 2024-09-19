export async function authMailCheck(auth: string) {
	try {
		const response = await fetch(`${process.env.checkAuthCode}`, {
			method: "post",
			body: JSON.stringify({
				auth,
			}),
		});
		return true;
	} catch (error) {
		return false;
	}
}
