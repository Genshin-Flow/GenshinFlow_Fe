import Dropdown from "@/features/matching/components/dropdown";
import {
	MatchingMenuContainer,
	WriteButton,
} from "@/features/matching/components/matchingMenu/style";
import {
	questOptions,
	lvOptions,
	regionOptions,
} from "@/data/MainOptions/mainOptions";

type MatchingMenuProps = {
	openModal: () => void;
	quest: string;
	setQuest: (value: string) => void;
	lv: string;
	setLv: (value: string) => void;
	region: string;
	setRegion: (value: string) => void;
};

export default function MatchingMenu({
	openModal,
	quest,
	setQuest,
	lv,
	setLv,
	region,
	setRegion,
}: MatchingMenuProps) {
	return (
		<MatchingMenuContainer>
			<div>
				<Dropdown
					placeholder="퀘스트 종류"
					value={quest}
					setValue={setQuest}
					options={questOptions}
					style="genshin"
				/>
				<Dropdown
					placeholder="월드 레벨"
					value={lv}
					setValue={setLv}
					options={lvOptions}
					style="genshin"
				/>
			</div>
			<div>
				<Dropdown
					value={region}
					setValue={setRegion}
					options={regionOptions}
					style="genshin"
				/>
				<WriteButton onClick={openModal}>구인글 쓰기</WriteButton>
			</div>
		</MatchingMenuContainer>
	);
}
