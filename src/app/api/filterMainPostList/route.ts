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
		const filterPostApi = process.env.NEXT_PUBLIC_mainPostListFilterApi;
		const { page, size, region, questCategory, worldLevel } = await req.json();
		if (!baseApi || !filterPostApi) {
			throw new Error("메인페이지를 불러오기 위한 환경변수가 없습니다.");
		}
		const response = await fetch(
			`${baseApi}${filterPostApi}?&page=${page}&size=${size}&questCategory=${questCategory}&region=${region}&worldLevel=${worldLevel}`,
			{
				method: "get",
			},
		);
		if (!response.ok) {
			throw new returnResponse(response);
		}
		const result = await response.json();
		return NextResponse.json(
			{ message: "성공", ...result },
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
