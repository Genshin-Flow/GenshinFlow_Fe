export function filterQuest(questOption: string) {
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
