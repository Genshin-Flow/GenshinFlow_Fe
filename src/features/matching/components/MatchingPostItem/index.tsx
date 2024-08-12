import {
	ItemContainer,
	UserName,
	ProfileImage,
	UserInfo,
	UserNameText,
	UserIdButton,
	QuestType,
	QuestIcon,
	QuestText,
	WorldLevel,
	WorldLevelText,
	Message,
	MessageText,
	TimeAgo,
	MoreOptions,
} from "./styles";

export default function MatchingPostItem() {
	return (
		<ItemContainer>
			<UserName>
				<ProfileImage />
				<UserInfo>
					<UserNameText>유저명</UserNameText>
					<UserIdButton>UID 80102123</UserIdButton>
				</UserInfo>
			</UserName>
			<QuestType>
				<QuestIcon />
				<QuestText>나선 비경</QuestText>
			</QuestType>
			<WorldLevel>
				<WorldLevelText>7</WorldLevelText>
			</WorldLevel>
			<Message>
				<MessageText>
					맵 밀어주실 착한 분 구해요.한 5판 할 것 같아요.
					가나다라마바사아자차카타파하
				</MessageText>
			</Message>
			<TimeAgo>1분 전</TimeAgo>
			<MoreOptions>...</MoreOptions>
		</ItemContainer>
	);
}
