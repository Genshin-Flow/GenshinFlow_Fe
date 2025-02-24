import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function GET() {
	try {
		cookies().delete("AccessToken");
		cookies().delete("RefreshToken");
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const signOutApi = process.env.signOut;
		if (!signOutApi) {
			throw new Error("로그아웃을 하기 위한 환경변수를 찾을 수 업습니다.");
		}
		const response = await fetch(`${baseApi}${signOutApi}`);
		return NextResponse.json(
			{
				message: "로그아웃 성공",
			},
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: "로그아웃 실패",
			},
			{ status: 400 },
		);
	}
}
