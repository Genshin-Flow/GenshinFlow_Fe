import { stateType } from "@/stores/loginPageStateStore";
import { GoBackContainer, GoBackSvg } from "./style";
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
		case "authMailPassword":
			return "login";
		case "forgotPassword":
			return "authMailPassword";
	}
}
