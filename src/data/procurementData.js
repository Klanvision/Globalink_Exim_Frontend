import {
  FileEdit,
  Users,
  ClipboardCheck,
  FileSearch,
  Handshake,
  ShieldCheck,
  FileCheck,
  Truck,
  PackageCheck,
  Globe2,
  BadgeDollarSign,
  Award,
  Package,
  Clock3,
  Headphones
} from 'lucide-react';

export const procurementSteps = [
  {
    id: 1,
    title: 'Requirement',
    description: 'Define your needs\nclearly',
    icon: FileEdit,
  },
  {
    id: 2,
    title: 'Supplier\nDiscovery',
    description: 'Find the right\nsuppliers',
    icon: Users,
  },
  {
    id: 3,
    title: 'Verification',
    description: 'Verify credentials\n& compliance',
    icon: ClipboardCheck,
  },
  {
    id: 4,
    title: 'Quotation',
    description: 'Receive competitive\nquotes',
    icon: FileSearch,
  },
  {
    id: 5,
    title: 'Negotiation',
    description: 'Negotiate the best\nvalue',
    icon: Handshake,
  },
  {
    id: 6,
    title: 'Quality\nInspection',
    description: 'Ensure quality\nstandards',
    icon: ShieldCheck,
  },
  {
    id: 7,
    title: 'Order\nConfirmation',
    description: 'Confirm order\ndetails',
    icon: FileCheck,
  },
  {
    id: 8,
    title: 'Shipping',
    description: 'Track & manage\nshipments',
    icon: Truck,
  },
  {
    id: 9,
    title: 'Delivery',
    description: 'On-time delivery\nassured',
    icon: PackageCheck,
  },
];

export const procurementBenefits = [
  {
    id: 1,
    title: 'Global Network',
    description: 'Access to verified\nsuppliers worldwide',
    icon: Globe2,
    theme: 'navy',
  },
  {
    id: 2,
    title: 'Cost Efficiency',
    description: 'Competitive pricing\n& better deals',
    icon: BadgeDollarSign,
    theme: 'gold',
  },
  {
    id: 3,
    title: 'Quality Assurance',
    description: 'Strict quality checks\nat every step',
    icon: Award,
    theme: 'navy',
  },
  {
    id: 4,
    title: 'Secure & Compliant',
    description: 'Ensuring compliance\n& data security',
    icon: Package,
    theme: 'gold',
  },
  {
    id: 5,
    title: 'On-time Delivery',
    description: 'Timely shipments\nyou can rely on',
    icon: Clock3,
    theme: 'navy',
  },
  {
    id: 6,
    title: '24/7 Support',
    description: 'Dedicated support\nanytime, anywhere',
    icon: Headphones,
    theme: 'gold',
  },
];

export const procurementStats = [
  {
    id: 1,
    icon: Globe2,
    value: '50+',
    label: 'Countries Served',
    type: 'number',
  },
  {
    id: 2,
    icon: Users,
    value: '1000+',
    label: 'Trusted Suppliers',
    type: 'number',
  },
  {
    id: 3,
    icon: ClipboardCheck,
    value: '5000+',
    label: 'Successful Orders',
    type: 'number',
  },
  {
    id: 4,
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction',
    type: 'number',
  },
  {
    id: 5,
    icon: Truck,
    value: 'On-time',
    label: 'Delivery',
    type: 'text',
  },
  {
    id: 6,
    icon: ShieldCheck,
    value: 'Secure',
    label: '& Compliant',
    type: 'text',
  },
];
