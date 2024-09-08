import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { forwardingMailFetch } from "@/fetch/forwardingMailAuth/forwardingMailFetch";

export async function postAuthMail(
	emailValue: string,
	setModal: (state: string) => void,
) {
	const mailState = checkMail(emailValue);
	if (mailState) {
		forwardingMailFetch(emailValue, setModal);
	} else {
		setModal("메일의 형식이 올바르지 않습니다");
	}
}
