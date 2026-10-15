export const profile = {
  name: "Swapnaneel Chatterjee",
  firstName: "Swapnaneel",
  title: "Software Engineer · New Grad 2027",
  tagline:
    "Building production distributed systems and agentic AI — MS CS at George Washington University.",
  location: "Washington, D.C.",
  email: "swapnaneel.log.in.16@gmail.com",
  universityEmail: "swapnaneel.chatterjee@gwmail.gwu.edu",
  github: "https://github.com/Swapnaneel1616",
  linkedin: "https://www.linkedin.com/in/swapnaneel-chatterjee-",
  availability: "Open to New Grad 2027 Software Engineering roles",
  about: [
    "I specialize at the intersection of distributed systems and generative AI — turning LLM capabilities into reliable, production-grade agentic workflows.",
    "With 2+ years of backend engineering experience, I have modernized enterprise systems, shipped Spring Boot microservices, and built RAG pipelines designed for horizontal scale.",
    "Currently pursuing an M.S. in Computer Science at GWU (May 2027), I am seeking new-grad Software Engineer roles where I can own systems end-to-end.",
  ],
  highlights: [
    { label: "Booking errors reduced", value: "94.7%" },
    { label: "API latency improved", value: "39%" },
    { label: "Test coverage lifted", value: "89.5%" },
    { label: "Research time cut", value: "77%" },
  ],
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "gwu-it",
    role: "Advanced Technical AI Specialist",
    company: "George Washington University — Information Technology",
    location: "Washington, D.C.",
    period: "Jul 2026 — Present",
    current: true,
    summary:
      "Advancing AI capabilities across the GW technology ecosystem — bridging research ideas with production-ready tooling.",
    bullets: [
      "Designing and supporting AI-assisted solutions that improve teaching, learning, and research workflows for the GW community.",
      "Collaborating with university IT stakeholders to evaluate, prototype, and harden intelligent systems for campus-scale use.",
    ],
    tech: ["Python", "LLMs", "RAG", "APIs", "Cloud"],
  },
  {
    id: "sourceiq",
    role: "Backend Developer",
    company: "SourceIQ",
    location: "United States",
    period: "May 2026 — Present",
    current: true,
    summary:
      "Building backend services and APIs for an early-stage platform — microservices, reliability, and shipping velocity.",
    bullets: [
      "Solving intricate backend problems, standing up microservices, and delivering robust APIs used by the product team.",
      "Contributing to architecture decisions that keep the platform scalable as usage grows.",
    ],
    tech: ["Java", "Spring Boot", "REST", "Microservices", "APIs"],
  },
  {
    id: "hive",
    role: "Research Assistant",
    company: "GWU HIVE Lab — School of Medicine & Health Sciences",
    location: "Washington, D.C.",
    period: "May 2026 — Present",
    current: true,
    summary:
      "Supporting health-informatics research with software engineering and applied AI experimentation.",
    bullets: [
      "Contributing engineering support for research prototypes at the intersection of healthcare data and intelligent systems.",
      "Applying disciplined software practices to academic research software.",
    ],
    tech: ["Python", "Data Pipelines", "ML", "Research Software"],
  },
  {
    id: "sutra",
    role: "Software Engineer",
    company: "Sutra Voyages OPC Pvt Ltd",
    location: "India",
    period: "Jun 2024 — Jul 2025",
    summary:
      "Designed and secured scalable backend systems for travel technology — booking, messaging, and payments.",
    bullets: [
      "Built a Spring Boot + MongoDB booking system that automated workflows, cut booking errors by 94.7%, and improved operational efficiency by 30%.",
      "Integrated RabbitMQ for real-time package management across microservices — reduced latency by ~150ms and accelerated launches by 39.2%.",
      "Engineered payment-gateway REST APIs with GDPR and OWASP alignment — zero security breaches over 12 months.",
    ],
    tech: ["Java", "Spring Boot", "MongoDB", "RabbitMQ", "REST", "OWASP"],
  },
  {
    id: "maxgen",
    role: "Software Engineer",
    company: "Maxgen Technologies",
    location: "India",
    period: "Jun 2023 — Jun 2024",
    summary:
      "Engineered backend services for 45,000+ users with a focus on performance, observability, and migration to cloud-native microservices.",
    bullets: [
      "Maintained 99.9% uptime; optimized queries and Redis caching — API response times improved 39.2%, retrieval under 100ms.",
      "Led monolith-to-microservices migration with Docker and CI/CD — deployment time down 53.4%.",
      "Built Prometheus/Grafana monitoring that cut MTTR by 21%; raised JUnit/Mockito coverage from 43% to 89.5%.",
      "Delivered 15+ major features with product and frontend partners in Agile ceremonies.",
    ],
    tech: ["Java", "Spring Boot", "Redis", "Docker", "CI/CD", "Prometheus", "Grafana"],
  },
];

export type ProjectCategory = "All" | "Distributed Systems" | "Agentic AI" | "ML" | "Full-Stack";

export type Project = {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  blurb: string;
  description: string;
  impact: string[];
  tech: string[];
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "reliefconnect",
    title: "ReliefConnect",
    category: "Distributed Systems",
    blurb:
      "Real-time emergency inventory distribution with transactional locks and sub-3s SMS routing.",
    description:
      "Scalable, real-time inventory distribution and alerting platform for rapid deployment in emergency scenarios. Connects citizens with critical supplies by keeping stock accurate across distributed locations. AWS Lambda + Node.js backends enforce MongoDB transactional locks to process high-velocity inventory claims without stale holds or overselling, and MongoDB geospatial indexing with Twilio routes people to stocked sites via sub-3s SMS alerts during demand spikes.",
    impact: [
      "MongoDB transactional locks prevent overselling under high-velocity claims",
      "Geospatial indexing routes users to the nearest stocked location",
      "Twilio SMS alerts deliver guidance in under 3 seconds during peak demand",
    ],
    tech: ["AWS Lambda", "Node.js", "MongoDB", "Geospatial Indexing", "Twilio", "SMS Alerts"],
    github: "https://github.com/Swapnaneel1616/Hackathon-Project",
    featured: true,
  },
  {
    id: "fitness",
    title: "AI-Integrated Fitness Platform",
    category: "Distributed Systems",
    blurb: "Event-driven microservices with Gemini insights and Keycloak security.",
    description:
      "End-to-end distributed fitness platform on Spring Boot microservices. Event-driven AI via Google Gemini + RabbitMQ generates personalized workout insights, secured with Keycloak (OAuth2) and surfaced through a React dashboard.",
    impact: [
      "Async activity pipelines keep AI inference off the request path",
      "OAuth2/OIDC security with Keycloak across services",
      "Observability-ready microservice topology",
    ],
    tech: ["Spring Boot", "RabbitMQ", "Gemini", "Keycloak", "React", "Docker"],
    github: "https://github.com/Swapnaneel1616/AI-Integrated-Microservices-Fitness-Platform",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "eCommerce Microservices",
    category: "Distributed Systems",
    blurb: "API Gateway, Eureka, Kafka, circuit breakers, and full observability.",
    description:
      "Scalable eCommerce system with Spring Boot, Docker, RabbitMQ, and Kafka. OAuth2/Keycloak security, API Gateway with Eureka, circuit breakers, and a complete observability stack.",
    impact: [
      "Service discovery and gateway routing",
      "Event-driven order/inventory flows",
      "Resilience patterns for production traffic",
    ],
    tech: ["Spring Cloud", "Kafka", "RabbitMQ", "Keycloak", "Eureka", "Docker"],
    github: "https://github.com/Swapnaneel1616/Spring-Boot-eCommerce-Microservices-Application",
    featured: true,
  },
  {
    id: "graphwrite",
    title: "GraphWrite",
    category: "Agentic AI",
    blurb: "Multi-agent LangGraph system that turns one prompt into researched long-form content.",
    description:
      "Agentic blog generation system: specialized agents handle research, drafting, and editing via LangGraph/LangChain, delivered through a Streamlit interface.",
    impact: [
      "Multi-agent research → draft → edit workflow",
      "SEO-oriented long-form generation",
      "Stateful orchestration with LangGraph",
    ],
    tech: ["LangGraph", "LangChain", "Python", "Streamlit"],
    featured: true,
  },
  {
    id: "stateful-agent",
    title: "Stateful Agentic Workflow",
    category: "Agentic AI",
    blurb: "LangGraph multi-actor system with checkpointing and human-in-the-loop.",
    description:
      "Multi-actor workflow with tool-calling agents and persistent state. Checkpointing, conditional paths, and human-in-the-loop handling improved multi-step reasoning reliability by ~33.4%.",
    impact: [
      "~33.4% better multi-step reasoning reliability",
      "Persistent checkpoints across actor steps",
      "Human-in-the-loop failure recovery",
    ],
    tech: ["LangGraph", "Python", "Tool Calling", "Checkpointing"],
    github: "https://github.com/Swapnaneel1616/Stateful-Agentic-Workflow-System",
    featured: true,
  },
  {
    id: "rag",
    title: "RAG Document Q&A",
    category: "Agentic AI",
    blurb: "LangChain + Llama 3 retrieval pipeline with lower hallucination rates.",
    description:
      "Retrieval-augmented generation pipeline using LangChain and Llama 3. Semantic retrieval tuned to reduce hallucinations by ~38.7% with sub-second query latency.",
    impact: [
      "~38.7% fewer hallucinations",
      "Sub-second query latency",
      "Enterprise-oriented retrieval design",
    ],
    tech: ["LangChain", "Llama 3", "Vector DB", "Python"],
  },
  {
    id: "culinai",
    title: "CulinAI",
    category: "Full-Stack",
    blurb: "Prompt-to-recipe and photorealistic dish imagery with Spring AI.",
    description:
      "Multi-modal Generative AI platform: Spring Boot 3 + Spring AI for recipe logic and image synthesis, React + Tailwind client for streaming multi-modal outputs.",
    impact: [
      "Decoupled async generation services",
      "Real-time streaming UX",
      "Modular text + image pipelines",
    ],
    tech: ["Spring AI", "Java 17", "React", "Tailwind", "OpenAI"],
    github: "https://github.com/Swapnaneel1616/CulinAI",
  },
  {
    id: "transcribe",
    title: "AI Audio Transcription",
    category: "Full-Stack",
    blurb: "High-throughput speech-to-text with Spring AI and React.",
    description:
      "End-to-end transcription service with multipart file handling, Spring AI speech-to-text, REST APIs, and a React interface.",
    impact: [
      "Efficient multipart upload pipeline",
      "Clean REST boundary for clients",
      "Secured CORS for browser-to-server flow",
    ],
    tech: ["Spring Boot", "Spring AI", "React", "REST"],
    github: "https://github.com/Swapnaneel1616/AI-Powered-Audio-Transcription-Service",
  },
  {
    id: "churn",
    title: "Customer Churn Prediction",
    category: "ML",
    blurb: "ANN churn model with an interactive Streamlit retention dashboard.",
    description:
      "End-to-end ANN to predict customer churn, paired with a Streamlit dashboard for retention metrics and at-risk customer visibility.",
    impact: [
      "Interactive retention analytics",
      "Real-time at-risk identification",
      "End-to-end ML delivery",
    ],
    tech: ["TensorFlow", "ANN", "Streamlit", "Python"],
  },
  {
    id: "nextword",
    title: "NextWordAI",
    category: "ML",
    blurb: "LSTM next-word prediction with a real-time Streamlit interface.",
    description:
      "Deep learning model with TensorFlow/Keras LSTM for conversational next-word prediction, including tokenization/padding pipelines and low-latency Streamlit deployment.",
    impact: [
      "Sequence modeling with LSTM",
      "Robust preprocessing pipeline",
      "Interactive low-latency inference",
    ],
    tech: ["TensorFlow", "Keras", "LSTM", "Streamlit"],
  },
];

export const education = {
  degree: "M.S. Computer Science",
  school: "George Washington University",
  period: "2025 — 2027",
  note: "Target graduation May 2027",
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Backend & Systems",
    items: [
      "Spring Boot",
      "Spring Cloud",
      "Spring AI",
      "Microservices",
      "REST",
      "gRPC",
      "RabbitMQ",
      "Apache Kafka",
      "Node.js",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Vector DBs",
      "TensorFlow",
      "PyTorch",
      "Gemini",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana", "Jenkins"],
  },
  {
    title: "Data Stores",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
