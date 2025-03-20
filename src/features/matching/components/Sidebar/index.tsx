"use client";
import {
	Container,
	IconContainer,
	IconWrapper,
	Icon,
	MenuContainer,
	SiteStats,
	StatsTitle,
	SlideSkeleton,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { EventUrlType } from "@/app/page";
import { nanoid } from "nanoid";

export default function Sidebar(props: EventUrlType) {
	return (
		<Container>
			<ShortcutMenu />
			<Slider slideData={props.slideData} />
			<Menu />
		</Container>
	);
}

function ShortcutMenu() {
	const handleOpenNewTab = (url: string) => {
		window.open(url, "_blank", "noopener, noreferrer");
	};

	return (
		<IconContainer>
			<IconWrapper>
				<Icon
					src="/images/maps.png"
					onClick={() =>
						handleOpenNewTab("https://genshin.gamedot.org/?mid=genshinmaps")
					}
				/>
				원신 맵스
			</IconWrapper>
			<IconWrapper>
				<Icon
					src="/images/moe.png"
					onClick={() => handleOpenNewTab("https://paimon.moe/")}
				/>
				페이몬 모에
			</IconWrapper>
			<IconWrapper>
				<Icon
					src="/images/hoyolab.png"
					onClick={() => handleOpenNewTab("https://www.hoyolab.com/home")}
				/>
				HoyoLab
			</IconWrapper>
			<IconWrapper>
				<Icon
					src="/images/planner.png"
					onClick={() =>
						handleOpenNewTab("https://genshin-center.com/ko/planner")
					}
				/>
				돌파 플래너
			</IconWrapper>
			<IconWrapper>
				<Icon
					src="/images/hakushin.png"
					onClick={() => handleOpenNewTab("https://gi17.hakush.in/")}
				/>
				Hakusin
			</IconWrapper>
			<IconWrapper>
				<Icon
					src="/images/enka.png"
					onClick={() => handleOpenNewTab("https://enka.network/")}
				/>
				Enka
			</IconWrapper>
		</IconContainer>
	);
}

function Slider(props: EventUrlType) {
	return (
		<>
			{props.slideData && props.slideData.length > 0 ? (
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{
						clickable: true,
						type: "bullets",
					}}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					loop={true}
					style={{ width: "100%", height: "116px" }}
				>
					{props.slideData.map((item) => (
						<SwiperSlide key={nanoid()} style={{ borderRadius: "10px" }}>
							<a
								href="https://www.hoyolab.com/circles/2/27/official?page_type=27&page_sort=events"
								target="_blank"
							>
								<Image
									src={item}
									alt={"이벤트 배너"}
									width={340}
									height={116}
								/>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<SlideSkeleton>Loading...</SlideSkeleton>
			)}
		</>
	);
}

function Menu() {
	return (
		<MenuContainer>
			<SiteStats>
				<div>
					<StatsTitle icon="star">현재 접속자 수</StatsTitle>
					<p>0</p>
				</div>
				<div>
					<StatsTitle icon="note">오늘의 구인글</StatsTitle>
					<p>0</p>
				</div>
			</SiteStats>
		</MenuContainer>
	);
}
