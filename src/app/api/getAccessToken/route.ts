import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const accessToken = req.cookies.get("AccessToken")?.value;
		if (!accessToken) throw new Error("AccessToken이 없습니다.");
		return NextResponse.json({ message: "성공", accessToken }, { status: 200 });
	} catch (error) {
		const err = error as Error;
		return NextResponse.json({ message: err.message }, { status: 400 });
	}
}
