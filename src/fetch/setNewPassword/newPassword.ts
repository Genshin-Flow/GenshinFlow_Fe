import { passwordValidation } from "@/features/loginSignUp/auth/passwordCheck/passwordValidation";

export function setNewPassword(
	newPassword: string,
	verifyPassword: string,
	setModalState: (state: string) => void,
) {
	if (passwordValidation(newPassword)) {
		if (newPassword === verifyPassword) {
			fetch(`${process.env.newPasswordApi}`, {
				method: "post",
				body: JSON.stringify({
					newPassword,
				}),
			});
		} else {
			setModalState("비밀번호가 일치하지 않습니다.");
		}
	} else {
		setModalState("비밀번호는 소문자와 특수기호 1개 이상이 포함되어야 합니다");
		return;
	}
}
