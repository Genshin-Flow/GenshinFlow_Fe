import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { forwardingMailFetch } from "@/fetch/forwardingMailAuth/forwardingMailFetch";

export async function postAuthMail(
	emailValue: string,
	setModal: (state: string) => void,
) {
	const mailState = checkMail(emailValue, setModal);
	if (mailState) {
		forwardingMailFetch(emailValue, setModal);
	}
}
