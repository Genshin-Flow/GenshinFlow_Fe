import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUserInfo } from "@/fetch/getUserInfo/getUserInfo";
type tokenType = {
	name: string;
	value: string;
};
import { reissueToken } from "@/fetch/reissureToken/reissureToken";

// withAuthList : 로그인이 필요한 페이지 url: 추가시 ["/Mypage", "추가 url작성"]
// withOutAuthList : 로그인을 안한 상태에서만 필요한 페이지 url: 추가시 ["/Login", "추가 url작성"]
// widthAdminAuthList : 어드민 권한을 가진 유저만 접근 가능한 페이지 url: 추가시 ["/Login", "추가 url작성"]
const withAuthList: string[] = ["/Mypage"];
const withOutAuthList: string[] = ["/Login", "/MobileLogin"];
const widthAdminAuthList: string[] = ["/Admin"];

export async function middleware(req: NextRequest) {
	try {
		const accessToken = cookies().get("AccessToken") as tokenType;
		const refreshToken = cookies().get("RefreshToken") as tokenType;
		const accessTokenValue = accessToken && accessToken.value;
		const refreshTokenValue = refreshToken && refreshToken.value;
		const { pathname } = req.nextUrl;
		const returnUserRedirectUrl = await userPageController(
			req,
			pathname,
			accessTokenValue,
			refreshTokenValue,
		);
		const returnAdminRedirectUrl = await adminPageController(
			req,
			pathname,
			accessTokenValue,
			refreshTokenValue,
		);
		if (returnUserRedirectUrl || returnAdminRedirectUrl) {
			return returnUserRedirectUrl || returnAdminRedirectUrl;
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error(error);
		}
	}
}
// 미들웨어를 거치를 URL을 이곳에 등록하면 됩니다 ex) /Mypage,/Login
export const config = {
	matcher: ["/Mypage", "/Login", "/MobileLogin"],
};

async function userPageController(
	req: NextRequest,
	pathname: string,
	accessTokenValue: string,
	refreshTokenValue: string,
) {
	//  로그아웃이 필요한 서비스에 접근하려할때
	if (withOutAuthList.includes(pathname) && accessTokenValue) {
		return NextResponse.redirect(new URL("/", req.url));
	}
	// 로그인이 필요한 서비스에 접근하려할때
	else if (withAuthList.includes(pathname) && !accessTokenValue) {
		// 엑세스 토큰은 없지만 리프레시 토큰은 있을때 재발급 로직 실행 ( 로그인으로 리다이렉트 하지 않기 위한 if 작성 )
		if (refreshTokenValue) {
			await reissueToken(refreshTokenValue);
		} else {
			return NextResponse.redirect(new URL("/Login", req.url));
		}
	}
}

async function adminPageController(
	req: NextRequest,
	pathname: string,
	accessTokenValue: string,
	refreshTokenValue: string,
) {
	// 관리자 페이지에 접속하려 할시 토큰 및 인증권한 체크
	if (widthAdminAuthList.includes(pathname) && !accessTokenValue) {
		// 엑세스 토큰이 없을시 재발급요청
		if (refreshTokenValue) {
			await reissueToken(refreshTokenValue);
		}

		const accessToken = cookies().get("AccessToken") as tokenType;
		// 	리프레시 토큰으로 얻어온 엑세스 토큰 혹은 기존의 엑세스 토큰을 이용하여 유저 정보를 조회해 등급을 확인
		if (accessToken) {
			const userInfo = await getUserInfo();
			if (userInfo.role !== "관리자") {
				// 관리자가 아닐시 redirect
				return NextResponse.redirect(new URL("/", req.url));
			}
		} else {
			return NextResponse.redirect(new URL("/Login", req.url));
		}
	}
}
