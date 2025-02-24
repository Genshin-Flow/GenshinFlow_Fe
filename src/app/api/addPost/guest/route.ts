import { NextRequest, NextResponse } from "next/server";

class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

async function POST(req: NextRequest) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const addPostApi = process.env.NEXT_PUBLIC_moreOptionGuestBaseApi;
		if (!baseApi || !addPostApi) {
			throw new Error("구인글 등록에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const { questCategory, content, password, autoCompleteTime, uid } =
			await req.json();
		const response = await fetch(`${baseApi}${addPostApi}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				uid,
				questCategory,
				content,
				password,
				autoCompleteTime,
			}),
		});
		if (!response.ok) {
			throw new returnResponse(response);
		}
		return NextResponse.json("성공", { status: response.status });
	} catch (error) {
		if (error instanceof returnResponse) {
			return NextResponse.json(error.message, {
				status: error.response.status,
			});
		} else if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 400 });
		}
		return NextResponse.json(
			"서버오류가 발생 했습니다. 잠시후 다시 시도해 주세요",
			{ status: 500 },
		);
	}
}

export { POST };
