const authMailApi = process.env.authMail as string;

export async function forwardingMailFetch(
	emailValue: string,
	setModal: (state: string) => void,
) {
	// 추후 api 스팩에 따라 body 결정
	try {
		// 메일 유효성 검사
		const response = await fetch(authMailApi, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
			}),
		});
		const data = response.json();
		setModal("인증코드가 발송 되었습니다");
		return data;
	} catch (error) {
		setModal("인증코드 발송 오류");
		return "";
	}
}
