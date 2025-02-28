import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { forwardingMailFetch } from "@/fetch/AuthCode/forwardingMailAuth/forwardingMailFetch";
import { Dispatch, SetStateAction } from "react";

class MailAuthError extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function postAuthMail(
	emailValue: string,
	setModal: (state: string) => void,
	setCount: Dispatch<SetStateAction<number>>,
) {
	try {
		const mailState = checkMail(emailValue);
		const rePostAuthCode = 60;
		if (mailState) {
			const data = await forwardingMailFetch(emailValue);
			if (!data.ok) {
				throw new MailAuthError(data);
			}
			setCount(rePostAuthCode);
			setModal("인증코드가 발송 되었습니다");
		}
	} catch (error) {
		if (error instanceof MailAuthError) {
			setModal("인증코드 발송 오류 다시 시도해주세요");
			return new Response("실패", { status: error.response.status });
		}
		setModal("인증코드 발송 오류 다시 시도해주세요");
		return new Response("실패", { status: 500 });
	}
}
