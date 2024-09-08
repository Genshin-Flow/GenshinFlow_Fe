import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import { cookies } from "next/headers";

const authOptions: NextAuthOptions = {
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
		error: "/error",
	},
	callbacks: {
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

export { authOptions };
