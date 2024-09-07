import { NextResponse } from "next/server";
export async function POST(req: Request) {
	try {
		// 받아온 이메일을 다시 전달
		const { email } = await req.json();
		const response = await fetch(`${process.env.login}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
			}),
		});
		const data = await response;
		// 서버에서 보내주는 메세지에 따라 에러 헨들링
		return NextResponse.json({ message: "성공", token: data }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "토큰값을 받아오지 못했습니다" },
			{ status: 400 },
		);
	}
}
