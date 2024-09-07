import { passwordPattern } from "@/features/loginSignUp/regularExpression/RegularExpression";

export function passwordValidation(passwordValue: string) {
	if (passwordPattern.test(passwordValue)) {
		return true;
	} else {
		return false;
	}
}
