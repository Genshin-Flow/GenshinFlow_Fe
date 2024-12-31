"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "../../styled-system/jsx";
import Tab from "@/features/matching/components/Tab/";
import Sidebar from "@/features/matching/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAccessToken } from "@/fetch/Token/getAccessToken/getAccessToken";

export default function Home() {
	const [mounted, setMounted] = useState(false);
	const mobileWidth = process.env.NEXT_PUBLIC_startMobileWidth;
	if (!mobileWidth) throw new Error("모바일 너비 설정이 없습니다.");
	const isMobile = useMediaQuery({
		query: `(max-width:${mobileWidth}px)`,
	});

	// 컴포넌트가 마운트 되기 전에는 렌더링 하지 않음
	useEffect(() => {
		setMounted(true);
		getAccessToken();
	}, []);

	if (!mounted) {
		return null; // 또는 로딩 컴포넌트
	}

	return (
		<Main className="naviaBg">
			<Header isMobile={isMobile} />
			{isMobile ? <Mobile /> : <Pc />}
			<Footer isMobile={isMobile} />
		</Main>
	);
}

function Pc() {
	return (
		<Container>
			<Tab />
			<Sidebar />
		</Container>
	);
}

function Mobile() {
	return (
		<>
			<Tab isMobile={true} />
		</>
	);
}

const Main = styled("main", {
	base: {
		position: "relative",
		overflow: "hidden",
	},
});

const Container = styled("div", {
	base: {
		display: "flex",
		maxWidth: "1639px",
		minWidth: "1318px",
		mx: "auto",
		justifyContent: "space-between",
		gap: "20px",
		padding: "0 40px",
		paddingTop: "40px",
		flex: "1",
	},
});
