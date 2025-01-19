import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function GET() {
	try {
		cookies().delete("AccessToken");
		cookies().delete("RefreshToken");
		return NextResponse.json(
			{
				message: "로그아웃 성공",
			},
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "로그아웃 실패패",
			},
			{ status: 400 },
		);
	}
}
