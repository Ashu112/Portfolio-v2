import { ContactDataType } from '@/types/generic';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const contactData: ContactDataType[] = [
  {
    name: 'Email',
    value: 'kashu2611@gmail.com',
    icon: Mail,
    arrowIcon: true,
    link: 'mailto:kashu2611@gmail.com',
    style: 'gradient-bg-strong text-background',
  },
  {
    name: 'LinkedIn',
    value: 'ashutosh-1126',
    icon: Linkedin,
    arrowIcon: true,
    link: 'https://www.linkedin.com/in/ashutosh-1126',
    style: 'bg-[#0077B5] ',
  },
  {
    name: 'Github',
    value: 'Ashu112',
    icon: Github,
    arrowIcon: true,
    link: 'https://github.com/Ashu112',
    style: 'bg-foreground text-background',
  },
  {
    name: 'Location',
    value: 'India',
    icon: MapPin,
    arrowIcon: false,
    style: ' bg-muted text-primary',
  },
];
