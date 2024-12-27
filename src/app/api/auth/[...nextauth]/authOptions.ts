import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";

const googleClientId = process.env.GoogleClientID;
const googleSecretPw = process.env.GoogleSecretPw;
const naverClientID = process.env.NaverClientID;
const naverSecretPw = process.env.NaverSecretPw;
const discordClientID = process.env.DiscordClientID;
const discordSecretPw = process.env.DiscordSecretPw;

if (!googleClientId || !googleSecretPw)
	throw new Error("구글 oauth 환경변수를 찾을 수 없습니다.");
if (!naverClientID || !naverSecretPw)
	throw new Error("네이버 oauth 환경변수를 찾을 수 없습니다.");
if (!discordClientID || !discordSecretPw)
	throw new Error("디스코드 oauth 환경변수를 찾을 수 없습니다.");

declare module "next-auth" {
	interface Session {
		user: {
			name?: string | null;
			email: string | "";
			image?: string | null;
			provider: string | "";
			status: number | 0;
			responseOk: boolean;
		};
	}

	interface Token {
		email: string;
		provider: string;
		status: number;
		responseOk: boolean;
	}

	interface User {
		email: string;
		provider: string;
		status: number;
		responseOk: boolean;
	}
}
declare module "next-auth/jwt" {
	interface JWT {
		email: string;
		provider: string;
		status: number;
		responseOk: boolean;
	}
}

const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: googleClientId,
			clientSecret: googleSecretPw,
		}),
		NaverProvider({
			clientId: naverClientID,
			clientSecret: naverSecretPw,
		}),
		DiscordProvider({
			clientId: discordClientID,
			clientSecret: discordSecretPw,
		}),
	],
	pages: {
		signIn: "/Login",
		error: "/error",
	},
	session: {
		maxAge: Number(process.env.oauthSessionTime),
	},
	callbacks: {
		// OAuth 로그인 처리 로직
		signIn: async ({ user, account }) => {
			try {
				const oauthLoginApi = process.env.NEXT_PUBLIC_LocalOauthLoginApi;
				const baseApi = process.env.NEXT_PUBLIC_BaseApi;
				const LocalBaseApi = process.env.NEXT_PUBLIC_LocalBaseApi;
				if (!oauthLoginApi || !baseApi || !LocalBaseApi) {
					throw new Error("Oauth 로그인 API를 찾을 수 없습니다.");
				}

				// URL 구성 수정
				const apiUrl = `${LocalBaseApi}${oauthLoginApi}`;

				// 서버 API로 요청 보내기
				const response = await fetch(apiUrl, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: user.email,
						provider: account?.provider,
					}),
				});
				if (response.ok) {
					user.status = response.status;
					user.responseOk = true;
					return true; // 로그인 성공
				}

				// 계정이 없는 경우
				if (response.status === 404) {
					user.status = response.status;
					user.responseOk = false;
					return true;
				}
				// 이미 가입된 이메일
				else if (response.status === 403) {
					user.status = response.status;
					user.responseOk = false;
					return "/error?errorMessage=이미 가입된 계정입니다.";
				}
				// 기타 에러
				else if (!response.ok) {
					throw new Error("Oauth 로그인에 실패했습니다.");
				}

				// account 객체에 토큰 설정
				if (account && user.email) {
					account.email = user.email;
				}
			} catch (error) {
				if (error instanceof Error) {
					const encodedError = encodeURIComponent((error as Error).toString());
					return `/error?data=${encodedError}`;
				}
				return "/error";
			}
			// 어떤 예상치 못한 상황이 발생시 메인 페이지 이동
			return "/";
		},

		// JWT 토큰에 AccessToken 및 RefreshToken 저장
		async jwt({ token, user, account, trigger, session }) {
			if (token && user && user.email) {
				token.email = user.email;
				token.provider = account?.provider || "";
				token.status = user.status;
				token.responseOk = user.responseOk;
			}
			if (trigger === "update" && session !== null) {
				token.email = "";
				token.provider = "";
				token.status = 0;
				token.responseOk = false;
			}
			return token;
		},

		// 세션에 AccessToken 및 RefreshToken 추가
		async session({ session, token, trigger }) {
			if (token.email) {
				const oauthSessionTime = process.env.oauthSessionTime;
				if (!oauthSessionTime) {
					throw new Error("Oauth 세션 지속시간을 찾을 수 없습니다.");
				}

				session.user = {
					email: token.email,
					provider: token.provider,
					status: token.status,
					responseOk: token.responseOk,
				};
			}
			if (trigger === "update" && session !== null) {
				session.user = {
					email: "",
					provider: "",
					status: 0,
					responseOk: false,
				};
			}
			return session;
		},
	},
};

export { authOptions };
