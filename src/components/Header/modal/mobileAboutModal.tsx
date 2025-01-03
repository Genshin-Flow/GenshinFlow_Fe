import useOutsideClick from "@/hooks/useOutsideClick";
import {
	MobileAboutContainer,
	MobileTextContainer,
	TextTitle,
	TextListUl,
	TextListLi,
} from "./styles";
import { ModalBackground } from "@/features/matching/components/modal/styles";
import { useRef, useState } from "react";

type propsType = {
	setModalState: () => void;
};
export default function MobileAboutModal(props: propsType) {
	const modalRef = useRef(null);
	useOutsideClick(modalRef, props.setModalState);
	return (
		<ModalBackground>
			<MobileAboutContainer ref={modalRef}>
				<MobileTextContainer>
					<TextTitle>Genshin Flow에 오신걸 환영합니다</TextTitle>
					<TextListUl>
						<TextListLi>
							본 사이트는 원신의 다인 모드를 지원하기 위해 제작되었습니다.
						</TextListLi>
						<TextListLi>
							로그인을 하지 않아도 사이트의 이용은 가능하지만 패스워드를 꼭
							설정해야합니다
						</TextListLi>
						<TextListLi>
							퀘스트 종류, 월드 레벨 및 세부 사항을 기재하여 사람들과의 매칭에
							도움을 얻으시길 바랍니다.
						</TextListLi>
						<TextListLi>
							본 사이트는 신고를 통해 유저들의 부정 행위를 제재합니다. 제재
							항목은 다음과 같습니다.
						</TextListLi>
						<TextListUl>
							<TextListLi>상업성/홍보성 글 기입</TextListLi>
							<TextListLi>음란/선정성 문구</TextListLi>
							<TextListLi>불법 정보 악용</TextListLi>
							<TextListLi>욕설 및 인신공격</TextListLi>
							<TextListLi>개인 정보 누출</TextListLi>
							<TextListLi>상대 권리 침해</TextListLi>
						</TextListUl>
						<TextListLi>
							경고는 운영진의 확인 후 글 삭제 및 경고 조치, 제재 처리 되며 누적
							시 글 게시 제한 및 사이트 접속 차단 등의 제재가 가해질 수 있으니
							주의하시길 바랍니다.
						</TextListLi>
						<TextListLi>
							모든 Genshin Flow의 요소는 Hoyoverse와 제휴되어 있거나 승인되어
							있지 않습니다.
						</TextListLi>
					</TextListUl>
				</MobileTextContainer>
			</MobileAboutContainer>
		</ModalBackground>
	);
}
