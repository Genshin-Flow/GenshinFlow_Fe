import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { forwardingMailFetch } from "@/fetch/forwardingMailAuth/forwardingMailFetch";
import { Dispatch, SetStateAction } from "react";

export async function postAuthMail(
	emailValue: string,
	setModal: (state: string) => void,
	setCount: Dispatch<SetStateAction<number>>,
) {
	const mailState = checkMail(emailValue);
	if (mailState) {
		const data = await forwardingMailFetch(emailValue, setModal);
		// 정상적으로 전송 되었을시에만 60초 카운트
		if (data) {
			setCount(60);
		}
	} else {
		setModal("메일의 형식이 올바르지 않습니다");
	}
}
