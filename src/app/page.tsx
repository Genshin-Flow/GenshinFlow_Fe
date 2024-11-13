"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "../../styled-system/jsx";
import Tab from "@/features/matching/components/Tab/";
import Sidebar from "@/features/matching/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
	const [mounted, setMounted] = useState(false);
	const isMobile = useMediaQuery({
		query: "(max-width:1318px)",
	});

	// 컴포넌트가 마운트 되기 전에는 렌더링 하지 않음
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null; // 또는 로딩 컴포넌트
	}

	return (
		<>
			<Header isMobile={isMobile} />
			{isMobile ? <Mobile /> : <Pc />}
			<Footer isMobile={isMobile} />
		</>
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

const Container = styled("div", {
	base: {
		display: "flex",
		maxWidth: "1639px",
		minWidth: "1318px",
		mx: "auto",
		justifyContent: "space-between",
		gap: "20px",
		padding: "0 40px",
		paddingTop: '40px',
		flex: "1",
	},
});
