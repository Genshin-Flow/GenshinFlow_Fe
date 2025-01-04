import { cookies } from "next/headers";
import { NextResponse } from "next/server";

class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function POST(req: Request) {
	try {
		const { email, uid, provider } = await req.json();
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const oauthSignUpApi = process.env.oauthSignupApi;
		const response = await fetch(`${baseApi}${oauthSignUpApi}/${provider}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				uid,
			}),
		});

		if (!response.ok) {
			throw new returnResponse(response);
		}
		const data = await response.json();
		cookies().set("AccessToken", data.accessToken);
		cookies().set("RefreshToken", data.refreshToken);
		return NextResponse.json({
			status: response.status,
			message: "회원가입 성공",
		});
	} catch (error) {
		if (error instanceof returnResponse) {
			return error.response;
		}
	}
}
