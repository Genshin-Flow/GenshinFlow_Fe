import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { passwordValidation } from "@/features/loginSignUp/auth/passwordCheck/passwordValidation";
import { redirect } from "next/navigation";
import { authMailCheck } from "@/fetch/authMailCheck/authMailCheck";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
/**
 *
 * @param email
 * 입력한 이메일
 * @param password
 * 입력한 패스워드
 * @param authCodeValue
 * 인증코드
 * @param setModalState
 * 모달 상태조작 함수
 * @returns
 */
export async function signUpInfoCheck(
	email: string,
	password: string,
	authCodeValue: string,
	setModalState: (state: string) => void,
	clientRouter?: AppRouterInstance,
) {
	try {
		const mailState = checkMail(email);
		const passwordCheck = passwordValidation(password);
		const authCodeCheck = authMailCheck(authCodeValue);

		if (!mailState) {
			setModalState("이메일의 형식이 올바른지 확인해주십시오");
		} else if (!passwordCheck) {
			setModalState(
				"비밀번호는 소문자와 특수기호 1개 이상이 포함되어야 합니다",
			);
		}

		// 모두 true면 Login으로 경로 리다이렉트
		else if (!authCodeCheck) {
			setModalState("인증코드가 올바르지 않습니다");
		}

		if (mailState && passwordCheck && (await authCodeCheck)) {
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
