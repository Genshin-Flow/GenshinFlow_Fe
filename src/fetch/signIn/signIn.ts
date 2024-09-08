// 백엔드 api에 따라 타입지정 필요

type fetchReturnType = {
	state: number;
};

export async function postLoginAuth(
	emailValue: string,
	passwordValue: string,
): Promise<fetchReturnType | unknown> {
	try {
		const response = await fetch(`${process.env.login}`, {
			method: "post",
			headers: {
				"content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
				password: passwordValue,
			}),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
