import { NextResponse } from "next/server";

class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

async function POST(req: Request) {
	try {
		const baseAPi = process.env.NEXT_PUBLIC_BaseApi;
		const myInfoApi = process.env.myInfoApi;
		if (!baseAPi || !myInfoApi) {
			throw new Error("내 정보를 불러오기 위한 환경변수를 찾을 수 없습니다.");
		}
		const accessToken = req.headers.get("Authorization");
		if (!accessToken) {
			throw new Error("엑세스 토큰을 찾을 수 없습니다. 다시 로그인 해주세요");
		}
		const response = await fetch(`${baseAPi}${myInfoApi}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (!response.ok) {
			throw new returnResponse(response);
		}
		const result = await response.json();
		return NextResponse.json({ ...result }, { status: response.status });
	} catch (error) {
		if (error instanceof returnResponse) {
			return NextResponse.json("실패", { status: error.response.status });
		} else if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 500 });
		}
		return NextResponse.json(
			"서버에 문제가 발생했습니다 잠시후 다시 시도해주세요",
			{ status: 500 },
		);
	}
}

export { POST };
