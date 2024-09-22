import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const withAuthList: string[] = ["/Mypage"];
const withOutAuthList: string[] = ["/Login"];

export async function middleware(req: NextRequest) {
	let tokenState = false;
	const accessToken = cookies().get("access")?.value;
	const refreshToken = cookies().get("refresh")?.value;
	const { pathname } = req.nextUrl;

	// Base URL 체크 및 에러 방지
	if (!process.env.NEXT_PUBLIC_BaseApi) {
		throw new Error("Base API URL is not defined in environment variables.");
	}

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BaseApi}/api/refreshAccessToken`,
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				accessToken,
				refreshToken,
			}),
		},
	);

	const data = await response.json();
	switch (data.message) {
		case "유효":
		case "access재발급":
			tokenState = true;
			break;
	}

	if (withOutAuthList.includes(pathname) && tokenState) {
		return NextResponse.redirect(new URL("/", req.nextUrl.origin));
	} else if (withAuthList.includes(pathname) && !tokenState) {
		return NextResponse.redirect(new URL("/Login", req.nextUrl.origin));
	}
}

export const config = {
	matcher: [],
};
