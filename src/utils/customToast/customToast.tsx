import { toast } from "react-toastify";

class customError extends Error {
	response: Promise<Response>;
	constructor(response: Promise<Response>) {
		super();
		this.response = response;
	}
}

export function successToast(message: string) {
	return toast.success(message);
}

export function errorToast(message: string) {
	return toast.error(message);
}

export function warningToast(message: string) {
	return toast.warning(message);
}

export function loadingToast(
	promise: Promise<Response>,
	pendingMessage?: string,
	successMessage?: string,
	errorMessage?: string,
): Promise<Response> {
	try {
		return toast.promise(
			promise.then((response) => {
				if (!response.ok) {
					throw new customError(promise);
				}
				return response; // response 반환
			}),
			{
				pending: pendingMessage || "로딩중입니다.",
				success: successMessage || "로딩 완료!",
				error: errorMessage || "로딩 실패!",
			},
		);
	} catch (error) {
		console.log(error);
		if (error instanceof customError) {
			throw error.response;
		}
		throw error;
	}
}
