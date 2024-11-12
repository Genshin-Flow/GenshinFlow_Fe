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

export const TableItemContainer = styled("ul", {
	base: {
		width: "100%",
		height: "100%",
		overflow: "auto",
	},
});

export const TableItem = styled("li", {
	base: {
		width: "100%",
		height: "58px",
		display: "flex",
		alignItems: "center",
		borderCollapse: "collapse",

		"& > div": {
			height: "100%",
			padding: "16.5px 10px",
			border: "1px solid black",
		},

		"& > div:nth-of-type(1)": {
			width: "15%",
		},
		"& > div:nth-of-type(2)": {
			width: "15%",
		},
		"& > div:nth-of-type(3)": {
			width: "20%",
		},
		"& > div:nth-of-type(4)": {
			width: "15%",
		},
		"& > div:nth-of-type(5)": {
			width: "15%",
			padding: "0",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			cursor: "pointer",
		},
		"& > div:nth-of-type(6)": {
			width: "20%",
			padding: "0",
		},
	},
});

export const LastItemBlock = styled("div", {
	base: {
		width: "100%",
		height: "1px",
		opacity: "0",
	},
});
