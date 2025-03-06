import MatchingPostItem from "@/features/matching/components/MatchingPostItem";
import { PostListContainer, VisibleTabList } from "./style";
import { nanoid } from "nanoid";
import useLoginStateStore from "@/stores/loginStateStore";
import { PostListProps } from "@/features/matching/components/Tab";
import { filterQuest } from "@/utils/filterQuest/fiilterQuest";

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
				postData.map((item, index) => {
					const { quest, questImage } = filterQuest(item.questCategory);
					const totalPost = postData.length;
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
								index={index}
								totalPost={totalPost}
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
								index={index}
								totalPost={totalPost}
								refetch={refetch}
							/>
						);
					}
				})}
			{hasNextPage && !isLoading && <VisibleTabList ref={scrollRef} />}
		</PostListContainer>
	);
}
