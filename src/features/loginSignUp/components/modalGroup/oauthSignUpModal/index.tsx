import { ModalBackground } from "@/features/matching/components/modal/styles";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { oauthSignUp } from "@/fetch/Login/oauthSIgnUp/oauthSignUp";
import { OauthSignUpModalProps } from "@/features/matching/components/tab";
import { loadingToast } from "@/utils/customToast/customToast";
import {
	OauthSignUpModalContainer,
	OauthSignUpTitle,
	OauthSubTitle,
	OauthSignUpUidInput,
	StatusText,
	OauthSubmitButton,
} from "./style";

type Status = "wait" | "sameAccount" | "create" | "error" | "sameUid";

type LoadingToast = OauthSignUpModalProps["loadingToast"];

export function OauthSignUpModal({
	email,
	provider,
	onClose,
}: OauthSignUpModalProps) {
	const [uid, setUid] = useState("");
	const [status, setStatus] = useState<Status>("wait");
	const modalRef = useRef<HTMLDivElement>(null);

	useOutsideClick(modalRef, onClose);

	return (
		<ModalBackground>
			<form
				action="#"
				onSubmit={(e) =>
					onSubmitHandler(e, email, uid, provider, setStatus, loadingToast)
				}
			>
				<OauthSignUpModalContainer ref={modalRef}>
					<OauthSignUpTitle>UID를 입력해주세요</OauthSignUpTitle>
					<OauthSubTitle>
						입력하지 않으면 계정이 생성되지 않습니다.
					</OauthSubTitle>
					<OauthSignUpUidInput
						placeholder="UID를 입력해주세요"
						onChange={(e) => onChangeHandler(e, setUid)}
						required
						value={uid}
					/>
					<StatusText status={status}>{selectText(status)}</StatusText>
					<OauthSubmitButton>제출</OauthSubmitButton>
				</OauthSignUpModalContainer>
			</form>
		</ModalBackground>
	);
}

function onChangeHandler(
	e: React.ChangeEvent<HTMLInputElement>,
	setUid: (uid: string) => void,
) {
	const target = e.target as HTMLInputElement;
	const value = target.value.replace(/[^0-9]/g, "");
	setUid(value);
}

async function onSubmitHandler(
	e: React.FormEvent<HTMLFormElement>,
	email: string,
	uid: string,
	provider: string,
	setStatus: (status: Status) => void,
	loadingToast: LoadingToast,
) {
	e.preventDefault();
	const response = await loadingToast(
		oauthSignUp(email, Number(uid), provider),
	);
	if (!response.ok) {
		switch (response.status) {
			case 409:
				setStatus("sameUid");
				break;
			case 404:
				setStatus("sameAccount");
				break;
			default:
				setStatus("error");
				break;
		}
	}
}

function selectText(status: Status) {
	if (status === "create") {
		return "계정이 생성되었습니다!";
	} else if (status === "sameAccount") {
		return "이미 존재하는 계정입니다!";
	} else if (status === "sameUid") {
		return "이미 존재하는 UID입니다!";
	} else if (status === "error") {
		return "계정 생성에 실패했습니다 다시 시도 해주세요!";
	} else if (status === "wait") {
		return "제출 대기중!";
	}
}
