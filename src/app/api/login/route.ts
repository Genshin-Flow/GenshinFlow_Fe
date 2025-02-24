import { NextResponse } from "next/server";

class returnState extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

async function POST(req: Request) {
	try {
		const baseAPi = process.env.NEXT_PUBLIC_BaseApi;
		const loginApi = process.env.signIn;

		if (!baseAPi || !loginApi) {
			throw new Error("로그인 요청에 필요한 환경변수를 찾을 수 없습니다.");
		}
		const { email, password } = await req.json();
		console.log(email, password);
		// 로그인 api
		const response = await fetch(`${baseAPi}${loginApi}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		console.log(response);
		if (!response.ok) throw new returnState(response);
		const data = await response.json();
		return NextResponse.json(
			{ ...data },
			{
				status: response.status,
			},
		);
	} catch (err) {
		if (err instanceof returnState) {
			return NextResponse.json(
				{ ok: false },
				{
					status: err.response.status,
				},
			);
		}
		return NextResponse.json(
			"서버에 오류가 발생했습니다. 잠시후 다시 시도해 주세요",
			{
				status: 500,
			},
		);
	}
}

export { POST };
