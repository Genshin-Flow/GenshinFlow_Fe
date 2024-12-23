import { styled } from "@/../styled-system/jsx";
import { Dispatch, SetStateAction, useState } from "react";
import { useAdminSearch } from "@/hooks/useAdminSearch";
import { adminUserSearch } from "@/fetch/adminUserSearch/adminUserSearch";
import { nanoid } from "nanoid";

type propsType<T> = {
	title: string;
	setUserList: Dispatch<SetStateAction<T[]>>;
};

export default function TableHeader<T>({ title, setUserList }: propsType<T>) {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState<string[]>([]);
	useAdminSearch(searchValue, setSearchResult);
	return (
		<TableHeaderContainer>
			<Title>{title}</Title>
			<SearchContainer>
				<SearchIconBox>
					<img src="/svgs/magnifyingGlass.svg" alt="돋보기" />
				</SearchIconBox>
				<SearchInputBox
					placeholder="유저 ID 검색"
					value={searchValue}
					onChange={(event) => setSearchValue(event.target.value)}
				/>
				{searchResult.length > 0 && (
					<SearchResultBox
						onClick={(event) => searchItemClickHandler(event, setUserList)}
					>
						{searchResult.map((item) => (
							// userId는 추후 명세에 따라 추가
							<SearchResultList
								data-userid={`${item}`}
								className="searchItems"
								key={nanoid()}
							>
								{item}
							</SearchResultList>
						))}
					</SearchResultBox>
				)}
			</SearchContainer>
		</TableHeaderContainer>
	);
}

async function searchItemClickHandler<T>(
	event: React.MouseEvent<HTMLUListElement, MouseEvent>,
	setUserList: Dispatch<SetStateAction<T[]>>,
) {
	const target = event.target as HTMLElement;
	const userId = target.dataset.userid;
	if (target.classList.contains("searchItems")) {
		if (userId) {
			adminUserSearch(userId, setUserList);
		} else {
			console.error("유저 id가 존재하지 않습니다. 새로고침후 시도해주세요 ");
		}
	}
}

const TableHeaderContainer = styled("div", {
	base: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "30px",
	},
});

const Title = styled("h2", {
	base: {
		textStyle: "xl",
	},
});
const SearchContainer = styled("div", {
	base: {
		// 기본 스크롤 width 값 만큼 제거 추후 스타일 변경시 width와 marginRight를 변경 필요
		position: "relative",
		height: "40px",
		padding: "0px 14px",
		display: "flex",
		alignItems: "center",
		border: "1px solid black",
		borderRadius: "4px",
	},
});

const SearchIconBox = styled("button", {
	base: {
		width: "32px",
		height: "32px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	},
});

const SearchInputBox = styled("input", {
	// p
	base: {
		width: "100%",
		display: "block",
		marginLeft: "8px",
		padding: "3px 6px",
		boxSizing: "border-box",
		fontSize: "14px",
		fontWeight: "400",
	},
});

const SearchResultBox = styled("ul", {
	base: {
		width: "100%",
		minHeight: "300px",
		overflow: "auto",
		padding: "10px 0",
		position: "absolute",
		top: "120%",
		left: "0",
		backgroundColor: "#fff",
		zIndex: "10",
	},
});

const SearchResultList = styled("li", {
	base: {
		width: "100%",
		padding: "12px 10px",
		cursor: "pointer",

		"&:hover": {
			backgroundColor: "#f1f1f1",
		},
	},
});
