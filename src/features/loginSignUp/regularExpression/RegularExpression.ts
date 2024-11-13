//  이메일 정규식
export const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
// 비밀번호 정규식 문자 + 숫자 사용가능 특수
export const passwordPattern =
	/^(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`])[A-Za-z0-9!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]{8,}$/;
// uid 숫자만 허용하는 정규식
export const uidPattern = /^[0-9]+$/;
