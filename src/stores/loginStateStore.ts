import { create } from "zustand";

export type stateType =
	| "login"
	| "signUpSelect"
	| "signUp"
	| "forgotPassword"
	| null;

type loginPageState = {
	selectBtn: stateType;
	modalText: string;
	policyModalState: boolean;
};

type stateActive = {
	setSelectBtn: (state: stateType) => void;
	setModalState: (state: string) => void;
	setPolicyModalState: (state: boolean) => void;
};

const defaultState = {
	selectBtn: null,
	modalText: "",
	policyModalState: false,
};

const loginState = create<loginPageState & stateActive>((set) => ({
	selectBtn: defaultState.selectBtn,
	modalText: defaultState.modalText,
	policyModalState: defaultState.policyModalState,
	setSelectBtn: (selectBtn: stateType) => {
		set({ selectBtn });
	},
	setModalState: (modalText: string) => {
		set({ modalText });
	},
	setPolicyModalState: (policyModalState: boolean) => {
		set({ policyModalState });
	},
}));

export default loginState;
