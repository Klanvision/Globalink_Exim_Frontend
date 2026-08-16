import {
  ClipboardCheck,
  Star,
  SearchCheck,
  FileCheck,
  Truck,
  PackageCheck,
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Globe2,
  Headphones,
  Users,
  Package,
  Handshake,
} from 'lucide-react';

export const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Requirement',
    description: 'We understand\nyour requirement.',
    icon: ClipboardCheck,
  },
  {
    id: 2,
    number: '02',
    title: 'Sourcing',
    description: 'We find the right\nsuppliers.',
    icon: Star,
  },
  {
    id: 3,
    number: '03',
    title: 'Verification',
    description: 'We verify quality &\ncompliance.',
    icon: SearchCheck,
  },
  {
    id: 4,
    number: '04',
    title: 'Documentation',
    description: 'We handle all\ndocuments.',
    icon: FileCheck,
  },
  {
    id: 5,
    number: '05',
    title: 'Logistics',
    description: 'We ship via\nbest routes.',
    icon: Truck,
  },
  {
    id: 6,
    number: '06',
    title: 'Delivery',
    description: 'We deliver safely\non time.',
    icon: PackageCheck,
  },
];

export const trustBannerItems = [
  {
    id: 1,
    title: 'Transparency',
    description: 'Clear communication\nat every step.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Quality Assured',
    description: 'Strict quality checks\nat every stage.',
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: 'On-Time Delivery',
    description: 'Timely delivery with\ncomplete reliability.',
    icon: Clock3,
  },
  {
    id: 4,
    title: 'Global Network',
    description: 'Strong network across\n100+ countries.',
    icon: Globe2,
  },
  {
    id: 5,
    title: 'Dedicated Support',
    description: '24/7 support from our\nexpert team.',
    icon: Headphones,
  },
];

export const processStatistics = [
  {
    id: 1,
    value: '100+',
    label: 'Countries Served',
    icon: Globe2,
  },
  {
    id: 2,
    value: '5000+',
    label: 'Happy Clients',
    icon: Users,
  },
  {
    id: 3,
    value: '1M+',
    label: 'Shipments Delivered',
    icon: Package,
  },
  {
    id: 4,
    value: '98%',
    label: 'On-Time Delivery',
    icon: Clock3,
  },
  {
    id: 5,
    value: '24/7',
    label: 'Customer Support',
    icon: Handshake,
  },
];
