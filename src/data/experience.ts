export interface Experience {
  id: string
  org: string
  role: string
  kind: 'work' | 'teaching' | 'leadership'
  /** decimal years, e.g. 2023.5 = mid 2023 (used for the duration stat) */
  start: number
  end: number
  /** still running: the end is "now" */
  ongoing?: boolean
  period: string
  location: string
  paint: string
  /** character art for the record's portrait (public/art/mobile/chara-N.jpg) */
  portrait: number
  summary: string
  duties: string[]
  tech: string[]
  /** official art for the backdrop (public/art/desktop/wallpaper-N.jpg) */
  art: number
}

export const experience: Experience[] = [
  {
    id: 'billing-master',
    org: 'Billing Master Software Limited',
    role: 'Junior Web Developer',
    kind: 'work',
    start: 2025.0,
    end: 2026.75,
    ongoing: true,
    period: '2025 · present',
    location: 'Dhaka, Bangladesh',
    paint: '#ea6c1b',
    portrait: 1,
    summary:
      'Building scalable web applications and backend systems with ASP.NET Core, C#, SQL Server, PostgreSQL, and Redis. Focused on clean code, performance, and reliable software delivery.',
    duties: [
      'Built 3+ ASP.NET MVC modules, improving internal processing efficiency by 30%',
      'Implemented scalable CRUD and database features that reduced user-reported errors by 25%',
      'Optimized SQL queries resulting in 20% faster data retrieval',
      'Full-stack development with enterprise-grade technologies',
    ],
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'PostgreSQL', 'Redis', 'Entity Framework Core'],
    art: 10,
  },
  {
    id: 'bucc',
    org: 'BRAC University Computer Club',
    role: 'Executive Member',
    kind: 'leadership',
    start: 2022.0,
    end: 2025.0,
    period: '2022 · 2025',
    location: 'Dhaka, Bangladesh',
    paint: '#d84291',
    portrait: 2,
    summary:
      'Organized university-wide coding workshops and hackathons with 100+ student participants. Collaborated with the web team to maintain club website and event registration systems.',
    duties: [
      'Organized coding workshops and hackathons',
      'Collaborated with web team on club website',
      'Event registration systems',
      'Student engagement and technical leadership',
    ],
    tech: ['Web Development', 'Event Management', 'Leadership', 'Technical Coordination'],
    art: 2,
  },
  {
    id: 'drmc',
    org: 'Dhaka Residential Model College Computer Club',
    role: 'General Member',
    kind: 'leadership',
    start: 2018.0,
    end: 2020.0,
    period: '2018 · 2020',
    location: 'Dhaka, Bangladesh',
    paint: '#b94abb',
    portrait: 3,
    summary: 'Participated in intra-school programming competitions and basic web development training sessions.',
    duties: [
      'Programming competitions',
      'Web development training',
      'Technical skill development',
      'Student community engagement',
    ],
    tech: ['Programming', 'Web Development', 'Competition', 'Training'],
    art: 3,
  },
]

export const kindLabel: Record<Experience['kind'], string> = {
  work: 'Work',
  teaching: 'Teaching',
  leadership: 'Leadership',
}
