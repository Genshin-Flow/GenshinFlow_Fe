import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { passwordValidation } from "@/features/loginSignUp/auth/passwordCheck/passwordValidation";
import { redirect } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
/**
 *
 * @param email
 * 입력한 이메일
 * @param password
 * 입력한 패스워드
 * @param authCodeValue
 * 인증코드
 * @param uidValue
 * 이용자 UID
 * @param setModalState
 * 모달 상태조작 함수
 * @returns
 */
export async function signUp(
	email: string,
	password: string,
	authCodeValue: string,
	uidValue: string,
	setModalState: (state: string) => void,
	clientRouter?: AppRouterInstance,
) {
	try {
		const mailState = checkMail(email);
		const passwordCheck = passwordValidation(password);
		const localBaseAPi = process.env.NEXT_PUBLIC_LocalBaseApi;

		if (!localBaseAPi) {
			throw new Error("회원가입 환경변수를 찾을 수 없습니다.");
		}

		if (!mailState) {
			setModalState("이메일의 형식이 올바른지 확인해주십시오");
		} else if (!passwordCheck) {
			setModalState(
				"비밀번호는 소문자와 특수기호 1개 이상이 포함되어야 합니다",
			);
		}

		/*
		 client 환경에서는 clientRouter라우터를 이용한 페이지 전환, 서버 사이드 환경에서는
		 redirect를 이용해서 페이지전환
		 */
		if (mailState && passwordCheck && authCodeValue) {
			const response = await fetch(`${localBaseAPi}/api/signUp`, {
				method: "POST",
				body: JSON.stringify({
					email,
					password,
					authCodeValue,
					uidValue,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (response.status !== 200) throw new Error("signUp failed");
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
