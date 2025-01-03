import adminStore from "@/stores/adminPage/adminPageStore";
import { ReportTargetText } from "./style";
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
