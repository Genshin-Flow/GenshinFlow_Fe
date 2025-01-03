import adminStore from "@/stores/adminPage/adminPageStore";
import { ReportTargetText } from "./style";

type propsType = {
	reportTarget: string;
};

export default function ReportTarget(props: propsType) {
	const { setReportTargetBoxState } = adminStore();
	return (
		<ReportTargetText onClick={() => setReportTargetBoxState(true)}>
			{props.reportTarget}
		</ReportTargetText>
	);
}
