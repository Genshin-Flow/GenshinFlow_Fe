//  이메일 정규식
export const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
// 비밀번호 정규식 문자 + 숫자 사용가능 특수
export const passwordPattern =
	/^(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`])[A-Za-z0-9!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]{8,}$/;
// uid 숫자만 허용하는 정규식
export const uidPattern = /^[0-9]/g;

// 포스트 패스워드 문자, 숫자, 기호 중 두 가지 이상을 포함하고 8자 이상 정규식
export const modalPasswordRegular =
	/^(?=(.*[A-Za-z])?(.*\d))(?=(.*[A-Za-z])?(.*[\W_])).{8,}$/;

// 딱 한 숫자만 허용( worldLevel 사용 )
export const modalWorldLevelRegular = /^[1-9]$/;

// input창의 XSS 공격 방지를 위한 <>태그 감지
export const filterTextScriptTag = /[<>]/;
