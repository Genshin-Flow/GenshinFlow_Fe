import { TabType } from "@/app/(Admin)/Admin/page";
import TabList from "@/features/admin/components/sideMenu/TabList";
import { Dispatch, SetStateAction } from "react";
import { ListInfo } from "@/data/AdminSideListItem/adminSideListItem";
import { SideMenuContainer } from "./style";
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
