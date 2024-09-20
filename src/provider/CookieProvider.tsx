"use client";
import { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";

type propsType = {
	children: ReactNode;
};

export default function CookieProvider(props: propsType) {
	return <CookiesProvider>{props.children}</CookiesProvider>;
}
