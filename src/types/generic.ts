import { LucideIcon } from 'lucide-react';

export type ContactDataType = {
  name: string;
  value: string;
  icon: LucideIcon;
  arrowIcon: boolean;
  link?: string;
  style: string;
};
