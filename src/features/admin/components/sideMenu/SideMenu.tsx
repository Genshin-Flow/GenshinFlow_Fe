import { styled } from "@/../styled-system/jsx";
import { TabType } from "@/app/Admin/page";
import TabList from "@/features/admin/components/sideMenu/TabList";
import { Dispatch, SetStateAction } from "react";
import { ListInfo } from "@/data/AdminSideListItem/adminSideListItem";

type propsType = {
	setCurrentTab: Dispatch<SetStateAction<TabType>>;
};

export default function SideMenu(props: propsType) {
	return (
		<SideMenuContainer>
			<TabList listInfo={ListInfo} setCurrentTab={props.setCurrentTab} />
		</SideMenuContainer>
	);
}

const SideMenuContainer = styled("aside", {
	base: {
		display: "block",
		minWidth: "280px",
		maxWidth: "346px",
		padding: "0px 40px",
		marginTop: "24px",
	},
});
