import { create } from "zustand";

type tokenType = {
	accessToken: string;
};

type tokenActionType = {
	setAccessToken: (accessToken: string) => void;
};

const useTokenStore = create<tokenType & tokenActionType>((set) => ({
	accessToken: "",
	setAccessToken: (accessToken: string) => set({ accessToken }),
}));

export default useTokenStore;
