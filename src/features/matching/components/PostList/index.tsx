import MatchingPostItem from "@/features/matching/components/MatchingPostItem_ tmp";
import { PostListContainer, VisibleTabList } from "./style";
import { nanoid } from "nanoid";
import { PostContent } from "@/features/matching/components/Tab";
import useLoginStateStore from "@/stores/loginStateStore";
import { refetchType } from "@/features/matching/components/Tab";

type PostListProps = {
	postData: PostContent[] | undefined;
	hasNextPage: boolean;
	isLoading: boolean;
	scrollRef: any;
	selectType: string;
	email: string;
	refetch: refetchType;
};

export default function PostList({
	postData = [],
	hasNextPage,
	isLoading,
	scrollRef,
	selectType,
	email,
	refetch,
}: PostListProps) {
	const { isLogin } = useLoginStateStore();
	return (
		<PostListContainer>
			{postData &&
				postData.map((item) => {
					const { quest, questImage } = filterQuest(item.questCategory);
					if (isLogin) {
						return (
							<MatchingPostItem
								key={nanoid()}
								selected={selectType}
								type={item.writerEmail === email ? "write" : "report"}
								item={item}
								email={email}
								quest={quest}
								questImage={questImage}
								refetch={refetch}
							/>
						);
					} else {
						return (
							<MatchingPostItem
								key={nanoid()}
								selected={selectType}
								type={"write"}
								item={item}
								email={email}
								quest={quest}
								questImage={questImage}
								refetch={refetch}
							/>
						);
					}
				})}
			{hasNextPage && !isLoading && <VisibleTabList ref={scrollRef} />}
		</PostListContainer>
	);
}

function filterQuest(questOption: string) {
	let quest = "";
	let questImage = "";
	switch (questOption) {
		case "일반 비경":
			quest = questOption;
			questImage = "/svgs/quests/domain.svg";
			break;
		case "이벤트 퀘스트":
			quest = questOption;
			questImage = "/svgs/quests/event.svg";
			break;
		case "영역 토벌":
			quest = questOption;
			questImage = "/svgs/quests/mob.svg";
			break;
		case "일일 임무":
			quest = questOption;
			questImage = "/svgs/quests/mission.svg";
			break;
		case "맵 탐사":
			quest = questOption;
			questImage = "/svgs/quests/explore.svg";
			break;
		case "채집":
			quest = questOption;
			questImage = "/svgs/quests/gather.svg";
			break;
	}
	return { quest, questImage };
}
