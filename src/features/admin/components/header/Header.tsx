import { styled } from "@/../styled-system/jsx";

export default function Header() {
	return (
		<HeaderContainer>
			<HeaderTitle>Genshin Flow</HeaderTitle>
			<UserProfile>
				<img src="" alt="" />
			</UserProfile>
		</HeaderContainer>
	);
}

const HeaderContainer = styled("header", {
	base: {
		width: "100%",
		height: "76px",
		padding: "20px 40px",
		backgroundColor: "#fff",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

const HeaderTitle = styled("h1", {
	base: {
		textStyle: "xl",
	},
});

const UserProfile = styled("figure", {
	base: {
		width: "36px",
		height: "36px",
		borderRadius: "50%",
		overflow: "hidden",
		backgroundColor: "#D9D9D9",
	},
});
