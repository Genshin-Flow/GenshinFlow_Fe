import {
	ConfirmContainer,
	ConfirmHeader,
	ConfirmBody,
	ConfirmBodyText,
	ConfirmButtonContainer,
	ConfirmButton,
	ConfirmPasswordContainer,
	ConfirmPasswordInput,
	ContentContainer,
	Content,
	WaringText,
} from "./style";
import { PostContent } from "@/features/matching/components/tab";
import { confirmType } from "@/features/matching/components/matchingPostItem";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ModalBackground } from "@/features/matching/components/modal/styles";
import React, { useRef } from "react";
import useLoginStateStore from "@/stores/loginStateStore";
import { loadingToast } from "@/utils/customToast/customToast";
import { completePost } from "@/fetch/Main/post/completePost/completePost";
import { deletePost } from "@/fetch/Main/post/deletePost/deletePost";
import { upPost } from "@/fetch/Main/post/upPost/upPost";
import { FieldValues, useForm } from "react-hook-form";
import { modalPasswordRegular } from "@/features/loginSignUp/regularExpression/RegularExpression";
import { getAccessToken } from "@/fetch/Token/getAccessToken/getAccessToken";
import { refetchType } from "@/features/matching/components/tab";
type propsType = {
	postInfo: PostContent;
	type: confirmType;
	modalClose: () => void;
	refetch: refetchType;
};

export default function ConfirmModal(props: propsType) {
	const confirmRef = useRef<HTMLDivElement>(null);
	const { isLogin, setIsLogin } = useLoginStateStore();
	useOutsideClick(confirmRef, props.modalClose);
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm();
	const buttonFn = async (item: PostContent, data: FieldValues) => {
		try {
			let accessToken = "";
			if (isLogin) {
				const tokenResponse = await getAccessToken(setIsLogin);
				const tokenResult = await tokenResponse.json();
				accessToken = tokenResult.accessToken;
			}
			switch (props.type) {
				case "complete":
					await loadingToast(
						completePost(
							isLogin,
							item.id,
							accessToken,
							props.refetch,
							data.password,
						),
						"완료처리 중",
						"완료처리 성공!",
						"완료처리 실패!",
					);
					break;
				case "delete":
					await loadingToast(
						deletePost(
							isLogin,
							item.id,
							accessToken,
							props.refetch,
							data.password,
						),
						"삭제 중",
						"삭제 성공!",
						"삭제 실패!",
					);
					break;
				case "postUp":
					await loadingToast(
						upPost(isLogin, item.id, accessToken, props.refetch, data.password),
						"끌어올리기 중",
						"끌어올리기 성공!",
						"끌어올리기 실패!",
					);
					break;
				default:
					props.modalClose();
					break;
			}
		} catch (error) {
			const err = error as Error;
			return new Response(err.message, { status: 500 });
		}
	};
	return (
		<ModalBackground>
			<form
				action=""
				onSubmit={handleSubmit((data) => buttonFn(props.postInfo, data))}
			>
				<ConfirmContainer ref={confirmRef}>
					<ConfirmHeader>{selectText(props.type)}</ConfirmHeader>
					<ConfirmBody>
						{props.type && (
							<ConfirmBodyText>{selectBody(props.type)}</ConfirmBodyText>
						)}
						<ContentContainer>
							<Content>{props.postInfo.content}</Content>
						</ContentContainer>
						{!isLogin && (
							<ConfirmPasswordContainer>
								<ConfirmPasswordInput
									placeholder="비밀번호 입력"
									{...register("password", {
										required: true,
										pattern: modalPasswordRegular,
									})}
								/>
							</ConfirmPasswordContainer>
						)}
						{errors?.password && (
							<WaringText>비밀번호가 일치하지 않습니다.</WaringText>
						)}
						<ConfirmButtonContainer>
							<ConfirmButton buttonState="cancel" onClick={props.modalClose}>
								취소
							</ConfirmButton>
							<ConfirmButton buttonState="agree" disabled={isSubmitting}>
								{selectText(props.type)}
							</ConfirmButton>
						</ConfirmButtonContainer>
					</ConfirmBody>
				</ConfirmContainer>
			</form>
		</ModalBackground>
	);
}

function selectBody(type: confirmType) {
	switch (type) {
		case "complete":
			return "작성한 포스트를 완료 처리 하시겠습니까?";
		case "delete":
			return "작성한 포스트를 삭제 처리 하시겠습니까?";
		case "postUp":
			return "작성한 포스트를 끌어 올리시겠습니까?";
	}
}

function selectText(type: confirmType) {
	switch (type) {
		case "complete":
			return "완료";
		case "delete":
			return "삭제";
		case "postUp":
			return "끌어올리기";
	}
}
