import MatchingPostItem from "@/features/matching/components/matchingPostItem";
import { PostListContainer, VisibleTabList } from "./style";
import { nanoid } from "nanoid";
import { PostContent } from "@/features/matching/components/tab";

type PostListProps = {
	postData: PostContent[] | undefined;
	hasNextPage: boolean;
	isLoading: boolean;
	scrollRef: any;
	selectType: string;
	email: string;
};

export default function PostList({
	postData = [],
	hasNextPage,
	isLoading,
	scrollRef,
	selectType,
	email,
}: PostListProps) {
	return (
		<PostListContainer>
			{postData &&
				postData.map((item) => {
					const { quest, questImage } = filterQuest(item.questCategory);
					return (
						<MatchingPostItem
							key={nanoid()}
							selected={selectType}
							type={item.writerEmail === email ? "write" : "report"}
							item={item}
							email={email}
							quest={quest}
							questImage={questImage}
						/>
					);
				})}
			{hasNextPage && !isLoading && <VisibleTabList ref={scrollRef} />}
		</PostListContainer>
	);
}

function filterQuest(questOption: string) {
	let quest = "";
	let questImage = "";
	switch (questOption) {
		case "NORMAL_DOMAIN":
			quest = "비경";
			questImage = "/svgs/quests/domain.svg";
			break;
		case "EVENT_QUEST":
			quest = "이벤트";
			questImage = "/svgs/quests/event.svg";
			break;
		case "AREA_CONQUEST":
			quest = "토벌";
			questImage = "/svgs/quests/gather.svg";
			break;
		case "DAILY_QUEST":
			quest = "일일 임무";
			questImage = "/svgs/quests/mission.svg";
			break;
		case "MAP_EXPLORATION":
			quest = "맵 탐사";
			questImage = "/svgs/quests/explore.svg";
			break;
		case "GATHERING":
			quest = "채집";
			questImage = "/svgs/quests/gather.svg";
			break;
	}
	return { quest, questImage };
}
