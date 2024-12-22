import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type requestType = NextRequest & {
	refreshToken: string;
};

export async function POST(request: requestType) {
	try {
		const refreshCookieTime = process.env.refreshCookieTime;
		if (!refreshCookieTime) throw new Error("refreshCookieTime이 없습니다.");
		const refreshToken = await request.json();
		if (refreshToken === undefined) throw new Error("refreshToken이 없습니다.");
		cookies().set("refreshToken", refreshToken, {
			secure: true,
			httpOnly: true,
			maxAge: Number(refreshCookieTime),
		});
		return NextResponse.json(
			{
				ok: true,
				message: "refreshToken 설정 완료",
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
