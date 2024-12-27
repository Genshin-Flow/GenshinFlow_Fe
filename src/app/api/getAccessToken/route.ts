import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const accessToken = req.cookies.get("accessToken")?.value;
		if (!accessToken) throw new Error("accessToken이 없습니다.");
		return NextResponse.json({ message: "성공", accessToken }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "실패" }, { status: 400 });
	}
}
