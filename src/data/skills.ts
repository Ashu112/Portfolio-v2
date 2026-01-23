type SkillCategoriesType = {
  name: string;
  skills: string[];
  icon: string;
}[];

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
