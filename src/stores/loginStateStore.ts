import { create } from "zustand";

interface LoginState {
	isLogin: boolean;
	setIsLogin: (value: boolean) => void;
}

const useLoginStateStore = create<LoginState>((set) => ({
	isLogin: false,
	setIsLogin: (value) => set({ isLogin: value }),
}));

export default useLoginStateStore;
