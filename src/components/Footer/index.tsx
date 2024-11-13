import {
	CenterContainer,
	DescText,
	Discord,
	FlexContainer,
	FooterContainer,
	LinkContainer,
	LinkGroup,
	LinkText,
	MobileFooterContainer,
	ShortCutContainer,
	TextGroup,
	TitleText,
} from "./styles";

interface FooterProps {
	isMobile?: boolean;
}

export default function Footer({ isMobile = false }: FooterProps) {
	return (
		<>
			{!isMobile ? (
				<FooterContainer>
					<CenterContainer>
						<TextGroup>
							<DescText>
								원신-Flow는 Hoyoverse와 제휴되어 있거나 승인되어 있지 않습니다.
							</DescText>
							<DescText>
								원신-Flow는 원신 게임 서비스를 기반하는 유용한 정보와 기능을
								제공하며, 해당 게임의 콘텐츠와 저작
								<br />
								권은 모두 Hoyoverse 측에 있습니다.
							</DescText>
						</TextGroup>
						<ShortCutContainer>
							<FlexContainer>
								<TitleText>커뮤니티</TitleText>
								<Discord href="https://discord.gg/8E9D896z" target="_blank">
									디스코드
								</Discord>
							</FlexContainer>
							<FlexContainer>
								<TitleText>기타 링크</TitleText>
								<LinkContainer>
									<LinkGroup>
										<LinkText href="">문의</LinkText>
										<LinkText href="">개인정보처리방침</LinkText>
									</LinkGroup>
									<LinkGroup>
										<LinkText href="">일반 약관</LinkText>
										<LinkText href="">쿠키 관리</LinkText>
									</LinkGroup>
								</LinkContainer>
							</FlexContainer>
						</ShortCutContainer>
					</CenterContainer>
				</FooterContainer>
			) : (
				<MobileFooterContainer>
					<TextGroup isMobile={isMobile}>
						<DescText isMobile={isMobile}>
							원신-Flow는 Hoyoverse와 제휴되어 있거나 승인되어 있지 않습니다.
						</DescText>
						<DescText isMobile={isMobile}>
							원신-Flow는 원신 게임 서비스를 기반하는 유용한 정보와 기능을
							제공하며, 해당 게임의 콘텐츠와 저작권은 모두 Hoyoverse 측에
							있습니다.
						</DescText>
					</TextGroup>
					<ShortCutContainer isMobile={isMobile}>
						<FlexContainer>
							<TitleText isMobile={isMobile}>커뮤니티</TitleText>
							<Discord href="https://discord.gg/8E9D896z" target="_blank" isMobile={isMobile}>
								디스코드
							</Discord>
						</FlexContainer>
						<FlexContainer>
							<TitleText isMobile={isMobile}>기타 링크</TitleText>
							<LinkContainer>
								<LinkGroup>
									<LinkText href="" isMobile={isMobile}>문의</LinkText>
									<LinkText href="" isMobile={isMobile}>개인정보처리방침</LinkText>
								</LinkGroup>
								<LinkGroup>
									<LinkText href="" isMobile={isMobile}>일반 약관</LinkText>
									<LinkText href="" isMobile={isMobile}>쿠키 관리</LinkText>
								</LinkGroup>
							</LinkContainer>
						</FlexContainer>
					</ShortCutContainer>
				</MobileFooterContainer>
			)}
		</>
	);
}
