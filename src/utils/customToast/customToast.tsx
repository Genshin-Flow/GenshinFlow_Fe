import { toast } from "react-toastify";

class customError extends Error {
	response: Response;
	constructor(response: Response) {
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
					throw new customError(response); // promise 대신 response 전달
				}
				return response; // response 반환
			})
			.catch((error) => {
				if (error instanceof customError) {
					throw error.response;
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
