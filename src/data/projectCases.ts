export type ProjectCase = {
  slug: string;
  title: string;
  kicker: string;
  period: string;
  role: string;
  summary: string;
  problem: string;
  contributions: string[];
  decisions: string[];
  results: string[];
  stack: string[];
  github?: string;
  demo?: string;
  award?: string;
  sourceNote?: string;
};

export const projectCases: ProjectCase[] = [
  {
    slug: "darkaudit",
    title: "DarkAudit",
    kicker: "Multimodal AI · FinTech · UX Compliance",
    period: "2026",
    role: "AI Engineer · Multimodal Pipeline",
    summary: "금융상품 가입 화면의 다크패턴을 생성형 AI로 점검하고, 판단 근거와 개선 권고를 제공하는 UX 컴플라이언스 도구입니다.",
    problem: "금융상품 가입 과정의 다크패턴은 한 화면만 보아서는 판단하기 어렵고, 규제 문구·선택 상태·시각적 위계·화면 간 흐름을 함께 살펴야 합니다. 가이드라인을 단순 프롬프트에 넣는 방식만으로는 일관된 판정과 재현 가능한 검증이 어렵다는 문제가 있었습니다.",
    contributions: [
      "AI Engineer로서 멀티모달 LLM 기반 UX Risk Detection 파이프라인을 설계하고 구현했습니다.",
      "순서가 있는 1~5개 화면을 하나의 가입 흐름으로 분석하고, Structured Outputs로 Finding을 구조화했습니다.",
      "React 검토 화면, FastAPI API, OpenAI Responses API 분석기를 연결하고 비용 없이 전체 흐름을 시험하는 Fake provider를 마련했습니다.",
      "Risky/Clean 쌍의 합성 UI 데이터셋 생성과 라벨 검수 도구를 구축했습니다.",
    ],
    decisions: [
      "금융위원회 가이드라인의 4개 범주와 15개 세부 유형을 YAML Rule Base로 분리해 규칙 변경과 검증이 가능하도록 했습니다.",
      "대비비·선택 상태처럼 계산 가능한 신호와 의미·맥락처럼 모델이 해석해야 하는 신호를 deterministic/semantic check로 구분했습니다.",
      "단독 근거가 부족한 유형은 다른 행위와 결합될 때만 고위험으로 승격하도록 해 과도한 판정을 줄였습니다.",
    ],
    results: [
      "MVP 탐지 규칙 DA-03, DA-04, DA-12, DA-15 구현",
      "Rule Base 무결성 검증 및 JSON 빌드 자동화",
      "백엔드·AI 단위 테스트와 프론트엔드 E2E/접근성 테스트 경로 구성",
      "2026 금융 AI Challenge 출품",
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "OpenAI Responses API", "Playwright", "MSW", "YAML"],
    github: "https://github.com/hypoxisaurea/DarkAudit",
    sourceNote: "공개 저장소 README 기준 현재 구현 범위를 정리했습니다.",
  },
  {
    slug: "finagent-sme",
    title: "FinAgent-SME",
    kicker: "Multi-agent · Credit Assessment · RAG",
    period: "2026",
    role: "AI Engineer · Agent Workflow",
    summary: "회사명 하나로 기업 식별부터 재무·산업·뉴스 분석, 신용 판단, 보고서 생성과 검증까지 연결하는 중소기업 B2B 거래 리스크 심사 시스템입니다.",
    problem: "중소기업 심사에는 서로 다른 출처의 기업·재무·거시·뉴스 데이터가 필요하며, 분석 과정과 최종 판단 사이의 근거를 추적할 수 있어야 합니다. 긴 분석을 안정적으로 실행하고 중간 상태와 실패 원인을 사용자에게 전달하는 운영 구조도 필요했습니다.",
    contributions: [
      "LangGraph로 Company Resolver, News, Financial, Industry, Risk Event, Decision, Report, Validation 단계의 의존성을 설계했습니다.",
      "FastAPI의 DB-backed 비동기 job과 Streamlit UI를 연결하고 SSE 진행 로그와 polling fallback을 구현했습니다.",
      "OpenDART·ECOS·KOSIS·뉴스 데이터를 PostgreSQL에 연결하고, Chroma 기반 산업 방법론 RAG를 구성했습니다.",
      "request_id 구조화 로그, Langfuse trace/score, RAGAS 평가로 단계별 품질을 추적했습니다.",
    ],
    decisions: [
      "분석 에이전트를 무조건 병렬 실행하지 않고 데이터 의존성에 따라 시작 노드와 후속 노드를 분리했습니다.",
      "보고서 검증이 실패하면 한 차례 재생성하고, 재시도 후에도 실패하면 판단과 보고서를 차단하는 fail-closed 흐름을 적용했습니다.",
      "동기 호출 대신 작업 등록·상태 스트림·결과 조회를 분리해 장시간 실행과 UI 복구 가능성을 확보했습니다.",
    ],
    results: [
      "기업 검색부터 승인 판단·신용등급·추천한도·근거·보고서까지 end-to-end 구현",
      "CI, Docker smoke test, RAGAS artifact workflow 운영",
      "API 계약, ERD, 에러 처리, 테스트 규칙을 포함한 설계 문서화",
      "BDAI PoCaT 1기 프로젝트",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "Chroma", "Streamlit", "Langfuse", "RAGAS", "Docker"],
    github: "https://github.com/hypoxisaurea/FinAgent-SME",
    sourceNote: "공개 저장소 README와 구현 문서를 기준으로 정리했습니다.",
  },
  {
    slug: "kaption",
    title: "Kaption",
    kicker: "Multimodal AI · Chrome Extension · Realtime",
    period: "2025.09 — 2025.10",
    role: "Frontend · UI/UX · AI Pipeline",
    summary: "K-콘텐츠 시청자가 자막 너머의 문화적 맥락을 이해하고 AI 튜터와 대화하며 학습하도록 돕는 Chrome Extension입니다.",
    problem: "번역 자막만으로는 호칭, 높임말, 음식과 관습처럼 장면에 숨어 있는 문화적 의미를 충분히 전달하기 어렵습니다. 영상 시청을 방해하지 않으면서 필요한 순간에 설명과 상호작용을 제공해야 했습니다.",
    contributions: [
      "React·TypeScript로 Chrome Side Panel 기반 프론트엔드와 UI/UX를 구현했습니다.",
      "Gemini 2.5 영상 분석과 OpenAI Realtime API의 WebRTC 음성 대화를 연결한 멀티모달 흐름을 설계했습니다.",
      "문화 포인트 카드에서 Recap → Think → Quiz로 이어지는 3단계 학습 경험을 구성했습니다.",
      "FastAPI에서 Realtime session token을 안전하게 발급하는 프록시 엔드포인트를 구현했습니다.",
    ],
    decisions: [
      "사용자가 영상을 벗어나지 않도록 별도 웹페이지 대신 Chrome Side Panel을 선택했습니다.",
      "수동 탐색 대신 타임스탬프별 문화 체크포인트를 생성해 설명이 필요한 순간을 바로 찾도록 했습니다.",
      "일방향 설명에 그치지 않도록 요약·대화·퀴즈를 연결해 능동적 학습 흐름을 만들었습니다.",
    ],
    results: [
      "2025 서울 AI 해커톤 최우수상",
      "영상 분석, 실시간 음성 대화, 즉석 퀴즈가 연결된 MVP 완성",
      "한국어 수준과 관심사에 맞춘 개인화 설명 구조 설계",
    ],
    stack: ["React 18", "TypeScript", "Chrome Extension MV3", "FastAPI", "Gemini 2.5", "OpenAI Realtime API", "WebRTC", "Pydantic"],
    github: "https://github.com/hypoxisaurea/Kaption",
    demo: "https://youtu.be/Uo4fp2r2WkY",
    award: "2025 서울 AI 해커톤 최우수상",
    sourceNote: "공개 저장소 README와 이력서의 담당 역할을 대조해 정리했습니다.",
  },
  {
    slug: "legal-rag",
    title: "Legal Contract Review RAG",
    kicker: "Legal AI · Retrieval Evaluation · Research",
    period: "2025",
    role: "AI Researcher",
    summary: "공정거래위원회 AI 약관 심사 플랫폼을 위해 법령 데이터를 구조화하고 검색 품질을 재현 가능하게 평가한 한국어 법률 RAG 프로젝트입니다.",
    problem: "원시 법률 데이터의 형식과 시행 시점이 일정하지 않아 모델을 바꿔도 성능 변화의 원인을 설명하기 어려웠습니다. 유사한 법률 표현 사이에서 정답 조문이 누락되거나 상위에 노출되지 않는 실패도 반복됐습니다.",
    contributions: [
      "국가법령정보센터 API와 원문을 대조해 시행일자 오류를 걸러내고 조문·출처 메타데이터를 보존했습니다.",
      "전처리 원칙을 적용해 한국어 법령 기반 QA 데이터 89,994쌍을 구축했습니다.",
      "retrieval과 generation을 분리하고 Recall, MRR@10, NDCG, RAGAS로 품질을 측정했습니다.",
      "실험 조건과 데이터 버전을 통제하며 도메인 임베딩 모델을 fine-tuning했습니다.",
    ],
    decisions: [
      "모델 교체보다 먼저 데이터 스키마, 평가 지표, 실패 유형을 정의해 개선 원인을 비교할 수 있도록 했습니다.",
      "정답 검색 여부와 상위 노출 순서를 별도 지표로 보아 retrieval 병목을 구체적으로 진단했습니다.",
      "법률 특유의 유사 표현을 구분하지 못하는 사례를 모아 도메인 학습 데이터로 활용했습니다.",
    ],
    results: [
      "MRR@10 최대 5.6% 개선",
      "KCSE 2026 제1저자 논문 게재",
      "KCC 2025 공동저자 논문 게재",
      "약관 검토 업무에 적용 가능한 평가 체계 구축",
    ],
    stack: ["Python", "Haystack", "RAG", "Embedding fine-tuning", "MRR", "NDCG", "RAGAS"],
    sourceNote: "기업 프로젝트로 공개 저장소는 없으며, 이력서·논문·지원서의 검증된 내용을 기준으로 정리했습니다.",
  },
  {
    slug: "autorag-nvidia-reranker",
    title: "AutoRAG — NVIDIA Reranker",
    kicker: "Open Source · RAG Infrastructure",
    period: "2026.01 — 2026.03",
    role: "Open-source Contributor",
    summary: "AutoRAG에 NVIDIA reranker API 모듈을 추가하고 기존 사용자의 호출 방식을 깨뜨리지 않도록 인터페이스와 테스트를 보강한 오픈소스 기여입니다.",
    problem: "여러 사용자가 의존하는 RAG 프레임워크에 새로운 외부 API를 연결할 때는 기능 구현뿐 아니라 기존 모듈과의 일관성, 하위 호환성, 인증·입력·응답 오류 처리가 필요했습니다.",
    contributions: [
      "기존 reranker 모듈의 인터페이스와 설정 전달 흐름을 분석해 NVIDIA API 모듈을 같은 패턴으로 구현했습니다.",
      "API 요청과 응답 변환을 프레임워크 로직에서 분리하고 기존 파라미터 호출 순서를 유지했습니다.",
      "인증 실패, 빈 입력, 비정상 응답과 다양한 edge case를 유닛 테스트로 검증했습니다.",
      "메인테이너 리뷰를 반영해 프로젝트 설계 규칙에 맞게 코드를 개선했습니다.",
    ],
    decisions: [
      "구현 편의보다 하위 호환성을 우선해 기존 사용자의 호출 코드를 변경하지 않도록 했습니다.",
      "외부 서비스 장애가 프레임워크 내부 오류와 섞이지 않도록 API 경계를 명확히 나눴습니다.",
    ],
    results: ["AutoRAG 공식 저장소 PR #1199 병합", "NVIDIA reranker 선택지 확장", "예외 조건을 포함한 회귀 테스트 추가"],
    stack: ["Python", "AutoRAG", "NVIDIA API", "Unit Testing", "Open Source Collaboration"],
    github: "https://github.com/Marker-Inc-Korea/AutoRAG/pull/1199",
    sourceNote: "2026년 3월 10일 공식 저장소에 병합된 Pull Request를 연결했습니다.",
  },
  {
    slug: "wecation",
    title: "Wecation",
    kicker: "Recommendation · Team Lead · Product",
    period: "2025.02",
    role: "Team Lead · Frontend · Matching",
    summary: "워케이션 참가자의 성향과 관심사를 바탕으로 함께할 사람과 프로그램을 추천하는 네트워킹 플랫폼입니다.",
    problem: "낯선 지역에서 시작하는 워케이션은 참가자 간 관계 형성이 어렵고, 짧은 일정 안에서 자신에게 맞는 활동을 찾기 어렵습니다. 제한된 해커톤 시간 안에 입력 부담이 낮고 결과를 이해하기 쉬운 매칭 흐름이 필요했습니다.",
    contributions: [
      "팀 리드로 문제 정의, 기능 우선순위, 전체 서비스 아키텍처를 설계했습니다.",
      "React·TypeScript로 핵심 사용자 흐름과 프론트엔드를 구현했습니다.",
      "사용자의 성향·관심사 데이터를 임베딩하고 유사도 기반 그룹 매칭 로직을 설계했습니다.",
      "Figma로 입력부터 추천 결과까지의 UI/UX를 빠르게 검증했습니다.",
    ],
    decisions: [
      "추천 모델의 복잡도보다 제한된 입력으로도 납득 가능한 그룹 결과를 제공하는 데 우선순위를 두었습니다.",
      "팀별 병렬 개발이 가능하도록 사용자 입력, 매칭 결과, 프로그램 추천의 계약을 먼저 정리했습니다.",
    ],
    results: ["2025 제주 런케이션 AI 해커톤 대상", "제한된 기간 내 작동하는 추천 서비스 MVP 완성"],
    stack: ["React", "TypeScript", "Python", "FastAPI", "Embedding", "Figma"],
    award: "2025 제주 런케이션 AI 해커톤 대상",
    sourceNote: "이력서와 포트폴리오의 담당 역할을 기준으로 정리했습니다.",
  },
  {
    slug: "hearus",
    title: "Hearus",
    kicker: "Accessibility · Speech AI · Education",
    period: "2024.06 — 2024.12",
    role: "PM · AI Engineering",
    summary: "청각장애 학우가 수업 내용을 놓치지 않도록 실시간 자막, 핵심 문장 강조, 자동 문제 생성을 제공하는 학습 보조 서비스입니다.",
    problem: "실시간 자막만으로는 긴 수업에서 중요한 내용을 다시 찾거나 이해 여부를 확인하기 어렵습니다. 음성 인식 결과를 학습에 활용할 수 있는 구조로 전환할 필요가 있었습니다.",
    contributions: [
      "PM과 AI engineering 역할로 접근성 문제와 핵심 학습 흐름을 정의했습니다.",
      "Whisper와 OpenAI API를 LangChain으로 연결해 실시간 STT와 자막 전처리를 구현했습니다.",
      "수업 텍스트에서 복습 문제를 자동 생성하는 기능을 개발했습니다.",
    ],
    decisions: [
      "자막 제공에서 끝내지 않고 하이라이팅과 문제 생성을 연결해 수업 후 복습까지 지원했습니다.",
      "AI 기능을 FastAPI로 분리해 React·Spring 기반 서비스와 연동했습니다.",
    ],
    results: ["2024 공개 SW 개발자대회 동상", "실시간 STT와 생성형 AI를 결합한 접근성 서비스 구현"],
    stack: ["Python", "Whisper", "LangChain", "OpenAI API", "FastAPI", "React", "Spring", "AWS"],
    award: "2024 공개 SW 개발자대회 동상",
    sourceNote: "이력서와 포트폴리오의 담당 역할을 기준으로 정리했습니다.",
  },
];

export const getProjectCase = (slug: string) => projectCases.find((project) => project.slug === slug);
