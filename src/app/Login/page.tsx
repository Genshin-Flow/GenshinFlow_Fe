import Select from "@/components/loginSignUp/Select";
import { styled } from "@/../styled-system/jsx";
import OauthButton from "@/components/loginSignUp/button/OauthButton";

export default function page() {
	return (
		<LoginBackground>
			<Select />
		</LoginBackground>
	);
}

const LoginBackground = styled("section", {
	base: {
		width: "100%",
		minHeight: "calc(100vh - 120px)",
		maxHeight: "calc(100vh - 120px)",
	},
});
