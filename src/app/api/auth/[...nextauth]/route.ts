import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import { cookies } from "next/headers";
declare module "next-auth" {
	interface Session {
		user: {
			email: string;
		};
	}

	interface JWT {
		email: string;
		webToken?: string; // JWT에 webToken 추가
	}
}

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GoogleClientID || "",
			clientSecret: process.env.GoogleSecretPw || "",
		}),
		NaverProvider({
			clientId: process.env.NaverClientID || "",
			clientSecret: process.env.NaverSecretPw || "",
		}),
		DiscordProvider({
			clientId: process.env.DiscordClientID || "",
			clientSecret: process.env.DiscordSecretPw || "",
		}),
	],
	pages: {
		signIn: "/Login",
		error: "/Login",
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.email = user.email;
			}
			return token;
		},
		session: async ({ token, session }) => {
			if (token.email) {
				session.user.email = token.email;
			}

			return session;
		},
		// oauth 로그인시 서버 api로 데이터 전송로직
		signIn: async ({ user }) => {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_BaseApi}/api/oauthCookie`,
					{
						method: "post",
						body: JSON.stringify({
							email: user.email,
						}),
					},
				);
				const data = await response.json();
				cookies().set("data", data.token, {
					httpOnly: true,
					sameSite: true,
					secure: true,
					maxAge: 3600,
				});
				return "/";
			} catch (error) {
				return `/error?data=${error}`;
			}
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
