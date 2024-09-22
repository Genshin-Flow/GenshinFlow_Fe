import { styled } from "@/../styled-system/jsx";
import Link from "next/link";

type propsType = {
	InfoTitle: string;
	InfoText?: string;
	password?: string;
};

export default function InfoText(props: propsType) {
	// 비밀번호의 자릿수 만큼 *를 반환하여 출력
	let stars = "";
	if (props.password) {
		const passLeng = Number(props.password);
		for (let i = 0; i < passLeng; i++) {
			stars += "*";
		}
	}
	return (
		<InfoContainer>
			<InfoTitle>
				<span>{props.InfoTitle}</span>
			</InfoTitle>
			<InfoBody>
				<span>{props.password ? stars : props.InfoText}</span>
				{props.password && (
					<PasswordChange>
						<Link href={"/ChangePassword"}>변경</Link>
					</PasswordChange>
				)}
			</InfoBody>
		</InfoContainer>
	);
}

const InfoContainer = styled("div", {
	base: {
		display: "flex",
		alignItems: "center",
		marginTop: "20px",
		position: "relative",
		"&:first-of-type": {
			marginTop: "0px",
		},
	},
});

const InfoTitle = styled("div", {
	base: {
		minWidth: "60px",
		textStyle: "md",
		color: "gray.04",
	},
});

const InfoBody = styled("div", {
	base: {
		marginLeft: "40px",
		textStyle: "md",
	},
});

const PasswordChange = styled("button", {
	base: {
		width: "57px",
		height: "33px",
		position: "absolute",
		top: "0",
		right: "0",
		transform: "translateY(-25%)",
		border: "1px solid {colors.gray.05}",
		cursor: "pointer",
		backgroundColor: "{colors.gray.06}",

		"&:hover": {
			backgroundColor: "{colors.primary.02}",
		},
	},
});
