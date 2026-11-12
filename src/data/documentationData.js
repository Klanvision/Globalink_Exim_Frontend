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
    description: 'Itemized proof of sale detailing product valuation, HS codes, currency, and Incoterms for border customs clearance.',
    tag: 'HS Codes & Valuation',
  },
  {
    id: 2,
    title: 'Packing\nList',
    icon: Package,
    isDots: false,
    description: 'Complete cargo manifest with itemized carton counts, gross and net weights, volume dimensions, and handling marks.',
    tag: 'Weight & Dimensions',
  },
  {
    id: 3,
    title: 'Bill of\nLading',
    icon: Ship,
    isDots: false,
    description: 'Primary contract of carriage and legal title of goods issued by the shipping line acknowledging cargo receipt on board.',
    tag: 'Title of Goods',
  },
  {
    id: 4,
    title: 'Certificate of\nOrigin',
    icon: FileCheck,
    isDots: false,
    description: 'Official document certified by chambers of commerce declaring manufacture origin to claim FTA preferential tariffs.',
    tag: 'FTA Duty Exemptions',
  },
  {
    id: 5,
    title: 'Insurance\nCertificate',
    icon: ShieldCheck,
    isDots: false,
    description: 'Comprehensive marine and air cargo policy protecting shipments against transit damage, loss, and general average perils.',
    tag: 'All-Risk Marine Cover',
  },
  {
    id: 6,
    title: 'And Many\nMore',
    icon: MoreHorizontal,
    isDots: true,
    description: 'Phytosanitary permits, consular invoices, import licenses, dangerous goods declarations, and EUR.1 compliance filings.',
    tag: 'Global Compliance',
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
