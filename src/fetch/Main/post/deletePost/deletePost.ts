import { refetchType } from "@/features/matching/components/tab";
import { guestDeletePost } from "@/fetch/Main/moreOption/guest/guestDeletePost";
import { userDeletePost } from "@/fetch/Main/moreOption/user/userDeletePost";
class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function deletePost(
	loginState: boolean,
	postId: number,
	accessToken: string,
	refetch: refetchType,
	password?: string,
) {
	try {
		const response = loginState
			? await userDeletePost(postId, accessToken)
			: await guestDeletePost(postId, password);
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
