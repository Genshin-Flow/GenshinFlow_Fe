"use client";
import MainTemplate from "@/components/loginSignUp/template/MainTemplate";
import Select from "@/components/loginSignUp/Select";
import SelectContainer from "@/components/loginSignUp/template/SelectContainer";
import Login from "@/components/loginSignUp/Login";
import { useState } from "react";
import LoginDefaultInfo from "@/components/loginSignUp/template/LoginTemplateDefaultInfo";

export type stateType = "login" | "signUp" | null;

export default function Home() {
	const [SelectBtn, SetSelectBtn] = useState<stateType>(null);
	return (
		<div>
			<MainTemplate>
				<SelectContainer SelectBtn={SelectBtn}>
					<LoginDefaultInfo />
					<Select SetSelectBtn={SetSelectBtn} />
					<Login />
				</SelectContainer>
			</MainTemplate>
		</div>
	);
}
