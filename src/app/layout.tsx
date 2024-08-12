import type { Metadata } from "next";
import localfont from "next/font/local";
import QueryProvider from "@/app/QueryProvider";
import "./globals.css";
import JenniperSet from "@/app/nextJenniper/JenniperSet";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
