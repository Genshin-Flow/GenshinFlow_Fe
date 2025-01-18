import { Title, ListUl, AboutPaddingContainer, AboutContainer } from "./style";

export default function PcAbout() {
	return (
		<AboutPaddingContainer>
			<AboutContainer>
				<Title>Genshin Flow에 오신걸 환영합니다</Title>
				<ListUl>
					<li>본 사이트는 원신의 다인 모드를 지원하기 위해 제작 되었습니다.</li>
					<li>
						로그인을 하지 않아도 사이트 사용은 가능하나 로그인 및 UID 등록을
						해야만 글 게시가 가능합니다.
					</li>
					<li>
						퀘스트 종류, 월드 레벨 및 세부 사항을 기재하여 사람들과의 매칭에
						도움을 얻으시길 바랍니다.
					</li>
					<li>
						본 사이트는 신고를 통해 유저들의 부정 행위를 제재합니다. 제재 항목은
						다음과 같습니다.
					</li>
					<ListUl>
						<li>사업성 / 홍보성 글 기입</li>
						<li>음란 / 선정성 문구</li>
						<li>불법 정보 악용</li>
						<li>욕설 및 인신공격</li>
						<li>개인 정보 누출</li>
						<li>상대 권리 침해</li>
					</ListUl>
					<li>
						경고는 운영진의 확인 후 글 삭제 및 경고 조치 제재 처리 되며 누적 시
						글 게시 제한 및 사이트 접속 차단 등의 제재가 가해질 수 있으니
						주의해주시길 바랍니다.
					</li>
					<li>
						모든 Genshin Flow의 요소는 Hoyoverse와 제휴되어 있거나 승인되어 있지
						않습니다.
					</li>
				</ListUl>
			</AboutContainer>
		</AboutPaddingContainer>
	);
}
