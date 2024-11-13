import { styled } from "@/../styled-system/jsx";
import adminStore from "@/stores/adminPage/adminPageStore";

type propsType = {
	imageUrl: string;
	setPhoto: React.Dispatch<React.SetStateAction<string>>;
};

export default function EvidencePhoto(props: propsType) {
	const { setImageBox } = adminStore();
	return (
		<PopUpButton
			onClick={(event) => clickHandler(event, props.setPhoto, setImageBox)}
		>
			<img
				src="/svgs/photo.svg"
				alt="이미지 아이콘"
				data-imgurl={props.imageUrl}
			/>
		</PopUpButton>
	);
}

function clickHandler(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	setPhoto: React.Dispatch<React.SetStateAction<string>>,
	setImageBox: (boxState: boolean) => void,
) {
	const target = event.target as HTMLButtonElement;
	const imageSrc = target.children[0].getAttribute("data-imgurl");
	if (imageSrc) {
		// 이미지 src가 있을시 해당 src를 전달
		setPhoto(imageSrc);
	}
	// 이미지 박스 랜더링
	setImageBox(true); // 사진 �� ��기
}

const PopUpButton = styled("button", {
	base: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "16.5px 10px",
		cursor: "pointer",

		"& img": {
			pointerEvents: "none",
		},
	},
});
