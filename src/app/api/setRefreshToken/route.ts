import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type requestType = NextRequest & {
	refreshToken: string;
	accessToken: string;
};

export async function POST(request: requestType) {
	try {
		const refreshCookieTime = process.env.refreshCookieTime;
		const accessCookieTime = process.env.accessCookieTime;
		if (!refreshCookieTime || !accessCookieTime)
			throw new Error("토큰 만료 시간이 없습니다.");
		const { refreshToken, accessToken } = await request.json();
		if (refreshToken === undefined) throw new Error("refreshToken이 없습니다.");
		if (accessToken === undefined) throw new Error("accessToken이 없습니다.");
		cookies().set("refreshToken", refreshToken, {
			secure: true,
			httpOnly: true,
			sameSite: "strict",
			maxAge: Number(refreshCookieTime),
		});
		cookies().set("accessToken", accessToken, {
			secure: true,
			httpOnly: true,
			sameSite: "strict",
			maxAge: Number(accessCookieTime),
		});
		return NextResponse.json(
			{
				ok: true,
				message: "토큰 설정 완료",
			},
			{
				status: 200,
			},
		);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json(
				{
					ok: false,
					message: error.message,
				},
				{
					status: 500,
				},
			);
		}
	}
}
