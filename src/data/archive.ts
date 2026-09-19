/**
 * Technical archive: enterprise systems, AI integration, and distributed systems.
 * Focus on backend development, system architecture, and AI-powered applications.
 */

export type Collection = 'enterprise' | 'ai-systems' | 'distributed'

export interface Piece {
  id: string
  title: string
  collection: Collection
  year: string
  tools: string[]
  /** video preview loop (mp4) or still image, under /creative/ */
  video?: string
  image: string
  link: string
  linkLabel: 'GitHub' | 'Website'
  note: string
  /** how the still should sit in a 16:9 thumbnail */
  fit?: 'cover' | 'contain'
}

export const collections: { id: Collection; title: string; short: string; paint: string }[] = [
  { id: 'enterprise', title: 'Enterprise Systems', short: 'Enterprise', paint: '#0c8e5e' },
  { id: 'ai-systems', title: 'AI Integration', short: 'AI', paint: '#f14352' },
  { id: 'distributed', title: 'Distributed Systems', short: 'Distributed', paint: '#b94abb' },
]

const GH = 'https://github.com/BigSmoke4/'

export const archive: Piece[] = [
  /* ── enterprise ─────────────────────────────────────────────────────── */
  {
    id: 'nexus',
    title: 'NEXUS - Supply Chain Intelligence',
    collection: 'enterprise',
    year: '2025',
    tools: ['ASP.NET Core MVC', 'C#', 'PostgreSQL', 'Redis', 'Docker'],
    image: 'achievement-24.jpg',
    link: GH,
    linkLabel: 'GitHub',
    note: 'Enterprise supply-chain decision-support platform with graph-based dependency modeling and disruption simulation.',
  },
  {
    id: 'veritas',
    title: 'VERITAS - IAM Platform',
    collection: 'enterprise',
    year: '2025',
    tools: ['ASP.NET Core', 'C#', 'PostgreSQL', 'Redis', 'Identity'],
    image: 'panel-2025.jpg',
    link: GH,
    linkLabel: 'GitHub',
    note: 'Enterprise identity and access governance platform with RBAC, ABAC, and risk-aware MFA workflows.',
  },

  /* ── ai-systems ────────────────────────────────────────────────────── */
  {
    id: 'neura',
    title: 'NEURA - AI Agent Orchestration',
    collection: 'ai-systems',
    year: '2025',
    tools: ['ASP.NET Core', 'OpenAI', 'Anthropic', 'SignalR'],
    image: 'orientation-spring-24.jpg',
    link: GH,
    linkLabel: 'GitHub',
    note: 'Multi-agent orchestration platform with provider abstraction and context handoff between AI providers.',
  },
  {
    id: 'nirbhor',
    title: 'NIRBHOR - Bilingual AI Agent',
    collection: 'ai-systems',
    year: '2025',
    tools: ['ASP.NET Core MVC', 'Anthropic', 'SignalR'],
    image: 'teaser-spring-24.jpg',
    link: GH,
    linkLabel: 'GitHub',
    note: 'Bilingual AI administrative agent supporting English, Bangla, and mixed-language workflows.',
  },

  /* ── distributed ───────────────────────────────────────────────────── */
  {
    id: 'pulse',
    title: 'PULSE - Distributed Job Processing',
    collection: 'distributed',
    year: '2025',
    tools: ['ASP.NET Core', 'RabbitMQ', 'Redis', 'SQL Server'],
    image: 'orientation-fall-23.jpg',
    link: GH,
    linkLabel: 'GitHub',
    note: 'Distributed job-processing platform with RabbitMQ queues, Redis locks, and worker orchestration.',
  },
  {
    id: 'atlas',
    title: 'ATLAS - API & Event Platform',
    collection: 'distributed',
    year: '2025',
    tools: ['ASP.NET Core', 'Kafka', 'Redis', 'OpenTelemetry'],
    image: 'space-week.jpg',
    link: GH,
    linkLabel: 'GitHub',
    note: 'Enterprise API management and event processing platform with Kafka and OpenTelemetry monitoring.',
  },
]

export const collectionOf = (id: Collection) => collections.find((c) => c.id === id)!
export const pieceUrl = (file: string) => `/creative/${file}`
