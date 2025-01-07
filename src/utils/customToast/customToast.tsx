import { toast } from "react-toastify";

export type loadingToastType = (
	promise: Promise<any>,
	pendingMessage?: string,
	successMessage?: string,
	errorMessage?: string,
) => Promise<any>;

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
	return toast.promise(
		promise
			.then((response) => {
				if (!response.ok) {
					throw new customError(Promise.reject(response)); // Promise로 감싸기
				}
				return response;
			})
			.catch((error) => {
				if (error instanceof customError) {
					return error.response; // customError의 response 반환
				}
				return error;
			}),
		{
			pending: pendingMessage || "로딩중입니다.",
			success: successMessage || "로딩 완료!",
			error: errorMessage || "로딩 실패!",
		},
	);
}
