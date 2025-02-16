import {
	AttachButton,
	AttachButtonContainer,
	AttachButtonText,
	AttachInput,
	MoreImagePreview,
	PreviewImageContainer,
} from "@/features/matching/components/radio/styles";
import React, { useEffect } from "react";

const previewImageSize = {
	width: 40,
	height: 40,
};
export default function ReportAttackButton({
	image,
	setImage,
}: {
	image: File[];
	setImage: React.Dispatch<React.SetStateAction<File[]>>;
}) {
	useEffect(() => {
		createPreviewImage(image);
	}, [image]);
	return (
		<AttachButtonContainer>
			<AttachInput
				type="file"
				id="attachFile"
				accept="image/*"
				multiple
				onChange={(event) => attachFileHandler(event, image, setImage)}
			/>
			<AttachButton htmlFor="attachFile">
				<img src="/svgs/file.svg" alt="이미지 첨부 버튼" />
			</AttachButton>
			{image.length === 0 && (
				<AttachButtonText>
					(1mb 이하의 증거 이미지를 첨부해주세요)
				</AttachButtonText>
			)}
			{image.length > 0 && (
				<PreviewImageContainer className="previewImageContainer">
					{image.length >= 3 && (
						<MoreImagePreview>{image.length}</MoreImagePreview>
					)}
				</PreviewImageContainer>
			)}
		</AttachButtonContainer>
	);
}

function attachFileHandler(
	event: React.ChangeEvent<HTMLInputElement>,
	image: File[],
	setImage: React.Dispatch<React.SetStateAction<File[]>>,
) {
	const target = event.target as HTMLInputElement;
	const files = target.files;
	if (files) {
		Array.from(files).forEach((file) => {
			const result = checkFileType(file);
			const result2 = checkTotalFileSize(image);
			if (!result) {
				alert("이미지 파일만 업로드가 가능합니다.");
				return;
			} else if (!result2) {
				alert(
					"1mb 이하의 이미지 혹은 총합이 1mb 이하의 이미지만 업로드가 가능합니다.",
				);
				return;
			} else {
				setImage((prev) => [...prev, file]);
			}
		});
	}
}

function checkFileType(file: File) {
	if (file.type.match("image/.*")) {
		return true;
	}
	return false;
}

function checkTotalFileSize(image: File[]) {
	const maxTotalSize = 1 * 1024 * 1024; // 1MB
	let totalSize = 0;

	image.forEach((file) => {
		totalSize += file.size;
	});

	if (totalSize > maxTotalSize) {
		return false;
	}
	return true;
}

function createPreviewImage(image: File[]) {
	// 전체를 반복문으로 돌리는 것이 아니라 마지막 이미지만 첨부함으로서 순간적인 깜빡임 제거
	const $previewImageContainer = document.querySelector(
		".previewImageContainer",
	) as HTMLDivElement;
	// $previewImageContainer.innerHTML = "";
	const reader = new FileReader();
	if (image.length > 0 && image.length <= 3) {
		reader.readAsDataURL(image[image.length - 1]);
		reader.onload = () => {
			const $previewImage = document.createElement("img");
			$previewImage.style.width = previewImageSize.width + "px";
			$previewImage.style.height = previewImageSize.height + "px";
			$previewImage.src = reader.result as string;
			$previewImageContainer.insertAdjacentElement("afterbegin", $previewImage);
		};
		reader.abort = () => {
			alert("이미지를 읽는 과정에서 중단되었습니다");
		};
		reader.onerror = () => {
			alert("이미지를 읽는 과정에서 오류가 발생했습니다");
		};
	}
}
