import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { passwordValidation } from "@/features/loginSignUp/auth/passwordCheck/passwordValidation";
import { redirect } from "next/navigation";
import { authMailCheck } from "@/fetch/authMailCheck/authMailCheck";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { uidValidation } from "@/features/loginSignUp/auth/uidCheck/passwordValidation";
import { signUp } from "@/fetch/signUp/signUp";
/**
 *
 * @param email
 * 입력한 이메일
 * @param password
 * 입력한 패스워드
 * @param uid
 * 유저의 uid
 * @param authCodeValue
 * 인증코드
 * @param setModalState
 * 모달 상태조작 함수
 * @returns
 */
export async function signUpInfoCheck(
	email: string,
	password: string,
	uid: string,
	authCodeValue: string,
	setModalState: (state: string) => void,
	clientRouter?: AppRouterInstance,
) {
	try {
		const mailState = checkMail(email);
		const passwordCheck = passwordValidation(password);
		const authCodeCheck = authMailCheck(authCodeValue);
		const uidCheck = uidValidation(uid);

		if (!mailState) {
			setModalState("이메일의 형식이 올바른지 확인해주십시오");
		} else if (!passwordCheck) {
			setModalState(
				"비밀번호는 소문자와 특수기호 1개 이상이 포함되어야 합니다",
			);
		} else if (!uidCheck) {
			setModalState("UID의 형식이 올바른지 확인해주십시오");
		}

		// 모두 true면 Login으로 경로 리다이렉트
		else if (!authCodeCheck) {
			setModalState("인증코드가 올바르지 않습니다");
		} else {
			await signUp(email, authCodeValue, password, uid);
			if (clientRouter) {
				clientRouter?.push("/Login");
			} else {
				redirect("/Login");
			}
		}
	} catch (error) {
		// 예외코드 ,메세지에 따른 예외처리 로직작성
		setModalState("회원가입에 실패했습니다.");
		return false;
	}
}
