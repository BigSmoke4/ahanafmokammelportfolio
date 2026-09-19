export type ProjectStatus = 'complete' | 'in-progress' | 'under-review' | 'released' | 'testing'

export interface ProjectLink {
  label: string
  href: string
  kind: 'github' | 'steam' | 'artstation' | 'web'
}

export interface Project {
  id: string
  title: string
  tagline: string
  /** main quests are the flagship pieces; side quests are smaller tools & experiments */
  tier: 'main' | 'side'
  category: string
  platform: string
  role: string
  year: string
  description: string
  technologies: string[]
  features: string[]
  architecture: string[]
  links: ProjectLink[]
  status: ProjectStatus
  /** splat colour for this quest */
  paint: string
  /** project images under public/projects/… (first one is the hero) */
  images?: string[]
  /** phone screenshots are shown as a row of frames instead of one wide hero */
  portrait?: boolean
  /** official art fallback for the backdrop (public/art/desktop/wallpaper-N.jpg) */
  art: number
}

export const projects: Project[] = [
  /* ── main quests ─────────────────────────────────────────────────────── */
  {
    id: 'nexus',
    title: 'NEXUS',
    tagline: 'Supply Chain Intelligence Command Center',
    tier: 'main',
    category: 'Enterprise Platform',
    platform: 'ASP.NET Core MVC · C# · PostgreSQL',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Enterprise supply-chain decision-support platform modeling dependencies as graphs. Implemented BFS/DFS traversal, alternate-path discovery, single-point-of-failure detection, bottleneck analysis, and downstream impact propagation with deterministic day-by-day disruption simulation.',
    technologies: ['ASP.NET Core MVC', 'C#', 'PostgreSQL', 'Redis', 'EF Core', 'Docker'],
    features: [
      'Graph-based dependency modeling with BFS/DFS traversal',
      'Single-point-of-failure detection and bottleneck analysis',
      'Deterministic disruption simulation with inventory depletion',
      'Multi-scenario what-if analysis and AI specialist orchestration',
      'RBAC, audit logging, SignalR, and Testcontainers',
    ],
    architecture: ['Graph Modeling', 'Traversal Algorithms', 'Simulation Engine', 'AI Orchestration', 'SignalR Visualization'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/NEXUS-Supply-Chain-Intelligence-Command-Center', kind: 'github' }],
    status: 'complete',
    paint: '#ea6c1b',
    art: 10,
  },
  {
    id: 'veritas',
    title: 'VERITAS',
    tagline: 'Enterprise Identity & Access Governance Platform',
    tier: 'main',
    category: 'Security Platform',
    platform: 'ASP.NET Core · C# · PostgreSQL',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Enterprise IAM and zero-trust authorization platform supporting RBAC, ABAC, deny-by-default policy evaluation, ALLOW/DENY/APPROVAL outcomes, immutable policy versions, risk scoring, and privileged access controls with risk-aware MFA workflows.',
    technologies: ['ASP.NET Core', 'C#', 'PostgreSQL', 'Redis', 'EF Core', 'Identity'],
    features: [
      'RBAC and ABAC with deny-by-default policy evaluation',
      'Risk-aware MFA with IP, login failure, and device-trust signals',
      'JIT access, access reviews, and API-key hashing/rotation',
      'Immutable policy versions and HMAC-SHA256 webhooks',
      'Privileged access controls and audit logging',
    ],
    architecture: ['Policy Engine', 'Risk Assessment', 'MFA Workflows', 'Access Control', 'Audit Logging'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/VERITAS', kind: 'github' }],
    status: 'complete',
    paint: '#d4a900',
    art: 9,
  },
  {
    id: 'neura',
    title: 'NEURA',
    tagline: 'Neural AI Agent Orchestration & Continuity Platform',
    tier: 'main',
    category: 'AI Platform',
    platform: 'ASP.NET Core · C# · OpenAI · Anthropic',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Multi-agent orchestration platform maintaining task continuity across AI providers through context monitoring, ContextHandoffPackage generation, validation, automatic handoff, weighted agent routing, and provider abstraction with memory, knowledge graphs, and real-time visualization.',
    technologies: ['ASP.NET Core', 'C#', 'PostgreSQL', 'Redis', 'SignalR', 'OpenAI', 'Anthropic', 'Google AI'],
    features: [
      'Multi-agent orchestration with provider abstraction',
      'Context monitoring and automatic handoff between providers',
      'Weighted agent routing and ContextHandoffPackage generation',
      'Memory systems, knowledge graphs, and real AI adapters',
      'Real-time SignalR/Cytoscape mission visualization',
    ],
    architecture: ['Agent Orchestration', 'Context Management', 'Provider Abstraction', 'Memory Systems', 'Visualization'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/NEURA-Neural-AI-Agent-Orchestration-Continuity-Platform', kind: 'github' }],
    status: 'complete',
    paint: '#0c8e5e',
    art: 4,
  },
  {
    id: 'pulse',
    title: 'PULSE',
    tagline: 'Distributed Job Processing & Workflow Platform',
    tier: 'main',
    category: 'Distributed Systems',
    platform: 'ASP.NET Core MVC · RabbitMQ · Redis',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Distributed job-processing modular monolith using RabbitMQ durable priority queues, manual acknowledgements, dead-letter queues, Redis distributed locks, idempotency protection, and worker heartbeats with job lifecycle management and failure/retry transitions.',
    technologies: ['ASP.NET Core MVC', 'C#', 'RabbitMQ', 'Redis', 'SQL Server', 'EF Core'],
    features: [
      'RabbitMQ durable priority queues with manual acknowledgements',
      'Redis distributed locks and idempotency protection',
      'Worker heartbeats and failure/retry transitions',
      'Exponential backoff, cancellation, and scheduled jobs',
      'Job lifecycle management and queue monitoring',
    ],
    architecture: ['Job Queue', 'Worker Orchestration', 'Failure Handling', 'Monitoring', 'Retry Logic'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/Pulse-Job-Orchestrator', kind: 'github' }],
    status: 'complete',
    paint: '#3a96aa',
    art: 11,
  },
  {
    id: 'bdpricefinder',
    title: 'BDPRICEFINDER',
    tagline: 'Multi-Vendor E-Commerce Platform',
    tier: 'main',
    category: 'E-Commerce',
    platform: 'ASP.NET MVC · SQL Server',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Full-stack Bangladesh multi-vendor price-comparison marketplace supporting buyers, sellers, and vendors through role-specific dashboards, product/vendor workflows, approval processes, and hierarchical permissions with product lifecycle management and Elasticsearch search.',
    technologies: ['ASP.NET Core MVC', 'Razor', 'Entity Framework Core', 'SQL Server', 'JavaScript', 'HTML5', 'CSS3', 'SignalR', 'Redis', 'REST APIs', 'BCrypt', 'ImageSharp'],
    features: [
      'Multi-vendor marketplace with role-specific dashboards',
      'Product lifecycle management and dynamic variants',
      'Inventory/order management and hierarchical permissions',
      '2-step email OTP auth, coupons, EMI, and warranty',
      'Elasticsearch search and Redis caching',
    ],
    architecture: ['User Management', 'Product Catalog', 'Order Processing', 'Search Engine', 'Payment Integration'],
    links: [{ label: 'Website', href: 'https://bdpricefinder.com', kind: 'web' }],
    status: 'in-progress',
    paint: '#f14352',
    art: 12,
  },

  {
    id: 'forge',
    title: 'FORGE',
    tagline: 'AI Software Engineering Intelligence Platform',
    tier: 'main',
    category: 'AI Tools',
    platform: 'ASP.NET Core · Roslyn · Git',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Software-engineering intelligence pipeline combining Roslyn semantic analysis, repository indexing, C# symbol extraction, dependency graphs, Git-history mining, and deterministic security/technical-debt analysis with risk scoring and context retrieval.',
    technologies: ['ASP.NET Core', 'C#', 'Roslyn', 'PostgreSQL', 'EF Core', 'Git'],
    features: [
      'Roslyn semantic analysis and C# symbol extraction',
      'Dependency graphs and Git-history mining',
      'Deterministic security/technical-debt analysis',
      'Software-risk scoring and security pattern scanning',
      'Context retrieval and multi-tenant authZ',
    ],
    architecture: ['Repository Indexing', 'Semantic Analysis', 'Risk Scanning', 'Context Retrieval', 'Reporting'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/FORGE-AI-Software-Engineering-Intelligence-Platform', kind: 'github' }],
    status: 'complete',
    paint: '#a8a800',
    art: 13,
  },
  {
    id: 'local-agent',
    title: 'LOCAL AGENT',
    tagline: 'Local-First Autonomous Coding Platform',
    tier: 'side',
    category: 'AI Development',
    platform: 'ASP.NET Core · Ollama · Roslyn',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Local-first autonomous software-engineering agent platform with persistent sessions, model-driven DAG task planning, dependency validation, fan-out/fan-in execution, retry budgets, and verification loops with SHA-256 incremental repository indexing and layered memory systems.',
    technologies: ['ASP.NET Core', 'C#', 'PostgreSQL', 'EF Core', 'Ollama', 'Roslyn', 'SignalR'],
    features: [
      'Model-driven DAG task planning and dependency validation',
      'Fan-out/fan-in execution with retry budgets',
      'SHA-256 incremental repository indexing',
      'Roslyn symbol extraction and cross-file reference graphs',
      'Layered short/long-term memory with semantic retrieval',
    ],
    architecture: ['Task Planning', 'Dependency Validation', 'Execution Engine', 'Memory Systems', 'Verification'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/Local-Agent-Platform', kind: 'github' }],
    status: 'complete',
    paint: '#b94abb',
    art: 5,
  },
  {
    id: 'atlas',
    title: 'ATLAS',
    tagline: 'Enterprise Intelligent API & Event Platform',
    tier: 'side',
    category: 'Enterprise Platform',
    platform: 'ASP.NET Core · Kafka · OpenTelemetry',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Modular enterprise platform combining API management, service registry, traffic routing, Kafka event processing, retries, DLQ/replay, Redis Lua rate limiting, circuit breakers, and tenant authorization with OpenTelemetry-based SLO/error-budget analysis.',
    technologies: ['ASP.NET Core', 'C#', 'PostgreSQL', 'Redis', 'Kafka', 'OpenTelemetry'],
    features: [
      'API management and service registry with traffic routing',
      'Kafka event processing with DLQ/replay',
      'Redis Lua rate limiting and circuit breakers',
      'OpenTelemetry-based SLO/error-budget analysis',
      'Health probing and incident state management',
    ],
    architecture: ['API Gateway', 'Event Processing', 'Rate Limiting', 'Monitoring', 'Tenant Management'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/ATLAS-Enterprise-Intelligent-API-Event-Platform', kind: 'github' }],
    status: 'complete',
    paint: '#d4a900',
    art: 6,
  },
  {
    id: 'nirbhor',
    title: 'NIRBHOR',
    tagline: 'Bilingual AI Personal Administrative Agent',
    tier: 'side',
    category: 'AI Assistant',
    platform: 'ASP.NET Core MVC · Anthropic',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Bilingual AI administrative agent supporting English, Bangla, and mixed-language workflows for tasks such as NID correction and passport renewal through conversation, language understanding, and tool execution with versioned prompt management and multilingual evaluation.',
    technologies: ['ASP.NET Core MVC', 'C#', 'PostgreSQL', 'EF Core', 'Identity', 'SignalR', 'Anthropic'],
    features: [
      'Bilingual support for English, Bangla, and mixed-language',
      'Administrative tasks: NID correction, passport renewal',
      'Versioned prompt management and multilingual evaluation',
      'Accuracy-gated evaluation and audit logging',
      'Secure Identity workflows and cost tracking',
    ],
    architecture: ['Language Processing', 'Task Execution', 'Prompt Management', 'Evaluation System', 'Security'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/NIRBHOR-Bilingual-AI-Personal-Administrative-Agent', kind: 'github' }],
    status: 'complete',
    paint: '#d84291',
    art: 7,
  },
  {
    id: 'aurora',
    title: 'AURORA',
    tagline: 'Organizational Resilience & Decision Intelligence Architecture',
    tier: 'side',
    category: 'Enterprise Platform',
    platform: 'ASP.NET Core MVC · SignalR',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Enterprise digital-twin platform modeling organizational assets through graph intelligence. Implemented BFS/DFS, Dijkstra, upstream/downstream propagation, SPOF, and bottleneck scoring with disruption simulation while explicitly separating implemented functionality from planned RAG and multi-agent features.',
    technologies: ['ASP.NET Core MVC', 'C#', 'PostgreSQL', 'EF Core', 'SignalR'],
    features: [
      'Graph intelligence with BFS/DFS and Dijkstra algorithms',
      'Upstream/downstream propagation and SPOF detection',
      'Weighted risk scoring and bottleneck analysis',
      'Disruption simulation with multi-scenario analysis',
      'SignalR visualization and human-in-the-loop approvals',
    ],
    architecture: ['Graph Modeling', 'Propagation Engine', 'Risk Analysis', 'Simulation', 'Visualization'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/AURORA-Autonomous-Unified-Reasoning-Organizational-Resilience-Architecture', kind: 'github' }],
    status: 'complete',
    paint: '#ea6c1b',
    art: 8,
  },
  {
    id: 'sentinel',
    title: 'SENTINEL',
    tagline: 'Enterprise Operational Risk & Resilience Simulator',
    tier: 'side',
    category: 'Risk Management',
    platform: 'ASP.NET Core MVC · Redis',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Operational-risk simulation platform using dependency graphs, BFS/DFS traversal, single-point-of-failure detection, critical-path analysis, weighted failure propagation, and business-impact modeling with genuine Monte Carlo simulation using normal/log-normal sampling and recovery-strategy weighted scoring.',
    technologies: ['ASP.NET Core MVC', 'C#', 'PostgreSQL', 'Redis'],
    features: [
      'Dependency graphs with BFS/DFS traversal and SPOF detection',
      'Critical-path analysis and weighted failure propagation',
      'Genuine Monte Carlo simulation with normal/log-normal sampling',
      'Recovery-strategy weighted scoring and resilience metrics',
      'Risk heatmaps and interactive graph visualization',
    ],
    architecture: ['Risk Modeling', 'Simulation Engine', 'Propagation Analysis', 'Metrics', 'Visualization'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/sentinel-risk-simulator', kind: 'github' }],
    status: 'complete',
    paint: '#0c8e5e',
    art: 14,
  },
  {
    id: 'aegis',
    title: 'AEGIS',
    tagline: 'Intelligent Incident Response & Digital Operations Platform',
    tier: 'side',
    category: 'SRE/AIOps',
    platform: 'ASP.NET Core MVC · Redis',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'SRE/AIOps platform with a synthetic infrastructure digital twin implementing the Failure Detection → Correlation → Root Cause → Impact → Remediation pipeline with rolling z-score anomaly detection, graph-based incident correlation, weighted root-cause ranking, synthetic business-impact analysis, and human-approved remediation runbooks.',
    technologies: ['ASP.NET Core MVC', 'C#', 'PostgreSQL', 'Redis'],
    features: [
      'Synthetic infrastructure digital twin with Failure Detection pipeline',
      'Rolling z-score anomaly detection and graph-based incident correlation',
      'Weighted root-cause ranking and synthetic business-impact analysis',
      'Human-approved remediation runbooks',
      'Audit trails and security controls',
    ],
    architecture: ['Detection Engine', 'Correlation System', 'Root Cause Analysis', 'Impact Assessment', 'Remediation'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/Aegis-Intelligent-Incident-Response-Digital-Operations-Platform', kind: 'github' }],
    status: 'complete',
    paint: '#3a96aa',
    art: 15,
  },
  {
    id: 'e-commerce',
    title: 'E-COMMERCE',
    tagline: 'ASP.NET MVC/Razor Web Application',
    tier: 'side',
    category: 'E-Commerce',
    platform: 'ASP.NET MVC · SQL Server',
    role: 'Full-Stack Developer',
    year: '2025',
    description:
      'Responsive database-driven e-commerce application using ASP.NET MVC and Razor with separated Controllers, Models, Services, and Views, supporting product management and shopping-cart functionality with clean architecture and separation of concerns.',
    technologies: ['ASP.NET MVC', 'C#', 'Razor Views', 'Entity Framework', 'SQL Server'],
    features: [
      'Separated Controllers, Models, Services, and Views architecture',
      'Product management with full CRUD operations',
      'Shopping-cart functionality with session management',
      'Database-driven with Entity Framework ORM',
      'Responsive design with HTML5 and CSS3',
    ],
    architecture: ['MVC Pattern', 'Service Layer', 'Entity Framework', 'Session Management', 'Responsive UI'],
    links: [{ label: 'GitHub', href: 'https://github.com/BigSmoke4/Responsive-Ecommerce-asp.net-MVC-razor-view', kind: 'github' }],
    status: 'complete',
    paint: '#f14352',
    art: 16,
  },
]

export const statusLabel: Record<ProjectStatus, string> = {
  complete: 'Complete',
  'in-progress': 'In progress',
  'under-review': 'Under review',
  released: 'Released on Steam',
  testing: 'Closed testing',
}
