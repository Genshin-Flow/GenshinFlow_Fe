import { create } from "zustand";

export type userProfileType = {
	uid: number;
	name: string;
	email: string;
	image: string;
	level: number;
	worldLevel: number;
	towerLevel: string;
	role: string;
	createdAt: string;
	disciplineDate: string;
	disciplinaryHistory: {
		reportId: number;
		disciplinaryAction: string;
		reason: string;
		processedDateTime: string;
	}[];
	warningHistory: {
		reportId: number;
		reason: string;
		processedDateTime: string;
	}[];
	oauthUser: boolean;
};

type setUserActionType = {
	setUserInfo: (userInfo: userProfileType) => void;
};

const defaultUserInfo = {
	uid: 0,
	name: "",
	email: "",
	image: "https://enka.network/ui/UI_AvatarIcon_72173_Circle.png",
	level: 0,
	worldLevel: 0,
	towerLevel: "0",
	role: "",
	createdAt: "",
	disciplineDate: "",
	disciplinaryHistory: [],
	warningHistory: [],
	oauthUser: false,
};

const userStore = create<userProfileType & setUserActionType>((set) => ({
	...defaultUserInfo,
	setUserInfo: (userInfo) => set(userInfo),
}));

export default userStore;
