import SelectOption from "@/features/admin/components/popUp/disciplinaryItems/SelectOption/index.ts";
import { optionData } from "@/data/DisciplinaryItems/disciplinaryItems";
import { UserInfoContainer, SvgAndOptionGroup } from "./style";
export default function DisciplinaryItems() {
	return (
		<UserInfoContainer>
			<SvgAndOptionGroup onClick={activeClickHandler} className="optionGroup">
				<img src="/svgs/fillDownArrow.svg" alt="아래방향 화살표" />
				<p className="disciplinary">경고 1회 누적</p>
				<SelectOption optionData={optionData} />
			</SvgAndOptionGroup>
		</UserInfoContainer>
	);
}

function activeClickHandler(
	event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) {
	const target = event.target as HTMLDivElement;
	if (
		!target.classList.contains("active") &&
		target.classList.contains("optionGroup")
	) {
		deActiveDisciplinary();
		target.classList.add("active");
	} else {
		target.classList.remove("active");
	}
}

function deActiveDisciplinary() {
	const $disciplinary = document.querySelectorAll(".optionGroup");
	$disciplinary.forEach((disciplinary) => {
		disciplinary.classList.remove("active");
	});
}
