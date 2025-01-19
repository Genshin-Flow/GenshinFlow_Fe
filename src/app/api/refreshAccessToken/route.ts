import { NextRequest, NextResponse } from "next/server";

class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function POST(req: NextRequest) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const ReRegisterTokenApi = process.env.ReRegisterToken;
		if (!baseApi || !ReRegisterTokenApi) {
			throw new Error("토큰 재발급을 위한 환경변수를 찾을 수 없습니다.");
		}

		// Request Body에서 refreshToken 추출
		const { refreshToken } = await req.json();

		if (!refreshToken) {
			throw new Error("리프레시 토큰이 존재하지 않습니다.");
		}

		const requestHeaders = {
			"content-type": "application/json",
			RefreshToken: refreshToken,
		};

		// API 요청
		const response = await fetch(`${baseApi}${ReRegisterTokenApi}`, {
			method: "POST",
			headers: requestHeaders,
			cache: "no-cache",
		});

		const results = await response.json();
		if (!response.ok) {
			throw new returnResponse(response);
		}
		return NextResponse.json(
			{
				accessToken: results.accessToken,
				refreshToken: results.refreshToken,
			},
			{ status: 200 },
		);
	} catch (error) {
		const err = error as Error;
		if (error instanceof returnResponse) {
			return NextResponse.json(
				{
					message: err.message,
					response: error.response,
				},
				{ status: error.response.status },
			);
		}

		// 엑세스 토큰 갱신에 실패했을 때
		return NextResponse.json(
			{
				message: err.message,
			},
			{ status: 400 },
		);
	}
}
