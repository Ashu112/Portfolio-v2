import { ExperienceDataType } from '@/types/generic';

export const experienceData: ExperienceDataType[] = [
  {
    companyName: 'Skima',
    role: 'Software Engineer (Frontend)',
    period: 'Dec 2024 – Oct 2025',
    location: 'Mumbai, India',
    highlights: [
      'Engineered a scalable AI recruitment SaaS (Next.js, TypeScript) for 1k+ recruiters, delivering core modules like DnD dashboards and Kanban boards.',
      'Architected a visual campaign editor using React XYFlow, enabling complex hiring workflows and cutting setup time by 50%.',
      'Optimized server-state with TanStack Query (caching, background fetch), reducing redundant API calls by 45% to boost responsiveness.',
      'Built a high-performance SSR marketing site using Astro and GSAP, improving Core Web Vitals from ~60 to 90+.',
      'Led the real-time analytics dashboard implementation using Chart.js, supporting A/B tests that drove a 15% increase in conversion.',
    ],
    color: 'from-gradient-start to-gradient-mid',
  },
  {
    companyName: 'Anveshan',
    role: 'Full-Stack Developer',
    period: 'Feb 2024 – Dec 2024',
    location: 'Gurugram, India',
    highlights: [
      'Delivered a real-time messaging platform using React, Node.js, and WebSockets, supporting live presence for 40+ daily users.',
      'Secured APIs with JWT-based RBAC authentication, protecting frontend routes and reducing permission management effort by 60%.',
    ],
    color: 'from-gradient-end to-gradient-start',
  },
  {
    companyName: 'Civil Services Preparation',
    role: 'Career Sabbatical',
    period: 'Jul 2022 – Jan 2024',
    location: 'Remote',
    highlights: [
      'Dedicated sabbatical focused on Civil Services preparation, developing strong discipline, strategic planning, and problem-solving capabilities.',
    ],
    color: 'from-gradient-start to-gradient-mid',
  },
  {
    companyName: 'SISA Information Security',
    role: 'Software Engineer',
    period: 'May 2021 – Jun 2022',
    location: 'Bengaluru, India',
    highlights: [
      'Modernized a legacy .NET frontend into a modular React application, integrating REST APIs to reduce deployment time by 68%.',
      'Enhanced SOC analyst efficiency by 30% through advanced data visualizations and dashboarding using AG-Grid and Chart.js.',
      'Established a testing culture with Jest and React Testing Library, achieving ~75% coverage and drastically reducing UI regressions.',
    ],
    color: 'from-gradient-end to-gradient-start',
  },
];
