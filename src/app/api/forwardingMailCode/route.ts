import { NextResponse } from "next/server";

async function POST() {
	NextResponse.json("실패", { status: 500 });
}

export { POST };
