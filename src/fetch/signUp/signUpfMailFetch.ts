export function signUpfMailFetch(
	email: string,
	password: string,
	authCodeValue: string,
	setModalState: (state: string) => void,
) {
	try {
		fetch(``, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		// 예외코드 ,메세지에 따른 예외처리 로직작성
		return false;
	}
}
