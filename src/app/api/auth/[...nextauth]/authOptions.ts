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
				if (response.status !== 200) throw new Error("oauth login failed");
				return "/";
			} catch (error) {
				return `/error?data=${error}`;
			}
		},
	},
};

export { authOptions };
