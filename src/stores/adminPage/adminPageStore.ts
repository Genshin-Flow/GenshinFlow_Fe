import { create } from "zustand";

type adminPageType = {
	imageBoxState: boolean;
	reporterBoxState: boolean;
	reportTargetBoxState: boolean;
};

type setAdminPageType = {
	setImageBox: (boxState: boolean) => void;
	setReporterBoxState: (boxState: boolean) => void;
	setReportTargetBoxState: (boxState: boolean) => void;
};

const defaultUserInfo = {
	imageBox: false,
	reporterBoxState: false,
	reportTargetBoxState: false,
};

const adminStore = create<adminPageType & setAdminPageType>((set) => ({
	imageBoxState: defaultUserInfo.imageBox,
	reporterBoxState: defaultUserInfo.reporterBoxState,
	reportTargetBoxState: defaultUserInfo.reportTargetBoxState,
	setImageBox: (userEmail: boolean) => {
		set({ imageBoxState: userEmail });
	},
	setReporterBoxState: (reporterBoxState: boolean) => {
		set({ reporterBoxState: reporterBoxState });
	},
	setReportTargetBoxState: (reportTargetBox: boolean) => {
		set({ reportTargetBoxState: reportTargetBox });
	},
}));

export default adminStore;
