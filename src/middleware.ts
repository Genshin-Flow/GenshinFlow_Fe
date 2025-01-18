import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUserInfo } from "@/fetch/User/getUserInfo/getUserInfo";
import { userProfileType } from "@/stores/userStore";

type tokenType = {
	name: string;
	value: string;
};

// withAuthList : 로그인이 필요한 페이지 url
const withAuthList: string[] = ["/Mypage", "/Admin"];
const withOutAuthList: string[] = ["/Login", "/MobileLogin"];
const widthAdminAuthList: string[] = ["/Admin"];

export async function middleware(req: NextRequest) {
	const accessToken = cookies().get("AccessToken") as tokenType;
	const refreshToken = cookies().get("RefreshToken") as tokenType;
	const res = NextResponse.next();
	const { pathname } = req.nextUrl;

	// 로그인 상태로 로그인을 하면 안 되는 서비스에 접근 하였을떄
	if (withOutAuthList.includes(pathname) && refreshToken) {
		return NextResponse.redirect(new URL("/", req.url));
	}
	// 로그인이 필요한 서비스에 접근하였을때
	else if (withAuthList.includes(pathname) && !accessToken) {
		// accessToken이 없을 때 재발급 시도
		if (!refreshToken) {
			return NextResponse.redirect(new URL("/Login", req.url));
		} else {
			const tokenResponse = await ReRegisterToken(refreshToken.value);

			// ReRegisterToken 실패 시 에러 페이지로 리디렉션
			if (!tokenResponse.ok) {
				return NextResponse.redirect(
					new URL("/error?message=토큰 발급에 실패했습니다.", req.url),
				);
			}
			const tokenResult = await tokenResponse.json();

			setCookie(tokenResult.accessToken, tokenResult.refreshToken, res);
			// 어드민 권한이 필요한 서비스에 요청했을경우
			if (widthAdminAuthList.includes(pathname)) {
				const permissionResponse = await checkAuthPermission(
					tokenResult.accessToken,
				);

				if (!permissionResponse.ok) {
					return NextResponse.redirect(
						new URL(
							`/error?message=권한을 불러오는중 문제가 발생했습니다.`,
							req.url,
						),
					);
				}
				const permissionResult: userProfileType =
					await permissionResponse.json();
				if (permissionResult.role !== "ADMIN") {
					return NextResponse.redirect(
						new URL(`/error?message=접근 권한이 없습니다.`, req.url),
					);
				}
			}
			return res;
		}
	} else if (withAuthList.includes(pathname) && accessToken) {
		if (widthAdminAuthList.includes(pathname)) {
			const permissionResponse = await checkAuthPermission(accessToken.value);

			if (!permissionResponse.ok) {
				return NextResponse.redirect(
					new URL(
						`/error?message=권한을 불러오는중 문제가 발생했습니다.`,
						req.url,
					),
				);
			}
			const permissionResult: userProfileType = await permissionResponse.json();
			if (permissionResult.role !== "ADMIN") {
				return NextResponse.redirect(
					new URL(`/error?message=접근 권한이 없습니다.`, req.url),
				);
			}
		} else {
			return NextResponse.next();
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/Mypage", "/Admin", "/Login", "/MobileLogin"],
};

// 페이지 접근 권한 확인

// AccessToken 재발급 함수
async function ReRegisterToken(refreshToken: string) {
	const requestHeaders = {
		"content-type": "application/json",
		RefreshToken: refreshToken,
	};

	const response = await fetch(`http://localhost:3000/api/refreshAccessToken`, {
		method: "POST",
		headers: requestHeaders,
		body: JSON.stringify({ refreshToken }),
	});

	if (!response.ok) {
		return new Response("토큰 발급에 실패 했습니다", { status: 400 });
	}

	return response;
}

async function setCookie(
	accessToken: string,
	refreshToken: string,
	res: NextResponse<unknown>,
) {
	res.cookies.set("AccessToken", accessToken, {
		path: "/",
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
	});
	res.cookies.set("RefreshToken", refreshToken, {
		path: "/",
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
	});
}

// 유저 정보 확인 (권한 체크)
async function checkAuthPermission(accessToken: string) {
	const response = await getUserInfo(accessToken);

	if (!response.ok) {
		return response;
	}
	return response;
}
