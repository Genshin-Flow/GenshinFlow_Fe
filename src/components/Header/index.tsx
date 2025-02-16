"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
	Btns,
	CenterContainer,
	HeaderContainer,
	LoginButton,
	Logo,
	MobileContainer,
	MobileLogo,
	MyPageButton,
	MypageIcon,
	MenuButtonContainer,
	Button,
} from "./styles";
import useLoginStateStore from "@/stores/loginStateStore";
import userStore from "@/stores/userStore";
import PcMypage from "@/app/PcMypage/pcMypage";
import MobileHeaderModal from "@/components/Header/modal/modal";
import useOutsideClick from "@/hooks/useOutsideClick";

interface HeaderProps {
	isMobile?: boolean;
}

export default function Header({ isMobile = false }: HeaderProps) {
	// 하이드레이션 에러 방지
	const [isClient, setIsClient] = useState(false);
	const [isPcMypageOpen, setIsPcMypageOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const { isLogin } = useLoginStateStore();
	const { image } = userStore();

	const menuRef = useRef(null);
	const menuActiveRef = useRef(null);

	const profile = image;
	const defaultUserProfile = "/svgs/defaultUserProfile";
	const myPageOpenFn = () => setIsPcMypageOpen(true);
	const menuToggleFn = () => setMenuOpen((prev) => !prev);
	const menuCloseFn = () => setMenuOpen(false);

	useOutsideClick(menuRef, menuCloseFn, menuActiveRef);

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
						{/* login -> Login */}
						{isLogin ? (
							<MyPageButton onClick={myPageOpenFn}>마이페이지</MyPageButton>
						) : (
							<Link href="/Login">
								<LoginButton>로그인</LoginButton>
							</Link>
						)}
					</CenterContainer>
					<PcMypage
						isPcMypageOpen={isPcMypageOpen}
						setIsPcMypageOpen={setIsPcMypageOpen}
					/>
				</HeaderContainer>
			) : (
				<MobileContainer>
					<Link href="/">
						<MobileLogo src="/svgs/logo2.svg" alt="Logo" />
					</Link>
					<Btns>
						<MenuButtonContainer>
							<Button style="menu" onClick={menuToggleFn} ref={menuActiveRef}>
								{menuOpen && <MobileHeaderModal menuRef={menuRef} />}
							</Button>
						</MenuButtonContainer>
						{isLogin ? (
							<Button style="login">
								<Link href="/Mypage">
									<MypageIcon src={profile ? profile : defaultUserProfile} />
								</Link>
							</Button>
						) : (
							<Button style="login">
								<Link href="/Login" />
							</Button>
						)}
					</Btns>
				</MobileContainer>
			)}
		</>
	);
}
