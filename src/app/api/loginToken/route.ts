import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function POST(req: Request) {
	try {
		const { emailValue, passwordValue } = await req.json();

		const response = await fetch(`${process.env.login}`, {
			method: "post",
			headers: {
				"content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
				password: passwordValue,
			}),
		});
		// 쿠키의 데이터를 response의 json 데이터로 넣기 현재는 확인을 위한 임시 데이터
		const data = await response.json();
		// 리프레시 토큰
		cookies().set("refresh", "access", {
			httpOnly: true,
			sameSite: true,
			secure: true,
			maxAge: 3600,
		});
		// 엑세스 토큰
		cookies().set("access", "refresh", {
			httpOnly: true,
			sameSite: true,
			secure: true,
			maxAge: 600,
		});
		return NextResponse.json(
			{
				accessToken: "access",
				refresh: "refresh",
			},
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{
				accessToken: "",
				refresh: "",
			},
			{ status: 400 },
		);
	}
}

export { POST };
