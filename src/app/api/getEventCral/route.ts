import { NextResponse } from "next/server";

const puppeteer = require("puppeteer");

async function GET() {
	try {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();

		// 방문할 URL 입력
		const url =
			"https://www.hoyolab.com/circles/2/27/official?page_type=27&page_sort=events"; // 원하는 URL로 변경
		await page.goto(url, { waitUntil: "load" });
		await page.evaluate(() => {
			window.scrollBy(0, 2000);
		});
		// 해당 클래스명을 가진 모든 요소의 background-image 속성에서 URL 추출
		await new Promise((resolve) => setTimeout(resolve, 2000));
		const images = await page.evaluate(() => {
			return Array.from(
				document.querySelectorAll(".mhy-contribution-card-v2__cover"),
			)
				.map((el) => {
					const bgImage = window.getComputedStyle(el).backgroundImage;
					const match = bgImage.match(/url\(["']?(.*?)["']?\)/);
					return match ? match[1] : null; // URL만 추출
				})
				.filter(Boolean); // null 값 제거
		});

		await browser.close();

		return NextResponse.json(JSON.stringify(images), { status: 200 });
	} catch (error) {
		return NextResponse.json("이벤트 페이지 불러오기 실패", { status: 500 });
	}
}

export { GET };
