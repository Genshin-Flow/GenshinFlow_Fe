import type { Metadata, Viewport } from "next";
import localfont from "next/font/local";
import "/public/css/core.css";
import JenniperSet from "@/app/nextJenniper/JenniperSet";
import Loading from "@/components/Loading";
import QueryProvider from "@/provider/QueryProvider";
import CookieProvider from "@/provider/CookieProvider";
import SessionProvider from "@/provider/SessionProvider";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: "Genshin Flow",
	description: "",
};

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
};

const pretandard = localfont({
	src: "../../public/fonts/PretendardVariable.woff2",
	display: "swap",
	weight: "45 920",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<JenniperSet />
			<body className={pretandard.className}>
				<CookieProvider>
					<QueryProvider>
						<SessionProvider>
							<ToastContainer
								position="top-right"
								autoClose={5000}
								limit={2}
								newestOnTop={false}
								closeOnClick={true}
								pauseOnFocusLoss={false}
								theme="dark"
								transition={Bounce}
							/>
							{children}
							<Loading />
						</SessionProvider>
					</QueryProvider>
				</CookieProvider>
			</body>
		</html>
	);
}
