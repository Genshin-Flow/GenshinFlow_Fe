import MainTemplate from "@/components/loginSignUp/template/MainTemplate";
import Select from "@/components/loginSignUp/Select";
import SelectContainer from "@/components/loginSignUp/template/SelectContainer";
export default function Home() {
	return (
		<div>
			<MainTemplate>
				{/* <Select /> */}
				<SelectContainer>
					<Select />
				</SelectContainer>
			</MainTemplate>
		</div>
	);
}
