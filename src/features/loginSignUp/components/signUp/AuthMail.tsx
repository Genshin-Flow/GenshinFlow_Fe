"use client";
import { styled } from "@/../styled-system/jsx";
import Input from "@/features/loginSignUp/components/Input/Input";
import loginState from "@/stores/loginStateStore";
import {
	Dispatch,
	FormEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { postAuthMail } from "@/features/loginSignUp/auth/mailAuth/mailAuth";

type propsType = {
	emailValue: string;
	setEmailValue: Dispatch<SetStateAction<string>>;
	mb: "mb12" | "mb20";
	platform?: "mobile";
};

export default function AuthMail(props: propsType) {
	const { setModalState } = loginState();
	const [postCodeState, setPostCodeState] = useState(0);
	const postCodeVariable = postCodeState ? "postCode" : "";

	useEffect(() => {
		if (postCodeState > 0) {
			setTimeout(() => {
				const decrease = postCodeState - 1;
				setPostCodeState(decrease);
			}, 1000);
		}
	}, [postCodeState]);

	return (
		<AuthMailContainer
			onChange={(event) => changeHandler(event, props.setEmailValue)}
			{...(postCodeVariable && { variant: postCodeVariable })}
			{...(props.mb && { marginBottom: props.mb })}
		>
			<Input
				type={"text"}
				placeholder={"메일주소"}
				margin={"mb0"}
				platform={props.platform}
			/>
			<SendMailCount className="mailAuthCount">{postCodeState}s</SendMailCount>
			<SendMailButton
				className="postMailAuth"
				onClick={() =>
					postAuthMail(props.emailValue, setModalState, setPostCodeState)
				}
				type="button"
				{...(props.platform && { platform: props.platform })}
			>
				인증코드 받기
			</SendMailButton>
		</AuthMailContainer>
	);
}

function changeHandler(
	event: FormEvent<HTMLDivElement>,
	setEmailValue: Dispatch<SetStateAction<string>>,
) {
	const target = event.target as HTMLInputElement;
	const emailValue = target.value;
	setEmailValue(emailValue);
}

const AuthMailContainer = styled("div", {
	base: {
		width: "100%",
		position: "relative",
	},

	variants: {
		variant: {
			postCode: {
				"& .mailAuthCount": {
					pointerEvents: "none",
					display: "block",
				},
				"& .postMailAuth": {
					pointerEvents: "none",
					color: "gray.03",
				},
			},
		},
		marginBottom: {
			mb12: {
				marginBottom: "12px",
			},
			mb20: {
				marginBottom: "20px",
			},
		},
	},
});

const SendMailCount = styled("span", {
	base: {
		textStyle: "sm",
		position: "absolute",
		top: "50%",
		right: "130px",
		transform: "translateY(-50%)",
		display: "none",
		color: "gray.04",
	},
});

const SendMailButton = styled("button", {
	base: {
		textStyle: "md",
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		right: "30px",
		cursor: "pointer",
		color: "black",
	},

	variants: {
		variant: {
			active: {
				color: "gray.04",
			},
		},
		platform: {
			mobile: {
				right: "12px",
			},
		},
	},
});
