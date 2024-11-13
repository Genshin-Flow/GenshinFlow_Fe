"use client";
import Header from "@/features/admin/components/header/Header";
import SideMenu from "@/features/admin/components/sideMenu/SideMenu";
import ReportManagement from "@/features/admin/components/reportManagement/ReportManagement";
import PunishmentHistory from "@/features/admin/components/punishmentHistory/PunishmentHistory";
import { styled } from "@/../styled-system/jsx";
import { useState } from "react";

export type TabType =
	| "reportManagement"
	| "punishment"
	| "statistics"
	| "inquiryHistory";

export default function page() {
	const [currentTab, setCurrentTab] = useState<TabType>("reportManagement");

	return (
		<AdminContainer>
			<Header />
			<FlexBox>
				<SideMenu setCurrentTab={setCurrentTab} />
				<MainContainer>
					{currentTab === "reportManagement" && <ReportManagement />}
					{currentTab === "punishment" && <PunishmentHistory />}
					{currentTab === "statistics" && <ReportManagement />}
					{currentTab === "inquiryHistory" && <ReportManagement />}
				</MainContainer>
			</FlexBox>
		</AdminContainer>
	);
}

const AdminContainer = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		position: "relative",
		backgroundColor: "#FBFBFB",
	},
});

const FlexBox = styled("section", {
	base: {
		width: "100%",
		height: "calc(100% - 76px)",
		display: "flex",
	},
});

const MainContainer = styled("main", {
	base: {
		width: "100%",
		height: "calc(100% - 10px)",
		backgroundColor: "#fff",
		marginTop: "10px",
		padding: "40px 61px",
	},
});
