import { refetchType } from "@/features/matching/components/tab";
import { guestCompletePost } from "@/fetch/Main/moreOption/guest/guestCompletePost";
import { userCompletePost } from "@/fetch/Main/moreOption/user/userComplete";
class returnResponse extends Error {
	response: Response;
	constructor(response: Response) {
		super();
		this.response = response;
	}
}

export async function completePost(
	loginState: boolean,
	postId: number,
	accessToken: string,
	refetch: refetchType,
	password?: string,
) {
	try {
		const response = loginState
			? await userCompletePost(postId, accessToken)
			: await guestCompletePost(postId, password);
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
