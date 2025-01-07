import Dropdown from "@/features/matching/components/dropdown";
import {
	Button,
	Content,
	ContentInput,
	FlexWrapper,
	InputContainer,
	InputWrapper,
	MobileBtns,
	MobileText,
	Options,
	PasswordInput,
	QuestInfo,
	TextInput,
	UserInfo,
	UserQuestContainer,
	WarningText,
} from "@/features/matching/components/modal/styles";
import { Dispatch, SetStateAction } from "react";
import { questOptions, timeOptions } from "@/data/MainOptions/mainOptions";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import ErrorText from "@/features/matching/components/modalErrorText";
import useLoginStateStore from "@/stores/loginStateStore";
import userStore from "@/stores/userStore";

type propsType = {
	isMobile: boolean;
	onClose: () => void;
	setQuest: Dispatch<SetStateAction<string>>;
	quest: string;
	time: string;
	setTime: Dispatch<SetStateAction<string>>;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
	isSubmitting: boolean;
};

export default function AddPostModalMobile(props: propsType) {
	const { uid, name, worldLevel } = userStore();
	const { isLogin } = useLoginStateStore();
	return (
		<>
			<UserQuestContainer isMobile={props.isMobile}>
				<UserInfo isMobile={props.isMobile}>
					<p>유저 정보</p>
					<InputContainer isMobile={props.isMobile}>
						<div>UID</div>
						<div className="mobileInputGroup">
							<TextInput
								placeholder="800000000"
								isMobile={props.isMobile}
								defaultValue={uid === 0 ? "" : uid}
								autoComplete="off"
								{...props.register("uid", { required: true })}
							/>
							{props.errors?.uid && (
								<ErrorText>uid의 입력은 필수입니다</ErrorText>
							)}
						</div>
					</InputContainer>
					<InputContainer isMobile={props.isMobile}>
						<div>닉네임</div>
						<div className="mobileInputGroup">
							<TextInput
								placeholder="여행자"
								isMobile={props.isMobile}
								defaultValue={name === "" ? "" : name}
								autoComplete="off"
								{...props.register("name", { required: true })}
							/>
							{props.errors?.name && (
								<ErrorText>닉네임 입력이 필수입니다.</ErrorText>
							)}
						</div>
					</InputContainer>
					<InputContainer isMobile={props.isMobile}>
						<div>월드레벨</div>
						<div className="mobileInputGroup">
							<TextInput
								placeholder="9"
								isMobile={props.isMobile}
								defaultValue={worldLevel === 0 ? "" : worldLevel}
								autoComplete="off"
								{...props.register("worldLevel", { required: true })}
							/>
							{props.errors?.worldLevel && (
								<ErrorText>월드레벨 입력은 필수입니다</ErrorText>
							)}
						</div>
					</InputContainer>
				</UserInfo>
				<QuestInfo isMobile={props.isMobile}>
					<p>퀘스트 정보</p>
					<Dropdown
						placeholder="퀘스트 종류"
						value={props.quest}
						setValue={props.setQuest}
						options={questOptions}
					/>
				</QuestInfo>
			</UserQuestContainer>
			<Content isMobile={props.isMobile}>
				<p>내용</p>
				<ContentInput
					placeholder="맵 밀어주실 착한 분 구해요. 한 5판 할 것 같아요."
					isMobile={props.isMobile}
					{...props.register("content")}
				/>
			</Content>
			<Options isMobile={props.isMobile}>
				<p>설정</p>
				<FlexWrapper>
					<MobileText>자동완료시간</MobileText>
					<InputWrapper>
						<Dropdown
							value={props.time}
							setValue={props.setTime}
							options={timeOptions}
							isMobile2={props.isMobile}
						/>
					</InputWrapper>
				</FlexWrapper>
				<WarningText>
					설정한 시간이 지나면 자동으로 도움을 받은 것으로 처리 됩니다.
				</WarningText>
				{!isLogin && (
					<InputContainer isMobile2={props.isMobile}>
						<div>비밀번호</div>
						<div className="mobileInputGroup">
							<PasswordInput
								type="password"
								placeholder="4자리 숫자+특수문자로 설정해주세요."
								isMobile={props.isMobile}
								{...props.register("password", { required: true })}
							/>
							{props.errors?.password && (
								<ErrorText>비밀번호 입력은 필수입니다.</ErrorText>
							)}
						</div>
					</InputContainer>
				)}
				<WarningText>
					상대방을 비방하거나 UID 도용, 악용할 경우 차단당할 수 있습니다.
				</WarningText>
			</Options>
			<MobileBtns>
				<Button type="cancel" onClick={props.onClose} isMobile={props.isMobile}>
					취소
				</Button>
				<Button
					type="submit"
					isMobile={props.isMobile}
					disabled={props.isSubmitting}
				>
					작성
				</Button>
			</MobileBtns>
		</>
	);
}
