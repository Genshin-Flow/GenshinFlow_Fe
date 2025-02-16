import { refetchType } from "@/features/matching/components/tab";
import { guestUpPost } from "@/fetch/Main/moreOption/guest/guestUpPost";
import { userUpPost } from "@/fetch/Main/moreOption/user/userUpPost";
class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function upPost(
	loginState: boolean,
	postId: number,
	accessToken: string,
	refetch: refetchType,
	password?: string,
) {
	try {
		const response = loginState
			? await userUpPost(postId, accessToken)
			: await guestUpPost(postId, password);
		if (!response.ok) {
			throw new returnResponse(response);
		}
		refetch();
		return response;
	} catch (error) {
		const err = error as Error;
		if (error instanceof returnResponse) {
			return error.response;
		}
		return new Response(err.message, { status: 500 });
	}
}
