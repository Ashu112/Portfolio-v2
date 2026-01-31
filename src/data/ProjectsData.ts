import { ProjectDataType } from '@/types/project';

export const projectData: ProjectDataType[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A fully responsive, open-source, SEO-optimized portfolio template with 8+ customizable themes and advanced rate limiting.',
    longDescription:
      'Built from the ground up with performance and customization in mind. Features IP and User-Agent-based rate limiting in the email service.',
    techStack: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Node.js',
      'Nodemailer',
      'Vercel',
    ],
    image: '/portfolio.png',
    github: 'https://github.com/Ashu112',
    link: '#',
    color: 'from-primary to-accent',
  },
  {
    id: 2,
    title: 'JSON Tree Visualizer',
    description:
      'An interactive visual editor for JSON data with a node-based tree view and real-time editing capabilities.',
    longDescription:
      'Stress-tested to handle 10k+ nodes with deferred loading. Enhanced UX with drag, pan, zoom, and keyboard shortcuts, improving editing efficiency.',
    techStack: [
      'React.js',
      'TypeScript',
      'TailwindCSS',
      'Monaco Editor',
      'Zustand',
    ],
    image: '/project-2.jpg',
    github: 'https://github.com/Ashu112',
    link: '#',
    color: 'from-accent to-secondary',
  },
  {
    id: 3,
    title: 'Campaign Flow Editor',
    description:
      'A visual workflow builder for recruitment campaigns using node-based architecture.',
    longDescription:
      'Streamlined recruiter workflows, cutting sourcing time by 50% and increasing email campaign throughput by 3x.',
    techStack: ['React.js', 'Xyflow', 'TypeScript', 'TailwindCSS'],
    image: '/project-3.jpg',
    github: 'https://github.com/Ashu112',
    link: '#',
    color: 'from-secondary to-primary',
  },
  {
    id: 4,
    title: 'Real-time Dashboard Builder',
    description:
      'A drag-and-drop dashboard builder for creating custom KPI dashboards.',
    longDescription:
      'Enables analysts to create custom dashboards and monitor 1K+ real-time metrics with link data updates and interactive visualizations.',
    techStack: ['React.js', 'D3.js', 'WebSockets', 'Node.js', 'AG-Grid'],
    image: '/project-4.jpg',
    github: 'https://github.com/Ashu112',
    link: '#',
    color: 'from-primary via-accent to-secondary',
  },
];
