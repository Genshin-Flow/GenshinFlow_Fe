import Dropdown from "@/features/matching/components/Dropdown";
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
import AddPostDropDown from "@/features/matching/components/Dropdown/addPostDropdown";
import {
	uidPattern,
	modalPasswordRegular,
	modalWorldLevelRegular,
} from "@/features/loginSignUp/regularExpression/RegularExpression";

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
								{...props.register("uid", {
									required: true,
									pattern: uidPattern,
								})}
							/>
							{props.errors?.uid?.type === "pattern" && (
								<ErrorText>숫자만 입력이 가능합니다.</ErrorText>
							)}
							{props.errors?.uid?.type === "required" && (
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
							{props.errors?.name?.type === "required" && (
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
								{...props.register("worldLevel", {
									required: true,
									pattern: modalWorldLevelRegular,
								})}
							/>
							{props.errors?.worldLevel?.type === "pattern" && (
								<ErrorText>한 글자의 숫자만 입력할 수 있습니다</ErrorText>
							)}
							{props.errors?.worldLevel?.type === "required" && (
								<ErrorText>월드레벨 입력은 필수입니다</ErrorText>
							)}
						</div>
					</InputContainer>
				</UserInfo>
				<QuestInfo isMobile={props.isMobile}>
					<p>퀘스트 정보</p>
					<AddPostDropDown
						placeHolder="퀘스트 종류"
						select={props.quest}
						setSelect={props.setQuest}
						itemOptionList={questOptions}
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
						<AddPostDropDown
							select={props.time}
							setSelect={props.setTime}
							itemOptionList={timeOptions}
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
								placeholder="문자, 숫자, 기호 중 두 가지 이상을 포함하고 8자 이상"
								isMobile={props.isMobile}
								{...props.register("password", {
									required: true,
									pattern: modalPasswordRegular,
								})}
							/>
							{props.errors?.password?.type === "required" && (
								<ErrorText>비밀번호 입력은 필수입니다.</ErrorText>
							)}
							{props.errors?.password?.type === "pattern" && (
								<ErrorText>
									비밀번호는 문자, 숫자, 기호 중 두 가지 이상을 포함하고 8자
									이상이어야 합니다.
								</ErrorText>
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
