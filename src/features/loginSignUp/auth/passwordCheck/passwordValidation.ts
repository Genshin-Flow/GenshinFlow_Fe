import { passwordPattern } from "@/features/loginSignUp/regularExpression/emailregularExpression";

export function passwordValidation(
	passwordValue: string,
	setModal: (state: string) => void,
) {
	if (passwordPattern.test(passwordValue)) {
		return true;
	} else {
		setModal("비밀번호는 소문자와 특수기호 1개 이상이 포함되어야 합니다");
		return false;
	}
}
