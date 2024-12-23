import MatchingPostItem from "@/features/matching/components/MatchingPostItem";
import { PostListContainer, VisibleTabList } from "./style";
import { nanoid } from "nanoid";
import { PostContent } from "@/features/matching/components/Tab";

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
				postData.map((item) => (
					<MatchingPostItem
						key={nanoid()}
						selected={selectType}
						type={item.writerEmail === email ? "write" : "report"}
						item={item}
						email={email}
					/>
				))}
			{hasNextPage && !isLoading && <VisibleTabList ref={scrollRef} />}
		</PostListContainer>
	);
}
