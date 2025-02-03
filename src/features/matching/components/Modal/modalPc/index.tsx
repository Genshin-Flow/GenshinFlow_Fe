import ErrorText from "@/features/matching/components/modalErrorText";
import {
	Btns,
	Button,
	Content,
	ContentInput,
	InputContainer,
	Options,
	PasswordInput,
	QuestInfo,
	TextInput,
	UserInfo,
	UserQuestContainer,
	WarningText,
} from "../styles";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import userStore from "@/stores/userStore";
import { questOptions } from "@/data/MainOptions/mainOptions";
import { timeOptions } from "@/data/MainOptions/mainOptions";
import useLoginStateStore from "@/stores/loginStateStore";
import { Dispatch, SetStateAction } from "react";
import AddPostDropDown from "@/features/matching/components/dropdown/addPostDropdown";
import {
	uidPattern,
	modalPasswordRegular,
	modalWorldLevelRegular,
} from "@/features/loginSignUp/regularExpression/RegularExpression";

type propsType = {
	onClose: () => void;
	setQuest: Dispatch<SetStateAction<string>>;
	quest: string;
	time: string;
	setTime: Dispatch<SetStateAction<string>>;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
	isSubmitting: boolean;
};

/*
	addPost에 필요한 컴포넌트와 메인 페이지의 필터컴포넌트를 분리하여 관리하는게 더 편리하고 알아보기 쉬울거라 예상
*/

export default function AddPostModalPC(props: propsType) {
	const { uid, name, worldLevel } = userStore();
	const { isLogin } = useLoginStateStore();
	return (
		<>
			<UserQuestContainer>
				<UserInfo>
					<p>유저 정보</p>
					<InputContainer>
						<p>UID</p>
						<div className="width80">
							<TextInput
								placeholder="800000000"
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
					<InputContainer>
						<p>닉네임</p>
						<div className="width80">
							<TextInput
								placeholder="여행자"
								defaultValue={name === "" ? "" : name}
								autoComplete="off"
								{...props.register("name", { required: true })}
							/>
							{props.errors?.name?.type === "required" && (
								<ErrorText>닉네임 입력이 필수입니다.</ErrorText>
							)}
						</div>
					</InputContainer>
					<InputContainer>
						<p>월드레벨</p>
						<div className="width80">
							<TextInput
								placeholder="9"
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
				<QuestInfo>
					<p>퀘스트 정보</p>
					<AddPostDropDown
						placeHolder="퀘스트 종류"
						select={props.quest}
						setSelect={props.setQuest}
						itemOptionList={questOptions}
					/>
				</QuestInfo>
			</UserQuestContainer>
			<Content>
				<p>내용</p>
				<ContentInput
					placeholder="내용을 입력해주세요"
					{...props.register("content")}
				/>
			</Content>
			<Options>
				<p>설정</p>
				<div>
					<InputContainer>
						자동 완료 시간
						<AddPostDropDown
							select={props.time}
							itemOptionList={timeOptions}
							setSelect={props.setTime}
						/>
					</InputContainer>
					{!isLogin && (
						<InputContainer>
							비밀번호
							<div>
								<PasswordInput
									type="password"
									placeholder="4자리 숫자+특수문자로 설정해주세요."
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
										4자리 숫자 + 특수문자로 입력 가능합니다.
									</ErrorText>
								)}
							</div>
						</InputContainer>
					)}
				</div>
				<WarningText>
					설정한 시간이 지나면 자동으로 도움을 받은 것으로 처리 됩니다.
				</WarningText>
			</Options>
			<Btns>
				<WarningText>
					상대방을 비방하거나 UID 도용, 악용할 경우 차단당할 수 있습니다.
				</WarningText>
				<div>
					<Button type="cancel" onClick={props.onClose}>
						취소
					</Button>
					<Button type="submit" disabled={props.isSubmitting}>
						작성
					</Button>
				</div>
			</Btns>
		</>
	);
}
