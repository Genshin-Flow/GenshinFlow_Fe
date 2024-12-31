import { MutableRefObject } from "react";
import { MobilePopUpContainer, MobileLinkContainer } from "./styles";
import { MobilePopUpData } from "@/data/MobilePopUp/MobilePopUp";
import mobileAboutStore from "@/stores/mobileAboutStore";

type propsType = {
	menuRef: MutableRefObject<null>;
};
export default function MobileHeaderModal(props: propsType) {
	const { setAboutStore } = mobileAboutStore();
	return (
		<MobilePopUpContainer ref={props.menuRef}>
			<MobileLinkContainer
				onClick={(event) => clickHandler(event, setAboutStore)}
			>
				{MobilePopUpData.map((data, index) => (
					<li key={index}>
						<a href={data.link} target="_blank" className={data.title}>
							{data.title}
						</a>
					</li>
				))}
			</MobileLinkContainer>
		</MobilePopUpContainer>
	);
}

function clickHandler(
	event: React.MouseEvent,
	setAboutStore: (state: boolean) => void,
): void {
	const target = event.target as HTMLAnchorElement;
	if (target.classList.contains("ABOUT")) {
		event.preventDefault();
		setAboutStore(true);
	}
}
