import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
type tokenType = {
	name: string;
	value: string;
};
// withAuthList : 로그인이 필요한 페이지 url 추가시 ["/Mypage", "추가 url작성"]
// withOutAuthList : 로그인을 안한 상태에서만 필요한 페이지 url 추가시 ["/Login", "추가 url작성"]
const withAuthList: string[] = [""];
const withOutAuthList: string[] = [""];

export async function middleware(req: NextRequest) {
	const token = (await cookies().get("accessToken")) as tokenType;

	const { pathname } = req.nextUrl;

	if (withOutAuthList.includes(pathname) && token) {
		return NextResponse.redirect(new URL("/", req.url));
	} else if (withAuthList.includes(pathname) && !token) {
		return NextResponse.redirect(new URL("/Login", req.url));
	}
}
// 스프레드 문법이 배포시 오류가 발생하여 수정했습니다.
export const config = {
	matcher: ["/Mypage", "/Login"],
};
