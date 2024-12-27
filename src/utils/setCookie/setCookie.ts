import { Cookies } from "react-cookie";
export function setCookie(name: string, cookie: Cookies) {
	const cookies = new Cookies();
	cookies.set(name, cookie);
}
