export async function signUp(
	mail: string,
	authCode: string,
	password: string,
	uid: string,
) {
	try {
		const response = await fetch(`${process.env.signUpApi}`, {
			method: "post",
			body: JSON.stringify({
				mail,
				authCode,
				password,
				uid,
			}),
		});
		if (response.status !== 200) {
			throw new Error("회원가입 실패");
		}
	} catch (error) {
		throw error;
	}
}
