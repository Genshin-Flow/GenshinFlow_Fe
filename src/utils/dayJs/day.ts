import dayjs from "dayjs";

export function after60Minutes(ItemCreatedAt: string) {
	return dayjs(ItemCreatedAt).format("YYYY-MM-DD HH:mm");
}

export function before60Minutes(ItemCreatedAt: string) {
	const createdAt = new Date(ItemCreatedAt);
	const now = new Date();
	const timeDifference = now.getTime() - createdAt.getTime();
	let minutesAgo = Math.floor(timeDifference / (1000 * 60));
	return minutesAgo;
}
