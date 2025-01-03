import { MypageInfoContainer } from "./style";

type propsType = {
	children: React.ReactNode;
	mt?: "mt20" | "mt40";
	currentHistory?: "mypage" | "history";
};

export default function MypageInfo(props: propsType) {
	return (
		<MypageInfoContainer
			{...(props.mt && { marginTop: props.mt })}
			{...(props.currentHistory && { variable: props.currentHistory })}
		>
			{props.children}
		</MypageInfoContainer>
	);
}
