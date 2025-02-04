export async function report(
	reporter: string,
	targetUser: string,
	option: string,
	image: File[],
) {
	try {
		if (!process.env.NEXT_PUBLIC_reportApi) {
			throw new Error("신고 api 찾을 수 없음");
		}
		const formDataForSubmit = new FormData();
		for (let i = 0; i <= image.length; i++) {
			formDataForSubmit.append("image", image[i]);
		}
		if (option !== "etc") {
			// 일반 신고
			fetch(process.env.NEXT_PUBLIC_reportApi, {
				method: "post",
				headers: {
					"Content-Type": "multipart/form-data",
				},
				body: JSON.stringify({
					reportingUserId: reporter,
					targetUserId: targetUser,
					content: option,
					image: image,
				}),
			});
		} else {
			const etcValue = document.querySelector(".etcInput") as HTMLInputElement;
			const etcValueText = etcValue.value;
			// 기타 사유 신고
			fetch(process.env.NEXT_PUBLIC_reportApi, {
				method: "post",
				headers: {
					"Content-Type": "multipart/form-data",
				},
				body: JSON.stringify({
					reportingUserId: reporter,
					targetUserId: targetUser,
					content: etcValueText,
					image: image,
				}),
			});
		}
	} catch (error) {
		return false;
	}
}
