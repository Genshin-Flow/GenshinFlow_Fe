import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";

type responseType = NextRequest & {
	email: string;
	password: string;
	authCodeValue: string;
	userUid: string;
};

export async function POST(req: responseType) {
	try {
		const requestBodyData = await req.json();
		const email = requestBodyData.email;
		const password = requestBodyData.password;
		const authCode = requestBodyData.authCodeValue;
		const userUid = requestBodyData.userUid;
		const accessMaxAge = process.env.accessCookieTime;
		const refreshMaxAge = process.env.refreshCookieTime;
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const signUpApi = process.env.signUpApi;

		// 회원가입 관련 환경변수 에러 핸들링
		if (!signUpApi) {
			throw new Error("회원가입 환경변수를 찾을 수 없습니다");
		}

		if (accessMaxAge || refreshMaxAge) {
			throw new Error(
				"토큰의 만료시간 설정을 위한 환경변수를 찾을 수 없습니다.",
			);
		}

		const response = await fetch(`${baseApi}${signUpApi}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				authNum: authCode,
				uid: userUid,
			}),
		});
		const data = await response.json();
		if (!response.ok) throw new Error("signUp failed");
		const accessToken = serialize("AccessToken", data.accessToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: Number(accessMaxAge),
			path: "/",
		});

		const refreshToken = serialize("RefreshToken", data.refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: Number(refreshMaxAge),
			path: "/",
		});
		return NextResponse.json(
			{
				ok: true,
			},
			{
				status: 200,
				headers: {
					"Set-Cookie": `${accessToken},${refreshToken}`,
				},
			},
		);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error);
		}
		return NextResponse.json(
			{
				ok: false,
			},
			{
				status: 400,
			},
		);
	}
}
