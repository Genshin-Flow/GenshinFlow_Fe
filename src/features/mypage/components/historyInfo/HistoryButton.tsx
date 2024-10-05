import { styled } from "@/../styled-system/jsx";
import Link from "next/link";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { history } from "@/fetch/history/history";
import { listItemType } from "@/features/mypage/components/historyInfo/History";

type propsType = {
	checkboxId: string[];
	listData: listItemType[];
	setBoxId: Dispatch<SetStateAction<string[]>>;
	setListData: Dispatch<SetStateAction<listItemType[]>>;
};

export default function HistoryButton(props: propsType) {
	return (
		<ButtonContainer>
			<form
				action="#"
				onSubmit={(event) =>
					historySubmitHandler(
						event,
						props.checkboxId,
						props.listData,
						props.setBoxId,
						props.setListData,
					)
				}
			>
				<DeleteButton>선택삭제</DeleteButton>
			</form>
			<BetweenButtonBox />
			<Link href={"/allHistory"}>더보기</Link>
		</ButtonContainer>
	);
}

export function historySubmitHandler(
	event: FormEvent<HTMLFormElement>,
	checkboxId: string[],
	listData: listItemType[],
	setBoxId: Dispatch<SetStateAction<string[]>>,
	setListData: Dispatch<SetStateAction<listItemType[]>>,
) {
	event.preventDefault(); // 기본 폼 제출 방지
	if (checkboxId.length <= 0) return;
	const newData = listData.filter((item) => {
		return !checkboxId.includes(String(item.id));
	});

	// 상태 업데이트
	setListData(newData); // 필요에 따라 상태를 비웁니다.
	setBoxId([]);
	history(newData); // history 호출
}

const ButtonContainer = styled("div", {
	base: {
		display: "flex",
		columnGap: "16px",
		textStyle: "xs",
		alignItems: "center",
		"& a": {
			textWrap: "nowrap",
			cursor: "pointer",
		},
	},
});

const DeleteButton = styled("button", {
	base: {
		textWrap: "nowrap",
		cursor: "pointer",
	},
});

const BetweenButtonBox = styled("div", {
	base: {
		width: "1px",
		height: "100%",
		backgroundColor: "{colors.gray.04}",
		maxHeight: "16px",
	},
});
