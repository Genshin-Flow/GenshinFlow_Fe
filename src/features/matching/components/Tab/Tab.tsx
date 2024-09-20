"use client";
import { Container, TabContainer, TabItem } from "./styles";
import MatchingPostItem from "../MatchingPostItem";
import { useState } from "react";

export default function Tab() {
	const [activeTab, setActiveTab] = useState(0);

	const renderContent = () => {
		switch (activeTab) {
			case 0:
				return <MatchingPostItem />;
			case 1:
				return <MatchingPostItem />;
			case 2:
				return <MatchingPostItem />;
			default:
				return <MatchingPostItem />;
		}
	};

	return (
		<Container>
			<TabContainer>
				<TabItem active={activeTab === 0} onClick={() => setActiveTab(0)}>
					구인글
				</TabItem>
				<TabItem active={activeTab === 1} onClick={() => setActiveTab(1)}>
					ABOUT
				</TabItem>
			</TabContainer>
			{activeTab}
		</Container>
	);
}
