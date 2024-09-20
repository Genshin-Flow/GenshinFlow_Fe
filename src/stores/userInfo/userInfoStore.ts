import { create } from "zustand";

type defaultInfoType = {
	email: string;
	passwordLength: string;
	uid: string;
	worldLevel: string;
	adventureRank: string;
};

type userInfoSetType = {
	emailSet: (email: string) => void;
	passwordLengthSet: (passNum: string) => void;
	uidSet: (number: string) => void;
	worldLevelSet: (number: string) => void;
	adventureRankSet: (number: string) => void;
};

const defaultInfo = {
	email: "cankyu6@gmail.com",
	passwordLength: "10",
	uid: "",
	worldLevel: "",
	adventureRank: "",
};

const userInfoStore = create<defaultInfoType & userInfoSetType>()((set) => ({
	...defaultInfo,
	emailSet: (email: string) => set(() => ({ email })),
	passwordLengthSet: (Length: string) =>
		set(() => ({ passwordLength: Length })),
	uidSet: (uid: string) => set(() => ({ uid })),
	worldLevelSet: (worldLevel: string) => set(() => ({ worldLevel })),
	adventureRankSet: (adventureRank: string) => set(() => ({ adventureRank })),
}));

export default userInfoStore;
