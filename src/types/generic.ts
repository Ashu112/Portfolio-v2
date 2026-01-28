import { LucideIcon } from 'lucide-react';

export type ContactDataType = {
  name: string;
  value: string;
  icon: LucideIcon;
  arrowIcon: boolean;
  link?: string;
  style: string;
};

export type ExperienceDataType = {
  companyName: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};
