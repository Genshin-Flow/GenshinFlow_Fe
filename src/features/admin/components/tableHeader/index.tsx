import { Dispatch, SetStateAction, useState } from "react";
import { useAdminSearch } from "@/hooks/useAdminSearch";
import { adminUserSearch } from "@/fetch/AdminPage/adminUserSearch/adminUserSearch";
import { nanoid } from "nanoid";
import {
	TableHeaderContainer,
	Title,
	SearchContainer,
	SearchIconBox,
	SearchInputBox,
	SearchResultBox,
	SearchResultList,
} from "./style";
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
