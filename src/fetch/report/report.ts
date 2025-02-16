import { FieldValues } from "react-hook-form";
import { getAccessToken } from "@/fetch/Token/getAccessToken/getAccessToken";

class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function reportPost(
	reason: string,
	images: string[],
	data?: FieldValues,
	targetUserEmail?: string,
	setIsLogin?: (value: boolean) => void,
) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const reportApi = process.env.NEXT_PUBLIC_reportUser;
		if (!baseApi || !reportApi) {
			throw new Error("신고를 위한 환경변수를 찾을 수 없습니다.");
		}
		if (!targetUserEmail) {
			throw new Error("유저의 이메일을 찾을 수 없습니다.");
		}
		const tokenResponse = await getAccessToken(setIsLogin);
		if (!tokenResponse.ok) {
			throw new returnResponse(tokenResponse);
		}
		const tokenResult = await tokenResponse.json();
		const currentReason = data && data.etc ? data.etc : reason;
		const response = await fetch(`${baseApi}${reportApi}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokenResult.accessToken}`,
			},
			body: JSON.stringify({
				targetUserEmail,
				reason: currentReason,
				images,
			}),
		});
		if (!response.ok) {
			throw new returnResponse(response);
		}
		return response;
	} catch (error) {
		const err = error as Error;
		if (error instanceof returnResponse) {
			throw error.response;
		}
		return new Response(err.message, { status: 500 });
	}
}
