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
	setQuest: (value: string[]) => void;
	setLv: (value: string[]) => void;
	setRegion: (value: string[]) => void;
};

export default function MatchingMenu({
	openModal,
	setQuest,
	setLv,
	setRegion,
}: MatchingMenuProps) {
	return (
		<MatchingMenuContainer>
			<div>
				<Dropdown
					placeholder="퀘스트 종류"
					setValue={setQuest}
					options={questOptions}
					style="genshin"
				/>
				<Dropdown
					placeholder="월드 레벨"
					setValue={setLv}
					options={lvOptions}
					style="genshin"
				/>
			</div>
			<div>
				<Dropdown
					placeholder="지역"
					setValue={setRegion}
					options={regionOptions}
					style="genshin"
				/>
				<WriteButton onClick={openModal}>구인글 쓰기</WriteButton>
			</div>
		</MatchingMenuContainer>
	);
}
