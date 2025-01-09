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
import Dropdown from "@/features/matching/components/dropdown";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import userStore from "@/stores/userStore";
import { questOptions } from "@/data/MainOptions/mainOptions";
import { timeOptions } from "@/data/MainOptions/mainOptions";
import useLoginStateStore from "@/stores/loginStateStore";
import { Dispatch, SetStateAction } from "react";

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
								{...props.register("uid", { required: true })}
							/>
							{props.errors?.uid && (
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
							{props.errors?.name && (
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
								{...props.register("worldLevel", { required: true })}
							/>
							{props.errors?.worldLevel && (
								<ErrorText>월드레벨 입력은 필수입니다</ErrorText>
							)}
						</div>
					</InputContainer>
				</UserInfo>
				<QuestInfo>
					<p>퀘스트 정보</p>
					<Dropdown
						placeholder="퀘스트 종류"
						value={props.quest}
						setValue={props.setQuest}
						options={questOptions}
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
						<Dropdown
							value={props.time}
							setValue={props.setTime}
							options={timeOptions}
						/>
					</InputContainer>
					{!isLogin && (
						<InputContainer>
							비밀번호
							<div>
								<PasswordInput
									type="password"
									placeholder="4자리 숫자+특수문자로 설정해주세요."
									{...props.register("password", { required: true })}
								/>
								{props.errors?.password && (
									<ErrorText>비밀번호 입력은 필수입니다.</ErrorText>
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
