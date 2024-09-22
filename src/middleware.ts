import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// withAuthList : 로그인이 필요한 페이지 url 추가시 ["/Mypage", "추가 url작성"]
// withOutAuthList : 로그인을 안한 상태에서만 필요한 페이지 url 추가시 ["/Login", "추가 url작성"]
const withAuthList: string[] = ["/Mypage"];
const withOutAuthList: string[] = ["/Login"];

export async function middleware(req: NextRequest) {
	let tokenState = false;
	const accessToken = cookies().get("access");
	const refreshToken = cookies().get("refresh");
	const { pathname } = req.nextUrl;

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BaseApi}/api/refreshAccessToken`,
		{
			method: "post",
			body: JSON.stringify({
				accessToken,
				refreshToken,
			}),
		},
	);

	const data = await response.json();
	switch (data.message) {
		case "유효":
			tokenState = true;
			break;
		case "access재발급":
			tokenState = true;
			break;
	}

	if (withOutAuthList.includes(pathname) && tokenState) {
		return NextResponse.redirect(new URL("/", req.url));
	} else if (withAuthList.includes(pathname) && !tokenState) {
		return NextResponse.redirect(new URL("/Login", req.url));
	}
}
// 스프레드 문법이 배포시 오류가 발생하여 수정했습니다.
export const config = {
	matcher: [],
};
