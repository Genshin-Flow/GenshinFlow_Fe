import {
	ItemContainer,
	UserName,
	ProfileImage,
	UserInfo,
	UserIdButton,
	QuestType,
	QuestIcon,
	WorldLevel,
	Message,
	MessageText,
	TimeAgo,
	MoreOptions,
	Text,
} from "./styles";

export default function MatchingPostItem() {
	return (
		<ItemContainer>
			<UserName>
				<ProfileImage />
				<UserInfo>
					<Text>유저명</Text>
					<UserIdButton>UID 80102123</UserIdButton>
				</UserInfo>
			</UserName>
			<QuestType>
				<QuestIcon />
				<Text>나선 비경</Text>
			</QuestType>
			<WorldLevel>
				<Text>7</Text>
			</WorldLevel>
			<Message>
				<MessageText>
					맵 밀어주실 착한 분 구해요.한 5판 할 것 같아요.
					가나다라마바사아자차카타파하
				</MessageText>
			</Message>
			<TimeAgo>
				<Text>1분 전</Text>
			</TimeAgo>
			<MoreOptions>...</MoreOptions>
		</ItemContainer>
	);
}
