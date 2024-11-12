import { NextResponse } from "next/server";
import { cookies } from "next/headers";

async function POST(req: Request) {
	try {
		const { accessToken, refreshToken } = await req.json();
		const response = await fetch(`${process.env.accessToken}`, {
			method: "post",
			body: JSON.stringify({
				accessToken,
				refreshToken,
			}),
		});
		const data = await response;
		// 리프레시 토큰의 지속시간이 다 되었을때 에러 핸들링도 필요
		if ("조건") {
			return NextResponse.json({ message: "유효" }, { status: 200 });
		} else if ("accessToken을 새롭게 받았을때") {
			cookies().delete("access");
			cookies().set("access", "accessToken", {
				httpOnly: true,
				sameSite: true,
				secure: true,
				maxAge: 600,
			});
			return NextResponse.json({ message: "access재발급" }, { status: 200 });
		} else {
			// 리프레시 토큰도 유효기간이 지났을때
			return NextResponse.json(
				{ message: "리프레시 토큰 만료" },
				{ status: 200 },
			);
		}
	} catch (error) {
		// 엑세스 토큰 갱신에 실패했을때
		return NextResponse.json(
			{
				message: "토큰 갱신실패",
			},
			{ status: 400 },
		);
	}
}

export { POST };
