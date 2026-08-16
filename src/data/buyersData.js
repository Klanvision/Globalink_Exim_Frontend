import {
  Ship,
  Globe2,
  Warehouse,
  ShoppingCart,
  Factory,
  Building2,
  UserRound,
  FileText,
  Users,
  Handshake,
  ShieldCheck,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

export const buyerCategories = [
  {
    id: 1,
    title: 'Importers',
    description: 'Global importers sourcing\nquality products across\nvarious categories.',
    icon: Ship,
  },
  {
    id: 2,
    title: 'Distributors',
    description: 'Distributors expanding\ntheir product portfolio\nwith trusted suppliers.',
    icon: Globe2,
  },
  {
    id: 3,
    title: 'Wholesalers',
    description: 'Wholesalers looking for\nbulk supply and long-term\nbusiness partnerships.',
    icon: Warehouse,
  },
  {
    id: 4,
    title: 'Retailers',
    description: 'Retailers meeting customer\ndemands with diverse\nand reliable products.',
    icon: ShoppingCart,
  },
  {
    id: 5,
    title: 'Manufacturers',
    description: 'Manufacturers sourcing\nraw materials and\ncomponents globally.',
    icon: Factory,
  },
  {
    id: 6,
    title: 'Govt. Orgs',
    description: 'Government organizations\nensuring quality procurement\nfor public needs.',
    icon: Building2,
  },
];

export const buyerActionCards = [
  {
    id: 1,
    title: 'Become a Buyer',
    subtitle: 'Join our global network',
    icon: UserRound,
    action: 'register',
  },
  {
    id: 2,
    title: 'Submit Requirement (RFQ)',
    subtitle: 'Post your requirement for suppliers',
    icon: FileText,
    action: 'rfq',
  },
];

export const buyerStatistics = [
  {
    id: 1,
    value: '25,000+',
    title: 'Active Buyers',
    subtitle: 'Worldwide Network',
    icon: Users,
  },
  {
    id: 2,
    value: '120+',
    title: 'Countries',
    subtitle: 'Global Presence',
    icon: Globe2,
  },
  {
    id: 3,
    value: '50,000+',
    title: 'Business Deals',
    subtitle: 'Successful Connections',
    icon: Handshake,
  },
  {
    id: 4,
    value: '100%',
    title: 'Verified Buyers',
    subtitle: 'Trusted & Secure',
    icon: ShieldCheck,
  },
  {
    id: 5,
    value: '24/7',
    title: 'Buyer Support',
    subtitle: "We're Here to Help",
    icon: Headphones,
  },
];

export const buyerTrustStatements = [
  'Verified & Trusted Buyers',
  'Secure & Transparent Process',
  'Global Market Reach',
  'Grow Your Business Worldwide',
];
