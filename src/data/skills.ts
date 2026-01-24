import { ProficiencyDataType, SkillCategoriesType } from '@/types/skills';

export const skillCategories: SkillCategoriesType = [
  {
    name: 'Languages',
    skills: [
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'C++',
      'Java',
      'SQL',
      'GraphQL',
    ],
    icon: '💻',
  },
  {
    name: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'Astro.js',
      'Redux',
      'Zustand',
      'TailwindCSS',
      'Bootstrap',
    ],
    icon: '🎨',
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'WebSockets', 'REST APIs', 'GraphQL'],
    icon: '⚙️',
  },
  {
    name: 'Libraries & Tools',
    skills: [
      'Xyflow',
      'Chart.js',
      'AG-Grid',
      'D3.js',
      'Monaco Editor',
      'React Hook Form',
    ],
    icon: '📚',
  },
  {
    name: 'DevOps & Cloud',
    skills: ['Git', 'Docker', 'AWS', 'Cloudflare', 'Webpack', 'Rollup', 'Vite'],
    icon: '☁️',
  },
  {
    name: 'Testing',
    skills: ['Jest', 'Vitest', 'React Testing Library'],
    icon: '🧪',
  },
];

export const proficiencyData: ProficiencyDataType = [
  {
    name: 'Frontend Development',
    level: 95,
    color: 'from-gradient-start to-gradient-mid',
  },
  {
    name: 'React Ecosystem',
    level: 92,
    color: 'from-gradient-mid to-gradient-end',
  },
  {
    name: 'Performance Optimization',
    level: 88,
    color: 'from-gradient-end to-gradient-start',
  },
  {
    name: 'Backend Development',
    level: 80,
    color: 'from-gradient-start via-gradient-mid to-gradient-end',
  },
  {
    name: 'DevOps & CI/CD',
    level: 78,
    color: 'from-gradient-mid to-gradient-start',
  },
];
