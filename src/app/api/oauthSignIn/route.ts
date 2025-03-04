import { cookies } from "next/headers";
import { NextResponse } from "next/server";

class unknownUser extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

async function POST(req: Request) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const login = process.env.oauthLoginApi;
		const refreshCookieTime = process.env.refreshCookieTime;
		const accessCookieTime = process.env.accessCookieTime;
		if (!baseApi || !login) {
			throw new Error("oauth 로그인에 필요한 환경변수를 찾을 수 없습니다.");
		}
		// 받아온 이메일을 다시 전달
		const { email, provider } = await req.json();
		const response = await fetch(`${baseApi}${login}/${provider}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
			}),
		});
		if (response.status === 404) {
			throw new unknownUser(response);
		} else if (response.status === 403) {
			throw new unknownUser(response);
		}
		if (!response.ok) {
			throw new Error("토큰을 받아오는데 실패했습니다.");
		}
		const data = await response.json();
		cookies().set("RefreshToken", data.refreshToken, {
			secure: process.env.NODE_ENV === "production",
			httpOnly: true,
			sameSite: "strict",
			path: "/",
			maxAge: Number(refreshCookieTime),
		});
		cookies().set("AccessToken", data.accessToken, {
			secure: process.env.NODE_ENV === "production",
			httpOnly: true,
			sameSite: "strict",
			path: "/",
			maxAge: Number(accessCookieTime),
		});
		// 서버에서 보내주는 메세지에 따라 에러 헨들링
		return NextResponse.json(
			{
				message: "토큰 설정 완료",
			},
			{
				status: 200,
			},
		);
	} catch (error) {
		if (error instanceof unknownUser) {
			return NextResponse.json(
				{ message: "회원이 존재하지 않습니다." },
				{ status: 404 },
			);
		}
		return NextResponse.json(
			{ message: "토큰값을 받아오지 못했습니다" },
			{ status: 400 },
		);
	}
}

export { POST };
