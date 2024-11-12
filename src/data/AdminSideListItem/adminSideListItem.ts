type itemListType = {
	title: string;
	dataset: string;
};

export type ListInfoType = {
	title: string;
	listItem: itemListType[];
}[];

export const ListInfo: ListInfoType = [
	{
		title: "블랙리스트",
		listItem: [
			{
				title: "신고 관리",
				dataset: "reportManagement",
			},
			{
				title: "제재 대상 확인",
				dataset: "punishment",
			},
		],
	},
	{
		title: "사이트 정보",
		listItem: [
			{
				title: "통계",
				dataset: "statistics",
			},
			{
				title: "질문",
				dataset: "inquiryHistory",
			},
		],
	},
];
