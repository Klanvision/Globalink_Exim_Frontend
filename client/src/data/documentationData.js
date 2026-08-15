import {
  FileText,
  Package,
  Ship,
  FileCheck,
  ShieldCheck,
  MoreHorizontal,
  Clock3,
  LockKeyhole,
  Headphones,
  Globe2,
  Users,
  Handshake,
  Globe
} from 'lucide-react';

export const documentationCategories = [
  {
    id: 1,
    title: 'Commercial\nInvoice',
    icon: FileText,
    isDots: false,
  },
  {
    id: 2,
    title: 'Packing\nList',
    icon: Package,
    isDots: false,
  },
  {
    id: 3,
    title: 'Bill of\nLading',
    icon: Ship,
    isDots: false,
  },
  {
    id: 4,
    title: 'Certificate of\nOrigin',
    icon: FileCheck,
    isDots: false,
  },
  {
    id: 5,
    title: 'Insurance\nCertificate',
    icon: ShieldCheck,
    isDots: false,
  },
  {
    id: 6,
    title: 'And Many\nMore',
    icon: MoreHorizontal,
    isDots: true,
  },
];

export const complianceBenefits = [
  {
    id: 1,
    title: '100% Compliance\nAssured',
    description: 'Ensure adherence to global trade regulations and standards.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Faster Processing\nTime',
    description: 'Streamlined documentation for quick clearance and delivery.',
    icon: Clock3,
  },
  {
    id: 3,
    title: 'Accurate & Error\nFree',
    description: 'Reduce errors and avoid delays with accurate documentation.',
    icon: FileCheck,
  },
  {
    id: 4,
    title: 'Secure Data\nManagement',
    description: 'Your documents are safe with advanced security and privacy.',
    icon: LockKeyhole,
  },
  {
    id: 5,
    title: 'Expert Support\n24/7',
    description: 'Our documentation experts are always here to help you.',
    icon: Headphones,
  },
];

export const brandValues = [
  {
    id: 1,
    text: 'Global Standards',
    icon: Globe2,
  },
  {
    id: 2,
    text: 'End-to-End Support',
    icon: Users,
  },
  {
    id: 3,
    text: 'Trusted by Businesses Worldwide',
    icon: Handshake,
  },
  {
    id: 4,
    text: 'Simplifying Global Trade',
    icon: Globe,
  },
];
