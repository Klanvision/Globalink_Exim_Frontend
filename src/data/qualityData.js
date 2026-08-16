import {
  ClipboardCheck,
  PackageCheck,
  FlaskConical,
  Package,
  UserCheck,
  ShieldCheck,
  Award,
  Globe2,
  TrendingUp,
  Handshake,
  Users,
  FileText,
  Truck,
  Star,
} from 'lucide-react';

export const qualityProcessSteps = [
  {
    id: 1,
    title: 'Supplier\nAudit',
    description: 'Thorough evaluation\nof supplier\ncapabilities.',
    icon: ClipboardCheck,
    isSpecial: false,
  },
  {
    id: 2,
    title: 'Product\nInspection',
    description: 'Detailed checks to\nensure product\nquality.',
    icon: PackageCheck,
    isSpecial: false,
  },
  {
    id: 3,
    title: 'Quality\nTesting',
    description: 'Advanced testing\nfor safety and\nperformance.',
    icon: FlaskConical,
    isSpecial: true,
  },
  {
    id: 4,
    title: 'Packaging\nInspection',
    description: 'Ensure packaging\nmeets international\nstandards.',
    icon: Package,
    isSpecial: false,
  },
  {
    id: 5,
    title: 'Pre-Shipment\nInspection',
    description: 'Final verification\nbefore goods\nare shipped.',
    icon: UserCheck,
    isSpecial: false,
  },
];

export const qualityAssuranceBannerItems = [
  {
    id: 1,
    title: 'Assured Quality',
    description: 'High standards at every\nstep of the trade process.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Risk Reduction',
    description: 'Minimize defects and\nensure product reliability.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Global Compliance',
    description: 'Meet international regulations\nand quality benchmarks.',
    icon: Globe2,
  },
  {
    id: 4,
    title: 'Customer Satisfaction',
    description: 'Deliver consistent quality\nthat builds trust.',
    icon: TrendingUp,
  },
  {
    id: 5,
    title: 'End-to-End Assurance',
    description: 'Quality control from sourcing\nto final delivery.',
    icon: Handshake,
  },
];

export const supportingCapabilities = [
  {
    id: 1,
    title: 'Expert Inspectors',
    description: 'Experienced professionals\nacross industries.',
    icon: Users,
  },
  {
    id: 2,
    title: 'Advanced Testing Labs',
    description: 'Modern equipment for\naccurate results.',
    icon: FlaskConical,
  },
  {
    id: 3,
    title: 'Detailed Reporting',
    description: 'Transparent reports for\nevery inspection.',
    icon: FileText,
  },
  {
    id: 4,
    title: 'On-Time Delivery',
    description: 'Quality checks without\ndelaying your shipments.',
    icon: Truck,
  },
  {
    id: 5,
    title: 'Your Success. Our Priority',
    description: 'Committed to quality,\ncommitted to you.',
    icon: Star,
  },
];
