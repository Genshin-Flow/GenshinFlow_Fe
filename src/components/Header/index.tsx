"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
	Btns,
	CenterContainer,
	HeaderContainer,
	LoginButton,
	Logo,
	MobileContainer,
	MobileLogo,
	Button,
} from "./styles";

interface HeaderProps {
	isMobile?: boolean;
}

export default function Header({ isMobile = false }: HeaderProps) {
	// 하이드레이션 에러 방지
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<>
			{!isMobile ? (
				<HeaderContainer>
					<CenterContainer>
						<Link href="/">
							<Logo src="/svgs/logo.svg" alt="Logo" />
						</Link>
						<Link href="/Login">
							<LoginButton>로그인</LoginButton>
						</Link>
					</CenterContainer>
				</HeaderContainer>
			) : (
				<MobileContainer>
					<Link href="/">
						<MobileLogo src="/svgs/logo2.svg" alt="Logo" />
					</Link>
					<Btns>
						<Button style="menu" />
						<Link href="/MobileLogin">
							<Button style="login" />
						</Link>
					</Btns>
				</MobileContainer>
			)}
		</>
	);
}
