import { Cookies } from "react-cookie";
export function removeCookie(name: string) {
	const cookies = new Cookies();
	cookies.remove(name);
}
