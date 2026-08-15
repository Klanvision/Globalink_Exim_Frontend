import {
  ClipboardCheck,
  Package,
  PackageCheck,
  Truck,
  Users,
  Boxes,
  CircleCheck,
  MapPin,
  Eye,
  ShieldCheck,
  Clock3,
  Warehouse,
  Barcode,
  CheckCircle2,
} from 'lucide-react';

export const trackingTimelineStages = [
  {
    id: 1,
    number: '01',
    title: 'Order\nConfirmed',
    icon: ClipboardCheck,
    completed: true,
  },
  {
    id: 2,
    number: '02',
    title: 'Processing',
    icon: Package,
    completed: true,
  },
  {
    id: 3,
    number: '03',
    title: 'Picked Up',
    icon: PackageCheck,
    completed: true,
  },
  {
    id: 4,
    number: '04',
    title: 'In Transit',
    icon: Truck,
    completed: true,
  },
  {
    id: 5,
    number: '05',
    title: 'Customs',
    icon: Users,
    completed: false,
  },
  {
    id: 6,
    number: '06',
    title: 'Out for\nDelivery',
    icon: Boxes,
    completed: false,
  },
  {
    id: 7,
    number: '07',
    title: 'Delivered',
    icon: CircleCheck,
    completed: false,
  },
];

export const trackingFeatures = [
  {
    id: 1,
    title: 'Real-Time Tracking',
    description: 'Get live updates of your\nshipments anytime.',
    icon: MapPin,
  },
  {
    id: 2,
    title: 'Complete Visibility',
    description: 'End-to-end visibility across\nthe supply chain.',
    icon: Eye,
  },
  {
    id: 3,
    title: 'Secure & Reliable',
    description: 'Your shipments are safe\nand in trusted hands.',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: 'On-Time Delivery',
    description: 'We ensure timely delivery\nevery time.',
    icon: Clock3,
  },
];

export const warehousingCapabilities = [
  {
    id: 1,
    title: 'Warehousing',
    description: 'Secure & flexible\nstorage solutions',
    icon: Warehouse,
    isHighlight: false,
  },
  {
    id: 2,
    title: 'Inventory\nManagement',
    description: 'Real-time inventory\ntracking & visibility',
    icon: ClipboardCheck,
    isHighlight: false,
  },
  {
    id: 3,
    title: 'Consolidation &\nPackaging',
    description: 'Efficient consolidation\n& smart packaging',
    icon: Boxes,
    isHighlight: true,
  },
  {
    id: 4,
    title: 'Labeling &\nBarcoding',
    description: 'Accurate labeling &\nbarcode solutions',
    icon: Barcode,
    isHighlight: false,
  },
  {
    id: 5,
    title: 'Distribution',
    description: 'Fast & reliable\ndistribution network',
    icon: Truck,
    isHighlight: false,
  },
];

export const warehouseStats = [
  {
    id: 1,
    value: '25+',
    label: 'Warehouses\nWorldwide',
    icon: Warehouse,
  },
  {
    id: 2,
    value: '100+',
    label: 'Countries\nCovered',
    icon: MapPin,
  },
  {
    id: 3,
    value: '5000+',
    label: 'Shipments\nEvery Day',
    icon: Truck,
  },
  {
    id: 4,
    value: '99.8%',
    label: 'On-Time\nDelivery',
    icon: Users,
  },
];

export const whyChooseUsItems = [
  { id: 1, title: 'Advanced\nTechnology' },
  { id: 2, title: 'Global\nNetwork' },
  { id: 3, title: 'Experienced\nTeam' },
  { id: 4, title: 'Cost\nEffective' },
  { id: 5, title: 'Customer\nSupport 24/7' },
];
