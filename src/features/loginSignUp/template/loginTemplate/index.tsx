import { LoginContainer, ChildrenContainer } from "./style";
type propsType = {
	children: React.ReactNode;
};

export default function LoginTemplate(props: propsType) {
	return (
		<LoginContainer>
			<img src="#" alt="원신 플로우 로고" />
			<p>더 나은 인연을 위해</p>
			<ChildrenContainer>{props.children}</ChildrenContainer>
		</LoginContainer>
	);
}
