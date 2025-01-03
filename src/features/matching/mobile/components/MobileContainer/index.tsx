import Dropdown from "@/features/matching/components/dropdown";
import { FilterContainer } from "./style";
import {
	questOptions,
	lvOptions,
	regionOptions,
} from "@/data/MainOptions/mainOptions";

type MobileFilterContainerProps = {
	isMobile: boolean;
	quest: string;
	setQuest: (value: string) => void;
	lv: string;
	setLv: (value: string) => void;
	region: string;
	setRegion: (value: string) => void;
};

export default function MobileFilterContainer({
	isMobile,
	quest,
	setQuest,
	lv,
	setLv,
	region,
	setRegion,
}: MobileFilterContainerProps) {
	return (
		<FilterContainer>
			<Dropdown
				placeholder="퀘스트 종류"
				value={quest}
				setValue={setQuest}
				options={questOptions}
				style="genshin"
				isMobile={isMobile}
			/>
			<Dropdown
				placeholder="월드 레벨"
				value={lv}
				setValue={setLv}
				options={lvOptions}
				style="genshin"
				isMobile={isMobile}
			/>
			<Dropdown
				value={region}
				setValue={setRegion}
				options={regionOptions}
				style="genshin"
				isMobile={isMobile}
			/>
		</FilterContainer>
	);
}
