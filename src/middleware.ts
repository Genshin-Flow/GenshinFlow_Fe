import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
type tokenType = {
	name: string;
	value: string;
};
import { reissueToken } from "@/fetch/reissureToken/reissureToken";
// withAuthList : 로그인이 필요한 페이지 url 추가시 ["/Mypage", "추가 url작성"]
// withOutAuthList : 로그인을 안한 상태에서만 필요한 페이지 url 추가시 ["/Login", "추가 url작성"]
const withAuthList: string[] = ["/Mypage"];
const withOutAuthList: string[] = ["/Login", "/MobileLogin"];

export async function middleware(req: NextRequest) {
	const accessToken = cookies().get("AccessToken") as tokenType;
	const refreshToken = cookies().get("RefreshToken") as tokenType;
	const accessTokenValue = accessToken && accessToken.value;
	const refreshTokenValue = refreshToken && refreshToken.value;
	const { pathname } = req.nextUrl;
	//  로그아웃이 필요한 서비스에 접근하려할때
	if (withOutAuthList.includes(pathname) && accessTokenValue) {
		return NextResponse.redirect(new URL("/", req.url));
	}
	// 로그인이 필요한 서비스에 접근하려할때
	else if (withAuthList.includes(pathname) && !accessTokenValue) {
		// 엑세스 토큰은 없지만 리프레시 토큰은 있을때 재발급 로직 실행
		if (refreshTokenValue) {
			reissueToken(refreshTokenValue);
		} else {
			return NextResponse.redirect(new URL("/Login", req.url));
		}
	}
}
// 미들웨어를 거치를 URL을 이곳에 등록하면 됩니다 ex) /Mypage,/Login
export const config = {
	matcher: ["/Mypage", "/Login", "/MobileLogin"],
};
