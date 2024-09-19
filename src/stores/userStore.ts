import { create } from "zustand";

type useInfoType = {
	email: string; //유저 이메일
	userProfile: string; // 마이페이지에서 사용되는 유저에 관한 정보
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
