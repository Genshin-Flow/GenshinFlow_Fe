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
		const authMailApi = process.env.authMail;
		if (!baseAPi || !authMailApi) {
			throw new Error("인증코드 전송 환경변수를 찾을 수 없습니다.");
		}

		const { emailValue } = await req.json();

		if (!emailValue) {
			throw new Error("이메일이 존재하지 않습니다.");
		}

		const response = await fetch(`${baseAPi}${authMailApi}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: emailValue,
			}),
		});

		if (!response) {
			throw new returnResponse(response);
		}

		return NextResponse.json("성공", {
			status: response.status,
		});
	} catch (error) {
		if (error instanceof returnResponse) {
			return NextResponse.json("불러오기 실패", {
				status: error.response.status,
			});
		} else if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 500 });
		}

		return NextResponse.json(
			"서버에 문제가 발생 하였습니다 잠시후 다시 시도해 주세요",
			{ status: 500 },
		);
	}
}

export { POST };
