import MatchingPostItem from "@/features/matching/components/MatchingPostItem";
import { PostListContainer, VisibleTabList } from "./style";
import { nanoid } from "nanoid";
import { PostContent } from "@/features/matching/components/Tab";
import useLoginStateStore from "@/stores/loginStateStore";
import { refetchType } from "@/features/matching/components/Tab";
import { filterQuest } from "@/utils/filterQuest/fiilterQuest";

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
