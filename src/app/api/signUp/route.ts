import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";

type responseType = NextRequest & {
	email: string;
	password: string;
	authCodeValue: string;
	userUid: string;
};

class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function POST(req: responseType) {
	try {
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

		const { email, password, authNum, userUid } = await req.json();

		const response = await fetch(`${baseApi}${signUpApi}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				authNum,
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
			"회원가입 성공",

			{
				status: 200,
				headers: {
					"Set-Cookie": `${accessToken},${refreshToken}`,
				},
			},
		);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 500 });
		}
		if (error instanceof returnResponse) {
			return NextResponse.json("회원가입에 실패 했습니다.", {
				status: error.response.status,
			});
		}
		return NextResponse.json(
			"서버에 문제가 발생했습니다. 잠시후 다시 시도해주세세요",
			{
				status: 500,
			},
		);
	}
}
