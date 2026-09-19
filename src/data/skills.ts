export interface SkillCategory {
  id: string
  title: string
  /** short name for the collapsed banner */
  short: string
  paint: string
  /** character portrait (public/art/mobile/chara-N.jpg) */
  portrait: number
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    portrait: 1,
    title: 'Programming Languages',
    short: 'Languages',
    paint: '#f14352',
    skills: ['C#', 'Python', 'JavaScript', 'SQL'],
  },
  {
    id: 'web',
    portrait: 3,
    title: 'Web Technologies',
    short: 'Web',
    paint: '#ea6c1b',
    skills: ['ASP.NET', 'ASP.NET Core', 'Razor Views', 'HTML5', 'CSS3', 'FastAPI', 'REST APIs'],
  },
  {
    id: 'databases',
    portrait: 2,
    title: 'Databases',
    short: 'Databases',
    paint: '#d4a900',
    skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Entity Framework Core', 'Redis'],
  },
  {
    id: 'architecture',
    portrait: 7,
    title: 'Software Architecture',
    short: 'Architecture',
    paint: '#0c8e5e',
    skills: ['Modular Monolith', 'Layered Architecture', 'Domain-Driven Design', 'Dependency Injection', 'RESTful APIs'],
  },
  {
    id: 'distributed',
    portrait: 4,
    title: 'Distributed Systems',
    short: 'Distributed',
    paint: '#3a96aa',
    skills: ['RabbitMQ', 'Redis Distributed Locks', 'Kafka', 'SignalR', 'Docker', 'OpenTelemetry'],
  },
  {
    id: 'algorithms',
    portrait: 6,
    title: 'Algorithms & Engineering',
    short: 'Algorithms',
    paint: '#b94abb',
    skills: ['BFS', 'DFS', 'Dependency Graphs', 'Monte Carlo Simulation', 'Risk Scoring', 'Query Optimization', 'Caching'],
  },
  {
    id: 'ai',
    portrait: 5,
    title: 'AI & Machine Learning',
    short: 'AI / ML',
    paint: '#d84291',
    skills: ['YOLO', 'Vision Transformers (ViT)', 'DINOv2', 'Swin V2', 'CNN', 'Random Forest', 'OpenCV', 'Anthropic', 'OpenAI'],
  },
  {
    id: 'tools',
    portrait: 8,
    title: 'Tools & Testing',
    short: 'Tools',
    paint: '#f14352',
    skills: ['k6', 'GitHub', 'Visual Studio', 'Google Data Studio', 'Retool', 'Microsoft 365'],
  },
]
