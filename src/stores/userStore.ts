import { create } from "zustand";

export type userProfileType = {
	passwordLeng: string;
	uid: string;
	worldLevel: string;
	travelLevel: string;
	selfIntroduction: string;
	achievements: string;
	fetterCount: string;
	spiralAbyssRoom: string;
	spiralAbyssStar: string;
	theaterRoom: string;
	theaterStar: string;
};

type useInfoType = {
	email: string; //유저 이메일
	userProfile: userProfileType; // 마이페이지에서 사용되는 유저에 관한 정보
};

type setUserActionType = {
	setEmail: (state: string) => void;
	setUserProfile: (state: userProfileType) => void;
};

const defaultUserInfo = {
	email: "gmail",
	userProfile: {
		passwordLeng: "10",
		uid: "85171071",
		worldLevel: "9",
		travelLevel: "60",
		selfIntroduction: "아으ㅏ으ㅏㅏ",
		achievements: "1000",
		fetterCount: "20",
		spiralAbyssRoom: "12",
		spiralAbyssStar: "36",
		theaterRoom: "10",
		theaterStar: "10",
	},
};

const userStore = create<useInfoType & setUserActionType>((set) => ({
	email: defaultUserInfo.email,
	userProfile: defaultUserInfo.userProfile,
	setEmail: (userEmail: string) => {
		set({ email: userEmail });
	},
	setUserProfile: (userProfile: userProfileType) => {
		set({ userProfile });
	},
}));

export default userStore;
