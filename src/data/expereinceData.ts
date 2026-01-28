import { ExperienceDataType } from '@/types/generic';

export const experienceData: ExperienceDataType[] = [
  {
    companyName: 'Skima',
    role: 'Software Engineer (Frontend)',
    period: 'Dec 2024 – Oct 2025',
    location: 'Mumbai, India',
    highlights: [
      'Engineered and scaled a SaaS AI recruitment platform using Next.js, TypeScript, and Tailwind CSS, delivering 6+ core frontend modules (DnD dashboards, Kanban boards, workflow editors) used by 1k+ recruiters.',
      'Designed and owned a visual campaign flow editor using React XYFlow, enabling complex multi-step hiring workflows and reducing campaign setup time by 50%.',
      'Integrated server-state management with TanStack Query (caching, pagination, background refetching), cutting redundant API calls by 45% and significantly improving UI responsiveness.',
      'Built an SSR marketing website using Astro with GSAP animations and accessible UI patterns, improving Core Web Vitals from ~60 to 90+.',
      'Led frontend implementation of a real-time analytics dashboard using Chart.js with configurable views across 1k+ metrics; supported A/B testing initiatives that increased conversion by 15%.',
    ],
    color: 'from-gradient-start to-gradient-mid',
  },
  {
    companyName: 'Anveshan',
    role: 'Full-Stack Developer',
    period: 'Feb 2024 – Dec 2024',
    location: 'Gurugram, India',
    highlights: [
      'Delivered a production-grade real-time messaging platform using React, Node.js, WebSockets, and Twilio SDK, supporting 40+ daily active users with live messaging and presence.',
      'Implemented JWT-based authentication and role-based access control (RBAC), securing frontend routes and APIs while reducing permission management effort by 60%.',
    ],
    color: 'from-gradient-mid to-gradient-end',
  },
  {
    companyName: 'Civil Services Preparation',
    role: 'Career Sabbatical',
    period: 'Jul 2022 – Jan 2024',
    location: 'Remote',
    highlights: [
      'Took a structured career sabbatical focused on civil services preparation, strengthening problem-solving, discipline, and long-term execution skills.',
    ],
    color: 'from-gradient-mid to-gradient-end',
  },
  {
    companyName: 'SISA Information Security',
    role: 'Software Engineer',
    period: 'May 2021 – Jun 2022',
    location: 'Bengaluru, India',
    highlights: [
      'Revamped a legacy .NET frontend into a modular React.js application, integrating REST APIs and delivering a modern responsive UI, reducing deployment time by 68%.',
      'Introduced advanced data visualizations using AG-Grid and Chart.js, improving SOC analyst investigation efficiency by 30% and reducing dashboard load time by 25%.',
      'Implemented unit and component testing with Jest and React Testing Library, achieving ~75% coverage and significantly reducing UI regressions.',
    ],
    color: 'from-gradient-end to-gradient-start',
  },
];
