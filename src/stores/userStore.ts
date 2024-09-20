import { create } from "zustand";

type useInfoType = {
	email: string;
	userProfile: string;
};

type setUserActionType = {
	setEmail: (state: string) => void;
	setUserProfile: (state: string) => void;
};

const defaultUserInfo = {
	email: "",
	userProfile: "",
};

const userStore = create<useInfoType & setUserActionType>((set) => ({
	email: defaultUserInfo.email,
	userProfile: defaultUserInfo.userProfile,
	setEmail: (userEmail: string) => {
		set({ email: userEmail });
	},
	setUserProfile: (userProfile: string) => {
		set({ userProfile });
	},
}));

export default userStore;
