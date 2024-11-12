import { styled } from "@/../styled-system/jsx";
import { Drag } from "@/features/admin/dragLogic/drag";
import { useEffect, useRef } from "react";
import adminStore from "@/stores/adminPage/adminPageStore";
import {
	positionReset,
	setBoxPosition,
} from "@/features/admin/components/reportManagement/ReportList";

type propsType = {
	selectPhoto: string;
};

export default function ImageBox(props: propsType) {
	const ImageRef = useRef(null);
	const { setImageBox } = adminStore();
	useEffect(() => {
		if (ImageRef) {
			setBoxPosition(ImageRef, "imgBox");
			Drag(ImageRef, "imgBox");
		}
	}, [ImageRef]);
	return (
		<ImageContainer ref={ImageRef}>
			<ExitButton
				onClick={() => exitClickHandler(setImageBox)}
				className="exitButton"
			>
				x
			</ExitButton>
			<PositionReset onClick={() => positionReset(ImageRef, "imgBox")}>
				위치 초기화
			</PositionReset>
			<ImageArea>
				<Anchor href={props.selectPhoto} target="_blank" className="imgBox">
					<img src={`${props.selectPhoto || "#"}`} alt="신고 증거 이미지" />
				</Anchor>
			</ImageArea>
		</ImageContainer>
	);
}

function exitClickHandler(setImageBox: (boxState: boolean) => void) {
	setImageBox(false);
}

const ImageContainer = styled("div", {
	base: {
		width: "360px",
		height: "240px",
		position: "absolute",
		top: "50%",
		left: "80%",
		zIndex: "10",
		transform: "translate(-50%,-50%)",
		borderRadius: "16px",
		padding: "20px",
		background: "#fff",
		border: "1px solid {colors.gray.04}",
		cursor: "move",
	},
});

const ImageArea = styled("figure", {
	base: {
		width: "100%",
		height: "100%",
		position: "relative",
		overflow: "hidden",
		backgroundColor: "#D9D9D9",
		cursor: "pointer",
	},
});

const Anchor = styled("a", {
	base: {
		width: "100%",
		height: "100%",
		display: "block",

		"&::after": {
			content: "'클릭시 새탭으로 이미지 보기'",
			display: "none",
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			backgroundColor: "gray.03",
		},
		"&:hover::after": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: "black",
			textStyle: "sm",
		},

		"& img": {
			display: "block",
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},
	},
});

const ExitButton = styled("button", {
	base: {
		fontSize: "20px",
		position: "absolute",
		right: "6%",
		top: "-2%",
		cursor: "pointer",
	},
});

const PositionReset = styled("button", {
	base: {
		textStyle: "sm",
		position: "absolute",
		top: "0.5%",
		right: "15%",
		cursor: "pointer",
	},
});
