import { styled } from "../../styled-system/jsx";
import Tab from "@/features/matching/components/Tab/";
import Sidebar from "@/features/matching/components/Sidebar";

export default function Home() {
	return (
		<Container>
			<Tab />
			<Sidebar />
		</Container>
	);
}

const Container = styled("div", {
	base: {
		display: "flex",
		maxWidth: "1639px",
		minWidth: "1318px",
		mx: "auto",
		justifyContent: "space-between",
		gap: "20px",
		padding: "40px 40px",
	},
});
