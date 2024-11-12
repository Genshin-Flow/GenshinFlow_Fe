import { uidPattern } from "@/features/loginSignUp/regularExpression/RegularExpression";

export function uidValidation(uid: string) {
	if (uidPattern.test(uid)) {
		return true;
	} else {
		return false;
	}
}
