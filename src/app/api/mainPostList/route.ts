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
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const mainPostAPi = process.env.NEXT_PUBLIC_mainPostListApi;
		const { page, size } = await req.json();
		console.log("weqwewqe");
		console.log(mainPostAPi || baseApi);
		if (!baseApi || !mainPostAPi) {
			throw new Error("메인페이지를 불러오기 위한 환경변수가 없습니다.");
		}
		console.log("sdfsdfsd");
		const response = await fetch(
			`${baseApi}${mainPostAPi}?size=${size}&page=${page}`,
			{
				method: "get",
			},
		);
		if (!response.ok) {
			throw new returnResponse(response);
		}
		const result = await response.json();
		console.log(result);
		return NextResponse.json(
			{ message: "성공", mainPostList: result },
			{ status: response.status },
		);
	} catch (error) {
		if (error instanceof returnResponse) {
			return NextResponse.json("불러오기 실패", {
				status: error.response.status,
			});
		}
		return NextResponse.json(
			"서버에 문제가 발생 하였습니다. 잠시후 다시 시도해 주세요",
			{ status: 500 },
		);
	}
}

export { POST };
