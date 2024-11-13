import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

type requestType = NextRequest & {
	email: string;
	password: string;
};

export async function POST(req: requestType) {
	try {
		const accessCookieTime = process.env.accessCookieTime as unknown as string;
		const refreshCookieTime = process.env
			.refreshCookieTime as unknown as string;
		const baseAPi = process.env.NEXT_PUBLIC_BASE_API;
		const loginApi = process.env.login;
		if (!accessCookieTime || !refreshCookieTime) {
			throw new Error(
				"쿠키 만료시간에 필요한 시간을 환경변수에서 찾을 수 없습니다.",
			);
		}
		if (!baseAPi || !loginApi) {
			throw new Error("로그인 요청에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const requestBody = await req.json();
		const email = requestBody.email;
		const password = requestBody.password;
		// 로그인 api
		const response = await fetch(`${baseAPi}${loginApi}`, {
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (response.status !== 200) throw new Error("Failed to Login");
		const data = await response.json();
		const accessToken = serialize("AccessToken", data.accessToken, {
			httpOnly: true,
			secure: true,
			maxAge: Number(accessCookieTime),
		});
		const refreshToken = serialize("RefreshToken", data.refreshToken, {
			httpOnly: true,
			secure: true,
			maxAge: Number(refreshCookieTime),
		});
		return NextResponse.json(
			{ ok: true },
			{
				status: 200,
				headers: {
					"Set-Cookie": `${accessToken},${refreshToken}`,
				},
			},
		);
	} catch (err) {
		if (err instanceof Error) {
			console.error(err);
		}
		return NextResponse.json(
			{ ok: false },
			{
				status: 400,
			},
		);
	}
}
