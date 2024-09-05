import { styled } from "@/../styled-system/jsx";
import { stateType } from "@/stores/loginStateStore";

type propsType = {
	currentPage: stateType;
	setSelectBtn: (selectBtn: stateType) => void;
};

export default function GoBack(props: propsType) {
	const backSvgUrl = "/icons/goBack/goBack.svg";
	const page = changePage(props.currentPage) as stateType;
	return (
		<GoBackContainer onClick={() => props.setSelectBtn(page)}>
			<GoBackSvg src={backSvgUrl} alt="뒤로가기 버튼" />
		</GoBackContainer>
	);
}

function changePage(currentPage: stateType) {
	switch (currentPage) {
		case "login":
			return null;
		case "signUpSelect":
			return null;
		case "signUp":
			return "signUpSelect";
	}
}

const GoBackContainer = styled("button", {
	base: {
		width: "40px",
		height: "40px",
		position: "absolute",
		right: "30px",
		top: "30px",
		cursor: "pointer",
	},
});

const GoBackSvg = styled("img", {
	base: {
		width: "100%",
		height: "100%",
	},
});
