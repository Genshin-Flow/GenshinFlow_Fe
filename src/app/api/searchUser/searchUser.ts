import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function adminSearchUser(req: NextRequest) {
	try {
		const baseApi = process.env.NEXT_PUBLIC_BaseApi;
		const adminSearchUserResult = process.env.adminSearchUserResult;
		if (baseApi || adminSearchUserResult) {
			throw new Error(
				"어드민 페이지 유저 검색에 필요한 Next Server 환경변수를 찾지 못했습니다.",
			);
		}
		const cookieStore = cookies();
		const accessToken = cookieStore.get("AccessToken");
		const refreshToken = cookieStore.get("RefreshToken");
		const { userId } = await req.json();
		if (accessToken) {
			const response = await fetch(`${baseApi}/${adminSearchUserResult}`, {
				method: "POST",
				headers: {
					Authorization: `${accessToken}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ userId }),
			});
			if (response.status !== 200) {
				// 명셍 따라 좀더 세분화된 에러 핸들링 필요
				throw new Error(
					"올바른 요청이 아니거나 검색결과 값이 존재하지 않습니다.",
				);
			}
			const data = await response.json();
			return NextResponse.json({ ok: true, data }, { status: 200 });
		} else if (refreshToken) {
		} else {
			// 로그인이 안 되어 있을시 redirect
			return NextResponse.redirect(new URL("/Login", req.url));
		}
		// merge 이후 reissueToken 함수 작성 필요
	} catch (err) {
		console.error(err);
		NextResponse.json({ ok: false }, { status: 400 });
	}
}
