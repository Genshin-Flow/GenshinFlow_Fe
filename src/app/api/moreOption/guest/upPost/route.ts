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
		const moreOptionBaseApi = process.env.NEXT_PUBLIC_moreOptionGuestBaseApi;
		if (!baseApi || !moreOptionBaseApi) {
			throw new Error("옵션 fetch를 위한 환경변수를 찾을 수 없습니다.");
		}
		const { postId, password } = await req.json();
		const response = await fetch(`${baseApi}${moreOptionBaseApi}/pull-up`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				postId,
				password,
			}),
		});
		console.log(response);
		if (!response.ok) {
			throw new returnResponse(response);
		}
		return NextResponse.json("완료처리 성공", { status: response.status });
	} catch (error) {
		if (error instanceof returnResponse) {
			if (error.response.status === 400) {
				return NextResponse.json("비밀번호가 일치하지 않습니다.", {
					status: error.response.status,
				});
			}
		}
		return NextResponse.json(
			"서버에 문제가 발생 하였습니다. 잠시후 다시 시도해 주세요",
			{ status: 500 },
		);
	}
}

export { POST };
