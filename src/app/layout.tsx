import type { Metadata, Viewport } from "next";
import localfont from "next/font/local";
import "/public/css/core.css";
import JenniperSet from "@/app/nextJenniper/JenniperSet";
import QueryProvider from "@/provider/QueryProvider";
import SessionProvider from "@/provider/SessionProvider";

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: "",
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
				<SessionProvider>
					<QueryProvider>{children}</QueryProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
