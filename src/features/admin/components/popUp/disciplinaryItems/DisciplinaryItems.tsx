import { styled } from "@/../styled-system/jsx";
import SelectOption from "@/features/admin/components/popUp/disciplinaryItems/SelectOption";
import { optionData } from "@/data/DisciplinaryItems/disciplinaryItems";
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

const UserInfoContainer = styled("div", {
	base: {
		height: "100%",
		display: "flex",
		alignItems: "center",
		fontSize: "14px",
		fontWeight: "400",
		padding: "16.5px 10px",
	},
});

const SvgAndOptionGroup = styled("div", {
	base: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		cursor: "pointer",

		"& > p": {
			pointerEvents: "none",
			marginLeft: "8px",
		},
		"& > img": {
			pointerEvents: "none",
		},

		"&.active > div": {
			display: "block",
		},
	},
});
