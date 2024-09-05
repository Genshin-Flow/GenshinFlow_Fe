import { emailPattern } from "@/features/loginSignUp/regularExpression/emailregularExpression";

export function checkMail(
	emailValue: string,
	setModal: (state: string) => void,
) {
	if (emailPattern.test(emailValue)) {
		return true;
	} else {
		setModal("이메일이 올바르게 입력 되었는지 확인해주십시오");
	}
}
