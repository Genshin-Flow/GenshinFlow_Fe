import { checkMail } from "@/features/loginSignUp/auth/emailCheck/emailValidation";
import { passwordValidation } from "@/features/loginSignUp/auth/passwordCheck/passwordValidation";
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

class SignUpError extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function signUp(
	email: string,
	password: string,
	authCodeValue: string,
	uidValue: string,
) {
	try {
		const mailState = checkMail(email);
		const passwordCheck = passwordValidation(password);
		const localBaseAPi =
			process.env.NODE_ENV === "production"
				? ""
				: process.env.NEXT_PUBLIC_LocalBaseApi;
		const SignUp = process.env.NEXT_PUBLIC_signUpApi;

		if (!SignUp) {
			throw new Error("회원가입 환경변수를 찾을 수 없습니다.");
		}

		if (!mailState) {
			throw new Error("이메일의 형식이 올바른지 확인해주십시오");
		}

		if (!passwordCheck) {
			throw new Error(
				"비밀번호는 소문자와 특수기호 1개 이상이 포함되어야 합니다",
			);
		}

		if (mailState && passwordCheck && authCodeValue) {
			const response = await fetch(`${localBaseAPi}${SignUp}`, {
				method: "POST",
				body: JSON.stringify({
					email,
					password,
					authNum: authCodeValue,
					uid: Number(uidValue),
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new SignUpError(response);
			}

			return new Response("회원가입에 성공 했습니다.", {
				status: response.status,
			});
		}
	} catch (error) {
		if (error instanceof SignUpError) {
			return new Response("회원가입에 실패 했습니다.", {
				status: error.response.status,
			});
		}
		if (error instanceof Error) {
			return new Response(error.message, { status: 500 });
		}
		return new Response(
			"서버에 문제가 발생했습니다. 잠시후 다시 시도해주세요",
			{ status: 500 },
		);
	}
}
