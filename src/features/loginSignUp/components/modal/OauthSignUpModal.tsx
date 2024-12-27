import { ModalBackground } from "@/features/matching/components/Modal/styles";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { styled } from "@/../styled-system/jsx";
import { oauthSignUp } from "@/fetch/Login/oauthSIgnUp/oauthSignUp";
import { OauthSignUpModalProps } from "@/features/matching/components/Tab";
import { loadingToast } from "@/utils/customToast/customToast";

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
	loadingToast(oauthSignUp(email, Number(uid), provider))
		.then((response) => {
			if (response.ok) {
				setStatus("create");
			}
		})
		.catch(async (error) => {
			const response = await error.response;
			if (response.status === 409) {
				setStatus("sameUid");
			} else if (response.status === 404) {
				setStatus("sameAccount");
			} else if (!response.ok) {
				setStatus("error");
				return;
			}
		});
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

const OauthSignUpModalContainer = styled("div", {
	base: {
		width: "420px",
		padding: "20px",
		backgroundColor: "#fff",
		borderRadius: "10px",
	},
});

const OauthSignUpTitle = styled("h2", {
	base: {
		fontWeight: "700",
		marginBottom: "2px",
		textStyle: "lg",
	},
});

const OauthSubTitle = styled("p", {
	base: {
		fontWeight: "700",
		marginBottom: "15px",
		textStyle: "xs",
		color: "gray.04",
	},
});

const OauthSignUpUidInput = styled("input", {
	base: {
		width: "100%",
		borderRadius: "10px",
		height: "40px",
		border: "1px solid {colors.gray.01}",
		padding: "0 10px",
	},
});

const StatusText = styled("p", {
	base: {
		textStyle: "xs",
		marginTop: "5px",
		fontWeight: "700",
		transition: "color 0.4s ease",
	},
	variants: {
		status: {
			sameAccount: {
				color: "secondary.01",
			},
			sameUid: {
				color: "secondary.01",
			},
			create: {
				color: "green",
			},
			wait: {
				color: "gray.01",
			},
			error: {
				color: "red",
			},
		},
	},
});

const OauthSubmitButton = styled("button", {
	base: {
		minWidth: "60px",
		textStyle: "xs",
		backgroundColor: "primary.01",
		padding: "5px 15px",
		marginTop: "10px",
		cursor: "pointer",
		color: "#fff",
		transition: "all 0.3s ease",
		"&:hover": {
			backgroundColor: "primary.04",
			color: "black",
		},
	},
});
