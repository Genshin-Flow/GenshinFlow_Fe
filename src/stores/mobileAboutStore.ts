import { create } from "zustand";

interface mobileAboutState {
	aboutState: boolean;
	setAboutStore: (value: boolean) => void;
}

const mobileAboutStore = create<mobileAboutState>((set) => ({
	aboutState: false,
	setAboutStore: (value) => set({ aboutState: value }),
}));

export default mobileAboutStore;
