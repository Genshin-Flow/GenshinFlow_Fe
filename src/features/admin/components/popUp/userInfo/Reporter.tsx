import { styled } from "@/../styled-system/jsx";
import adminStore from "@/stores/adminPage/adminPageStore";
type propsType = {
	reporter: string;
};

export default function Reporter(props: propsType) {
	const { setReporterBoxState } = adminStore();
	return (
		<>
			<ReportTargetText onClick={() => setReporterBoxState(true)}>
				{props.reporter}
			</ReportTargetText>
		</>
	);
}

const ReportTargetText = styled("button", {
	base: {
		cursor: "pointer",
	},
});
