"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { styled } from "../../styled-system/jsx";
import Tab from "@/features/matching/components/tab";
import Sidebar from "@/features/matching/components/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAccessToken } from "@/fetch/Token/getAccessToken/getAccessToken";
import useLoginStateStore from "@/stores/loginStateStore";
import { errorToast } from "@/utils/customToast/customToast";
import userStore from "@/stores/userStore";
import { getUserInfo } from "@/fetch/User/getUserInfo/getUserInfo";

export default function Home() {
	const [mounted, setMounted] = useState(false);
	const mobileWidth = process.env.NEXT_PUBLIC_startMobileWidth;
	if (!mobileWidth) throw new Error("모바일 너비 설정이 없습니다.");
	const isMobile = useMediaQuery({
		query: `(max-width:${mobileWidth}px)`,
	});
	const { setIsLogin } = useLoginStateStore();
	const { setUserInfo, uid } = userStore();

	// 컴포넌트가 마운트 되기 전에는 렌더링 하지 않음
	useEffect(() => {
		setMounted(true);
		const responseData = async () => {
			const tokenResponse = await getAccessToken(setIsLogin);
			const tokenResult = await tokenResponse.json();
			const accessToken = tokenResult.accessToken;
			if (!tokenResponse.ok) {
				switch (tokenResponse.status) {
					// 에러 핸들러
					default:
						return;
				}
			}
			const userProfileDataResponse = await getUserInfo(accessToken);
			if (!userProfileDataResponse.ok) {
				switch (tokenResponse.status) {
					// 에러 핸들러
					case 404:
						errorToast("유저 정보를 찾을 수 없습니다.");
						break;
					default:
						return;
				}
			}
			const result = await userProfileDataResponse.json();
			setUserInfo({ ...result });
		};
		// 정보가 갱신되지 않았을때만 fetch 실행

		if (uid === 0) {
			responseData();
		}
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
