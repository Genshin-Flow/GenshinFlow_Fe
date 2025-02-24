import {
	MatchingHeaderContainer,
	UserName,
	QuestType,
	WorldLevel,
	Message,
	TimeAgo,
	MoreOptions,
	Gap,
} from "./style";

type MatchingHeaderProps = {
	selectType: string;
	handleSelectType: (type: string) => void;
};

export default function MatchingHeader({
	selectType,
	handleSelectType,
}: MatchingHeaderProps) {
	return (
		<MatchingHeaderContainer>
			<UserName
				select={selectType === "userName"}
				onClick={() => handleSelectType("userName")}
			>
				유저명
			</UserName>
			<QuestType
				select={selectType === "questType"}
				onClick={() => handleSelectType("questType")}
			>
				퀘스트 종류
			</QuestType>
			<WorldLevel
				select={selectType === "worldLevel"}
				onClick={() => handleSelectType("worldLevel")}
			>
				월드 레벨
			</WorldLevel>
			<Message
				select={selectType === "message"}
				onClick={() => handleSelectType("message")}
			>
				이야기
			</Message>
			<TimeAgo
				select={selectType === "timeAgo"}
				onClick={() => handleSelectType("timeAgo")}
			>
				등록일시
			</TimeAgo>
			<MoreOptions></MoreOptions>
			<Gap />
		</MatchingHeaderContainer>
	);
}
