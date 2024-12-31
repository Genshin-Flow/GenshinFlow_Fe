import { styled } from "@/../styled-system/jsx";
import History from "@/features/mypage/components/history/History";
import UserInfo from "@/features/mypage/components/userInfo/UserInfo";
import UserProfile from "@/features/mypage/components/userProfile/UserProfile";
import Exit from "@/features/mypage/components/exitButton/Exit";
import useOutsideClick from "@/hooks/useOutsideClick";
import { RefObject, useRef } from "react";

type propsType = {
	isPcMypageOpen: boolean;
	setIsPcMypageOpen: (value: boolean) => void;
};

export default function PcMypage(props: propsType) {
	const blurBackgroundRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);
	const closePageFn = closePcMypage(blurBackgroundRef, props.setIsPcMypageOpen);
	console.log(modalRef.current);
	useOutsideClick(modalRef, closePageFn);
	return (
		<>
			<BluerBackground
				className={props.isPcMypageOpen ? "active" : ""}
				ref={blurBackgroundRef}
			/>
			<MyPageContainer ref={modalRef}>
				<Exit />
				<UserProfile />
				<PaddingBox>
					<UserInfo />
					<History />
				</PaddingBox>
			</MyPageContainer>
		</>
	);
}

function closePcMypage(
	blurBackgroundRef: RefObject<HTMLDivElement>,
	setIsPcMypageOpen: (value: boolean) => void,
) {
	return () => {
		blurBackgroundRef.current?.classList.remove("active");
		setIsPcMypageOpen(false);
	};
}


const BluerBackground = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		position: "absolute",
		overflow: "hidden",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		backgroundColor: "	rgba(58, 58, 58,0.2)",
		opacity: "0",
		transition: "0.3s opacity",
		display: "none",
		zIndex: "20",
		"&.active": {
			opacity: "1",
			display: "block",
		},
		"&.active ~ section": {
			transform: "translateX(0)",
		},
	},
});

const MyPageContainer = styled("section", {
	base: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "0",
		right: "0",
		marginLeft: "auto",
		maxWidth: "550px",
		backgroundColor: "primary.04",
		borderRadius: "20px 0 0 20px",
		transition: "0.3s all",
		transform: "translateX(100%)",
		zIndex: "20",
	},
});

const PaddingBox = styled("div", {
	base: {
		width: "100%",
		height: "100%",
		padding: "30px 32px",
	},
});
