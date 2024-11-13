import { Dispatch, SetStateAction } from "react";

export async function forwardingMailFetch(
	emailValue: string,
	setModal: (state: string) => void,
	setCount: Dispatch<SetStateAction<number>>,
) {
	// 추후 api 스팩에 따라 body 결정
	try {
		const baseAPi = process.env.NEXT_PUBLIC_BaseApi;
		const authMailApi = process.env.NEXT_PUBLIC_authMail;
		if (!baseAPi || !authMailApi) {
			throw new Error("인증코드 전송 환경변수를 찾을 수 없습니다.");
		}

		// 메일 유효성 검사
		const response = await fetch(`${baseAPi}${authMailApi}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
			}),
		});
		if (response.status !== 200) {
			throw new Error("failed to send AuthCode");
		}
		const data = response.json();
		if (response.status !== 200) {
			throw new Error("인증코드 발송 오류!");
		} else {
			setModal("인증코드가 발송 되었습니다");
			setCount(60);
			return data;
		}
	} catch (error) {
		setModal("인증코드 발송 오류 다시 시도해주세요");
		if (error instanceof Error) {
			console.error(error);
		}
		return "";
	}
}
