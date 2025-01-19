import { NextRequest, NextResponse } from "next/server";
import { reissueToken } from "@/fetch/Token/reissureToken/reissureToken";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
	const accessToken = req.cookies.get("AccessToken")?.value;
	const refreshToken = req.cookies.get("RefreshToken")?.value;

	try {
		if (!accessToken) throw new Error("AccessToken이 없습니다.");
		return NextResponse.json({ message: "성공", accessToken }, { status: 200 });
	} catch (error) {
		const err = error as Error;
		if (refreshToken) {
			const response = await reissueToken(refreshToken);
			const result = await response.json();

			cookies().set("AccessToken", result.accessToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				path: "/",
			});
			cookies().set("AccessToken", result.refreshToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				path: "/",
			});
			return NextResponse.json(
				{ message: err.message, accessToken: result.accessToken },
				{ status: response.status },
			);
		}
		return NextResponse.json({ message: err.message }, { status: 400 });
	}
}
