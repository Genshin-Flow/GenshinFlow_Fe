import { styled } from "@/../styled-system/jsx";
import adminStore from "@/stores/adminPage/adminPageStore";

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

const ReportTargetText = styled("button", {
	base: {
		cursor: "pointer",
	},
});
