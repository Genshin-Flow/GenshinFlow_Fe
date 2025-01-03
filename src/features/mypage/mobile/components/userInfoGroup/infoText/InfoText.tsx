import Link from "next/link";
import { InfoContainer, InfoTitle, InfoBody, PasswordChange } from "./style";

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
