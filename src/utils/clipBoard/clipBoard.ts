import { successToast, errorToast } from "@/utils/customToast/customToast";
export async function copyClipBoard(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
	const target = event.target as HTMLButtonElement;
	const $copyTextDom = target.children[1] as HTMLSpanElement;
	console.log($copyTextDom);
	const copyText = $copyTextDom.innerText;
	navigator.clipboard
		.writeText(copyText)
		.then(() => {
			successToast("복사완료!");
		})
		.catch(() => {
			errorToast("복사 실패 디시 시도해 주세요");
		});
}
