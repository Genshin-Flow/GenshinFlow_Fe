import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { forwardingMailFetch } from "@/fetch/AuthCode/forwardingMailAuth/forwardingMailFetch";
import { Dispatch, SetStateAction } from "react";

export async function postAuthMail(
	emailValue: string,
	setModal: (state: string) => void,
	setCount: Dispatch<SetStateAction<number>>,
) {
	const mailState = checkMail(emailValue);
	if (mailState) {
		setCount(60);
		setModal("인증코드가 발송 되었습니다");
		const data = await forwardingMailFetch(emailValue);
		if (!data?.ok) {
			setModal("인증코드 발송 오류 다시 시도해주세요");
		}
	} else {
		setModal("메일의 형식이 올바르지 않습니다");
	}
}
