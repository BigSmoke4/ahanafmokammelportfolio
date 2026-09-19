export interface Section {
  label: string
  /** bullet / tag list */
  items?: string[]
  /** ordered progression, rendered with arrows */
  steps?: string[]
  /** free text (used for "The Chapter" reflections) */
  text?: string
}

export interface Milestone {
  id: string
  year: string
  /** short chapter name shown next to the year */
  chapter: string
  title: string
  subtitle: string
  /** major chapters are set larger; minor ones are visually subordinate */
  weight: 'major' | 'minor'
  /** id of the chapter this entry belongs under (rendered nested) */
  parent?: string
  /** official art for the record panel (public/art/desktop/wallpaper-N.jpg) */
  art: number
  /** splat colour for this chapter */
  paint: string
  tags: string[]
  summary: string
  meta?: { label: string; value: string }[]
  sections?: Section[]
}

export const journey: Milestone[] = [
  {
    id: 'ibn-taimiya',
    art: 9,
    paint: '#3a96aa',
    year: '2018',
    chapter: 'Foundation',
    title: 'Ibn Taimiya School and College',
    subtitle: 'Secondary School Certificate',
    weight: 'minor',
    tags: ['education'],
    summary: 'Secondary education establishing the foundation in mathematics and science.',
    meta: [
      { label: 'SSC', value: '2018' },
    ],
  },
  {
    id: 'drmc',
    art: 11,
    paint: '#d4a900',
    year: '2020',
    chapter: 'Higher Secondary',
    title: 'Dhaka Residential Model College',
    subtitle: 'Higher Secondary Certificate',
    weight: 'minor',
    tags: ['education'],
    summary: 'Higher secondary education with focus on science and technology, participating in programming competitions and web development training.',
    meta: [{ label: 'HSC', value: '2020' }],
    sections: [{ label: 'Activities', items: ['Computer Club', 'Programming competitions', 'Web development training'] }],
  },
  {
    id: 'brac',
    art: 11,
    paint: '#d4a900',
    year: '2021–2026',
    chapter: 'University',
    title: 'BRAC University',
    subtitle: 'B.Sc. Computer Science',
    weight: 'major',
    tags: ['education'],
    summary: 'Bachelor of Science in Computer Science focusing on full-stack development, system design, and AI integration.',
    meta: [{ label: 'Graduation', value: '2026' }],
    sections: [{ label: 'Focus', items: ['Computer Science', 'Software Development', 'System Design', 'AI & Machine Learning'] }],
  },
  {
    id: 'bucc',
    parent: 'brac',
    art: 2,
    paint: '#d84291',
    year: '2022–2025',
    chapter: 'Leadership',
    title: 'BRAC University Computer Club',
    subtitle: 'Executive Member',
    weight: 'minor',
    tags: ['leadership'],
    summary:
      'Executive member organizing university-wide coding workshops and hackathons with 100+ student participants.',
    sections: [
      { label: 'Activities', items: ['Coding workshops', 'Hackathons', 'Web team collaboration', 'Event registration systems'] },
    ],
  },
  {
    id: 'billing-master',
    art: 10,
    paint: '#ea6c1b',
    year: '2025–2026',
    chapter: 'Professional',
    title: 'Billing Master Software Limited',
    subtitle: 'Junior Web Developer',
    weight: 'major',
    tags: ['work'],
    summary: 'Building scalable web applications and backend systems with ASP.NET Core, C#, SQL Server, PostgreSQL, and Redis.',
    sections: [
      {
        label: 'Achievements',
        items: ['Built 3+ ASP.NET MVC modules', '30% efficiency improvement', '25% error reduction', '20% faster data retrieval'],
      },
      {
        label: 'The Chapter',
        text: 'Professional experience building enterprise-grade applications with focus on performance and scalability.',
      },
    ],
  },
  {
    id: 'projects',
    art: 7,
    paint: '#3a96aa',
    year: '2025–2026',
    chapter: 'Enterprise Projects',
    title: 'AI-Powered Platforms',
    subtitle: 'Distributed Systems & Enterprise Applications',
    weight: 'major',
    tags: ['development'],
    summary: 'Developed enterprise-grade platforms including supply chain intelligence, IAM systems, AI orchestration, and distributed job processing.',
    sections: [
      {
        label: 'Key Projects',
        items: ['NEXUS - Supply Chain Intelligence', 'VERITAS - IAM Platform', 'NEURA - AI Agent Orchestration', 'PULSE - Distributed Job Processing'],
      },
      {
        label: 'The Chapter',
        text: 'Building complex enterprise systems combining traditional backend technologies with modern AI capabilities.',
      },
    ],
  },
]
