import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

type tokenType = {
	name: string;
	value: string;
};
// withAuthList : 로그인이 필요한 페이지 url 추가시 ["/Mypage", "추가 url작성"]
// withOutAuthList : 로그인을 안한 상태에서만 필요한 페이지 url 추가시 ["/Login", "추가 url작성"]
const withAuthList: string[] = ["/Mypage"];
const withOutAuthList: string[] = ["/Login"];

const withAuth = (req: NextRequest, token: tokenType) => {
	const url = req.nextUrl.clone();

	if (!token) {
		url.pathname = "/Login";
		return NextResponse.redirect(url);
	}
};

const withOutAuth = (req: NextRequest, token: tokenType) => {
	const url = req.nextUrl.clone();

	if (token) {
		url.pathname = "/";
		return NextResponse.redirect(url);
	}
};

export async function middleware(req: NextRequest) {
	const token = (await cookies().get("data")) as tokenType;
	const { pathname } = req.nextUrl;

	const isWithAuth = withAuthList.includes(pathname);
	const isWithOutAuth = withOutAuthList.includes(pathname);

	if (isWithAuth) return withAuth(req, token);
	else if (isWithOutAuth) return withOutAuth(req, token);
}

export const config = {
	matcher: [...withAuthList, ...withOutAuthList],
};
