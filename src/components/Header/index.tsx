"use client";
import {
	useState,
	useEffect,
	useRef,
	MutableRefObject,
	SetStateAction,
} from "react";
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
	HeaderRightBox,
	LoginBox,
	LoginIconBox,
	LanguageBox,
	LanguageBoxSpan,
	LanguageItemBox,
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
	const [languageOption, setLanguageOptionState] = useState(false);

	const { isLogin } = useLoginStateStore();
	const { image } = userStore();

	const menuRef = useRef(null);
	const menuActiveRef = useRef(null);
	const languageTextRef = useRef(null);
	const languageItemRef = useRef(null);

	const profile = image;
	const defaultUserProfile = "/svgs/defaultUserProfile";
	const myPageOpenFn = () => setIsPcMypageOpen(true);
	const menuToggleFn = () => setMenuOpen((prev) => !prev);
	const menuCloseFn = () => setMenuOpen(false);
	const languageCloseFn = () => setLanguageOptionState(false);

	useOutsideClick(menuRef, menuCloseFn, menuActiveRef);
	useOutsideClick(languageItemRef, languageCloseFn);

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
							<HeaderRightBox>
								<LanguageBox
									ref={languageItemRef}
									onClick={(event) =>
										clickLanguageBox(
											event,
											setLanguageOptionState,
											languageOption,
										)
									}
									className="languageBox"
								>
									<LanguageBoxSpan ref={languageTextRef}>
										한국어
									</LanguageBoxSpan>
									<img src="/svgs/downArrow4.svg" alt="아래 화살표" />
									{languageOption && (
										<LanguageItemBox
											onClick={(event) =>
												selectLanguage(event, languageTextRef)
											}
										>
											<li>한국어</li>
											<li>English</li>
										</LanguageItemBox>
									)}
								</LanguageBox>
								<MyPageButton onClick={myPageOpenFn}>
									<img
										src={profile ? profile : defaultUserProfile}
										alt="유저 프로필"
									/>
								</MyPageButton>
							</HeaderRightBox>
						) : (
							<HeaderRightBox>
								<LanguageBox
									ref={languageItemRef}
									onClick={(event) =>
										clickLanguageBox(
											event,
											setLanguageOptionState,
											languageOption,
										)
									}
									className="languageBox"
								>
									<LanguageBoxSpan ref={languageTextRef}>
										한국어
									</LanguageBoxSpan>
									<img src="/svgs/downArrow4.svg" alt="아래 화살표" />
									{languageOption && (
										<LanguageItemBox
											onClick={(event) =>
												selectLanguage(event, languageTextRef)
											}
										>
											<li>한국어</li>
											<li>English</li>
										</LanguageItemBox>
									)}
								</LanguageBox>
								<LoginBox role="link">
									<Link href="/Login">
										<LoginIconBox>
											<img
												src="/svgs/genshinFlowIcon.svg"
												alt="원신 플로우 아이콘"
											/>
										</LoginIconBox>
										<LoginButton>Login</LoginButton>
									</Link>
								</LoginBox>
							</HeaderRightBox>
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

function clickLanguageBox(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	setLanguageOptionState: (value: SetStateAction<boolean>) => void,
	languageOption: boolean,
) {
	const target = event.target as HTMLElement;
	if (target.classList.contains("languageBox")) {
		setLanguageOptionState(!languageOption);
	}
}

function selectLanguage(
	event: React.MouseEvent<HTMLUListElement, MouseEvent>,
	languageTextRef: MutableRefObject<null>,
) {
	if (event.target instanceof HTMLLIElement && languageTextRef.current) {
		const target = event.target;
		const TextRef = languageTextRef.current as HTMLSpanElement;
		TextRef.innerText = target.innerText;
	}
}
