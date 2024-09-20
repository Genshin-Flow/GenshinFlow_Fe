import { emailPattern } from "@/features/loginSignUp/regularExpression/RegularExpression";

export function checkMail(emailValue: string) {
	if (emailPattern.test(emailValue)) {
		return true;
	} else {
		return false;
	}
}
