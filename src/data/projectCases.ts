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
  stackDescription: string;
  learnings: { title: string; description: string }[];
  contributionScope?: "project";
  github?: string;
  pr?: string;
  demo?: string;
  demoKind?: "live" | "video";
  award?: string;
  sourceNote?: string;
};

export const projectCases: ProjectCase[] = [
  {
    slug: "local-hub",
    contributionScope: "project",
    stackDescription: "Vue·Leaflet으로 지도 탐색 화면을 구성하고, FastAPI와 LangGraph로 질문 분류부터 데이터 조회·답변 생성까지 연결했습니다.",
    learnings: [
      { title: "질문에 따라 검색 경로 나누기", description: "장소 데이터 조회와 커뮤니티 검색을 분리한 구조입니다. 질문이 요구하는 정보에 따라 접근할 데이터와 조회 방법을 먼저 정하는 설계를 살펴볼 수 있습니다." },
      { title: "사용자 화면과 검색 흐름 연결하기", description: "지도 탐색과 챗봇을 같은 서비스 안에 구성했습니다. 사용자가 직접 찾는 방식과 질문으로 찾는 방식을 함께 제공하는 사례입니다." },
    ],
    title: "Local Hub",
    kicker: "Travel · Conversational AI · Text-to-SQL",
    period: "2026",
    role: "지역 정보 · AI 챗봇 프로젝트",
    summary: "서울의 여행지·음식점·축제와 커뮤니티 정보를 지도와 AI 챗봇으로 탐색하는 웹 서비스입니다.",
    problem: "지역 정보를 찾는 질문은 장소 데이터 조회와 커뮤니티 검색처럼 서로 다른 탐색 방식을 필요로 합니다.",
    contributions: [
      "Vue 기반 여행·음식점·축제·커뮤니티 화면과 FastAPI API로 구성된 프로젝트입니다.",
      "챗봇 그래프는 질문 분류 후 Text-to-SQL, 지역 정보 검색, 커뮤니티 검색으로 분기합니다.",
      "서울 지도에서 카테고리와 검색어에 따라 장소를 조회하는 화면을 제공합니다.",
    ],
    decisions: [
      "LangGraph에서 데이터 조회 경로를 나누고 검색 결과를 답변 생성 단계로 연결합니다.",
      "챗봇 API를 메인 FastAPI 서버에 통합해 한 서버에서 실행하도록 구성했습니다.",
    ],
    results: ["지역 탐색 UI와 질문별 검색 경로 구현", "Vue·FastAPI·LangGraph를 연결한 공개 코드"],
    stack: ["Vue", "TypeScript", "Vite", "Python", "FastAPI", "LangGraph", "Leaflet"],
    github: "https://github.com/hypoxisaurea/local_hub",
    sourceNote: "공개 README, 지도 화면, 챗봇 그래프의 구현 기준입니다. 개인별 담당 범위와 정량 성과는 기재하지 않았습니다.",
  },
  {
    slug: "darkaudit",
    stackDescription: "OpenAI Responses API로 화면을 분석하고, YAML로 판정 규칙을 관리했습니다. React·FastAPI로 검토 흐름을 연결하고 Playwright·MSW로 테스트를 구성했습니다.",
    learnings: [
      { title: "모델의 판단과 규칙의 경계", description: "계산할 수 있는 신호와 맥락 해석이 필요한 신호를 나누고, 판단 기준은 별도로 관리했습니다. 무엇을 모델에 맡기고 무엇을 규칙으로 확인할지 정하는 것이 검증 가능한 분석의 출발점이었습니다." },
      { title: "외부 모델 없이도 검증할 수 있는 구조", description: "Fake provider와 Risky/Clean 데이터 쌍을 마련해 분석 결과와 서비스 흐름을 시험할 수 있게 했습니다. 모델 연동과 테스트 환경을 함께 설계하는 경험을 쌓았습니다." },
    ],
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
    demo: "https://dark-audit-seven.vercel.app/",
    demoKind: "live",
    sourceNote: "공개 저장소 README 기준 현재 구현 범위를 정리했습니다.",
  },
  {
    slug: "finagent-sme",
    stackDescription: "LangGraph로 분석 단계의 의존성을 표현하고, PostgreSQL·Chroma로 정형 데이터와 검색 근거를 관리했습니다. FastAPI·Streamlit은 장시간 작업의 상태와 결과를 전달하고, Langfuse·RAGAS는 추적과 평가에 사용했습니다.",
    learnings: [
      { title: "에이전트 협업은 의존성 설계부터", description: "각 분석에 필요한 입력과 선행 작업을 정리해 실행 순서를 나눴습니다. 에이전트의 수보다 어떤 근거를 받아 다음 판단으로 넘기는지가 설계의 중심이었습니다." },
      { title: "실패도 사용자 흐름의 일부", description: "진행 로그, 상태 조회, 재생성, 검증 실패 시 결과 차단을 함께 구성했습니다. 장시간 작업에서는 성공한 결과뿐 아니라 기다리는 과정과 실패 이후의 동작도 설계해야 했습니다." },
    ],
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
    stackDescription: "React·TypeScript로 Chrome Side Panel을 만들고, Gemini 2.5로 영상의 문화적 맥락을 분석했습니다. OpenAI Realtime API·WebRTC로 음성 대화를 연결하고 FastAPI에서 세션 토큰을 발급했습니다.",
    learnings: [
      { title: "AI가 개입하는 위치도 설계 대상", description: "시청 중 필요한 설명을 바로 볼 수 있도록 Side Panel과 타임스탬프별 체크포인트를 선택했습니다. 모델의 답변을 사용자가 언제, 어디서 접하는지가 학습 흐름을 만드는 중요한 요소였습니다." },
      { title: "분석 결과를 다음 행동으로 연결", description: "문화 설명을 요약·대화·퀴즈로 이어지게 구성했습니다. 생성한 정보를 읽는 것에서 직접 말하고 이해를 확인하는 단계까지 서비스로 연결했습니다." },
    ],
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
    demoKind: "video",
    award: "2025 서울 AI 해커톤 최우수상",
    sourceNote: "공개 저장소 README와 이력서의 담당 역할을 대조해 정리했습니다.",
  },
  {
    slug: "legal-rag",
    stackDescription: "Python·Haystack으로 법률 데이터와 검색 흐름을 다루고, 도메인 임베딩을 fine-tuning했습니다. MRR·NDCG·RAGAS 등으로 검색 순위와 답변 품질을 나누어 평가했습니다.",
    learnings: [
      { title: "비교 가능한 실험의 조건", description: "데이터 버전과 실험 조건을 통제한 뒤 모델을 비교했습니다. 성능 변화의 원인을 설명하려면 학습과 평가의 기준부터 일관되게 정리해야 했습니다." },
      { title: "실패를 다음 학습의 재료로", description: "정답 조문이 검색되지 않는 경우와 상위에 노출되지 않는 경우를 나누어 분석했습니다. 유사한 법률 표현에서 발생하는 실패 사례를 도메인 학습 데이터로 활용했습니다." },
    ],
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
      "MRR@10 최대 약 5.6% 상대 개선 (KoE5: 0.7187 → 0.7590)",
      "KoE5 Recall@10: 0.8203 → 0.8543 · Snowflake Recall@10: 0.8166 → 0.8512",
      "Snowflake MRR@10: 0.7214 → 0.7599",
      "KCSE 2026 제1저자 논문 게재",
      "KCC 2025 공동저자 논문 게재",
      "약관 검토 업무에 적용 가능한 평가 체계 구축",
    ],
    stack: ["Python", "Haystack", "RAG", "Embedding fine-tuning", "MRR", "NDCG", "RAGAS"],
    sourceNote: "기업 프로젝트로 공개 저장소는 없으며, 이력서·논문·지원서의 검증된 내용을 기준으로 정리했습니다.",
  },
  {
    slug: "autorag-nvidia-reranker",
    stackDescription: "Python으로 NVIDIA reranker API를 AutoRAG 인터페이스에 연결하고, 입력·인증·응답의 예외 조건을 유닛 테스트로 확인했습니다.",
    learnings: [
      { title: "새 기능과 기존 사용자의 호환성", description: "기존 호출 순서와 설정 전달 방식을 유지하며 API 모듈을 추가했습니다. 공유 라이브러리에서는 기능을 늘리는 일과 기존 사용자의 동작을 지키는 일을 함께 고려해야 했습니다." },
      { title: "리뷰를 통해 프로젝트에 맞추기", description: "기존 모듈의 패턴을 읽고 메인테이너의 피드백을 반영했습니다. 외부 프로젝트의 설계 규칙을 이해하고 그 안에서 변경을 완성하는 경험을 쌓았습니다." },
    ],
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
    github: "https://github.com/Marker-Inc-Korea/AutoRAG",
    pr: "https://github.com/Marker-Inc-Korea/AutoRAG/pull/1199",
    sourceNote: "2026년 3월 10일 공식 저장소에 병합된 Pull Request를 연결했습니다.",
  },
  {
    slug: "wecation",
    stackDescription: "React·TypeScript로 입력과 매칭 결과 화면을 구현하고, 임베딩으로 성향·관심사 유사도를 다뤘습니다. Python·FastAPI를 활용한 서비스 구조와 Figma 기반 UI/UX 검토를 진행했습니다.",
    learnings: [
      { title: "제한된 시간 안에서 우선순위 정하기", description: "입력 부담을 낮추고 이해할 수 있는 매칭 결과를 보여주는 데 집중했습니다. 핵심 사용자 흐름을 먼저 정해 해커톤 안에서 동작하는 MVP로 완성했습니다." },
      { title: "함께 개발하기 위한 약속", description: "사용자 입력과 매칭 결과, 프로그램 추천 사이의 데이터 계약을 먼저 정리했습니다. 팀이 각자 맡은 부분을 연결할 수 있도록 경계를 설계하는 것도 리드의 역할이었습니다." },
    ],
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
    stackDescription: "Whisper로 음성을 텍스트로 바꾸고, LangChain·OpenAI API를 활용해 자막 처리와 복습 문제 생성을 연결했습니다. AI 기능은 FastAPI로 분리해 React·Spring 서비스와 연동했습니다.",
    learnings: [
      { title: "접근성에서 학습 흐름까지", description: "자막을 제공한 뒤 핵심 내용을 다시 찾고 이해를 확인하는 과정까지 기능을 확장했습니다. 접근성 문제를 실제 수업과 복습의 흐름 안에서 구체화한 경험입니다." },
      { title: "AI와 서비스가 만나는 경계", description: "음성 세그먼트, 추론 결과, JSON 형태의 문제 전달 과정을 다뤘습니다. 여러 사람이 개발하는 서비스에서 AI 출력이 다음 단계에 어떤 형태로 전달될지 함께 정리했습니다." },
    ],
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
      "6인 팀에서 음성 데이터 세그먼트 처리 로직을 분석하고 추론 파이프라인과 백엔드 연동 인터페이스 설계에 기여했습니다.",
      "Whisper 음성 인식 결과를 Llama 3로 교정하고 LangChain을 통해 문제를 JSON 형태로 생성·전달하는 흐름을 구성했습니다.",
    ],
    decisions: [
      "자막 제공에서 끝내지 않고 하이라이팅과 문제 생성을 연결해 수업 후 복습까지 지원했습니다.",
      "AI 기능을 FastAPI로 분리해 React·Spring 기반 서비스와 연동했습니다.",
    ],
    results: ["2024 공개 SW 개발자대회 동상", "실시간 STT와 생성형 AI를 결합한 접근성 서비스 구현"],
    stack: ["Python", "Whisper", "LangChain", "OpenAI API", "FastAPI", "React", "Spring", "AWS"],
    github: "https://github.com/TEAM-Hearus",
    award: "2024 공개 SW 개발자대회 동상",
    sourceNote: "이력서와 포트폴리오의 담당 역할을 기준으로 정리했습니다.",
  },
  {
    "slug": "crypto-whitepaper",
    stackDescription: "Python·Hugging Face로 백서를 전처리하고 CryptoBERT·K-Means로 군집화했습니다. LSTM·GRU 계열 모델을 비교하며 같은 군집 안에서 시계열 예측 모델의 전이 가능성을 실험했습니다.",
    learnings: [
      { title: "텍스트 유사도와 예측을 별도로 확인", description: "백서가 비슷하다는 가설을 군집화로 표현하고, 가격 시계열 모델 비교로 전이 가능성을 살폈습니다. 문서의 의미적 유사성과 예측 성능을 각각 확인하는 실험을 구성했습니다." },
      { title: "실험 단계와 결과의 범위 기록", description: "초기 Doc2Vec·DBSCAN 실험과 이후 CryptoBERT·K-Means 실험을 구분했습니다. GRU 비교 결과 역시 기록된 실험 범위 안에서 해석하도록 정리했습니다." },
    ],
    "title": "암호화폐 백서 기반 유사도 분석",
    "kicker": "NLP · Clustering · Time Series",
    "period": "2024.03 — 2024.08",
    "role": "텍스트 전처리 · 임베딩 · 예측 모델 실험",
    "summary": "암호화폐 백서의 의미적 유사도로 코인을 그룹화하고, 같은 군집 내 가격 예측 모델 전이학습 가능성을 실험한 프로젝트입니다.",
    "problem": "백서 내용이 유사한 코인이 가격 움직임에서도 공통 특성을 보이는지 검토하고자 했습니다.",
    "contributions": [
      "백서 PDF에서 텍스트를 추출·전처리해 분석 데이터셋을 구축했습니다.",
      "CryptoBERT 임베딩과 K=7의 K-Means 클러스터링으로 코인을 그룹화했습니다.",
      "군집별 시계열이 긴 코인을 선정해 LSTM·BiLSTM·GRU·BiGRU를 학습하고 동일 군집의 다른 코인으로 전이학습을 실험했습니다."
    ],
    "decisions": [
      "텍스트 유사도 기반 그룹화와 시계열 예측을 연결해 군집 단위의 전이 가능성을 비교했습니다.",
      "GitHub에는 Doc2Vec·DBSCAN 및 불용어·파라미터 조합의 초기 실험도 기록했습니다."
    ],
    "results": [
      "포트폴리오에 기록된 비교 실험에서 GRU가 가장 좋은 예측 결과를 보임",
      "문서 전처리부터 군집화·시계열 모델 비교까지 실험 수행"
    ],
    "stack": [
      "Python",
      "Hugging Face",
      "CryptoBERT",
      "K-Means",
      "LSTM",
      "GRU"
    ],
    "github": "https://github.com/hypoxisaurea/bitcoin_nlp",
    "sourceNote": "제공된 포트폴리오 10–11쪽 기준입니다. 공개 README는 Doc2Vec·DBSCAN 초기 실험을 설명하며, 전체 최종 실험 코드의 공개 여부는 확인하지 않았습니다."
  },
  {
    "slug": "disclosure-diff",
    contributionScope: "project",
    stackDescription: "Python으로 OpenDART 공시 데이터를 수집하고 JSON 필드의 전후 값을 비교합니다. 원문 근거와 변화량을 구조화해 출력하며 pytest를 테스트에 사용합니다.",
    learnings: [
      { title: "범위를 좁혀 비교 기준 세우기", description: "MVP의 비교 대상을 유상증자 결정 정정공시로 한정했습니다. 문서 유형을 정하고 그 안의 금액·일정 변경을 구조화하는 접근을 살펴볼 수 있습니다." },
      { title: "변경 요약과 원문 근거 함께 제공", description: "변화량·변화율·날짜 차이에 원문 근거 위치와 재검토 필요 여부를 함께 출력합니다. 요약을 읽은 사람이 원문으로 돌아가 확인할 수 있는 비교 구조입니다." },
    ],
    "title": "DisclosureDiff",
    "kicker": "Financial Data · Document Comparison",
    "period": "공개 MVP",
    "role": "공시 데이터 비교 프로젝트",
    "summary": "OpenDART/DART의 유상증자 최초 공시와 정정공시를 연결해 주요 변경사항과 원문 근거를 비교하는 MVP입니다.",
    "problem": "정정공시에서 바뀐 금액과 일정 등을 확인하려면 최초 공시와 정정 문서의 값을 대조해야 합니다.",
    "contributions": [
      "유상증자 정정공시 검색과 후보 데이터 수집 스크립트를 구성했습니다.",
      "접수번호 또는 추출된 JSON을 입력받아 변경 필드와 전후 값을 비교하도록 구현했습니다."
    ],
    "decisions": [
      "현재 비교 범위를 유상증자 결정 정정공시로 한정했습니다.",
      "출력에 변화량·변화율·날짜 차이와 원문 근거 위치를 포함했습니다."
    ],
    "results": [
      "공시 접수번호 기반 비교 MVP",
      "변경사항과 재검토 필요 여부를 구조화해 출력"
    ],
    "stack": [
      "Python",
      "OpenDART",
      "JSON",
      "pytest"
    ],
    "github": "https://github.com/hypoxisaurea/Disclosure_Diff",
    "sourceNote": "공개 README의 구현 범위를 기준으로 정리했습니다. 개인별 기여 비중과 정량 성능은 기재하지 않았습니다."
  },
];

export const getProjectCase = (slug: string) => projectCases.find((project) => project.slug === slug);
