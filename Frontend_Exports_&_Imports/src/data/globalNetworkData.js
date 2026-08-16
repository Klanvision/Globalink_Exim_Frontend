import {
  Globe2,
  Anchor,
  Handshake,
  Headphones,
} from 'lucide-react';

export const globalNetworkStats = [
  {
    id: 1,
    value: '150+',
    label: 'Countries',
    icon: Globe2,
  },
  {
    id: 2,
    value: '500+',
    label: 'Ports',
    icon: Anchor,
  },
  {
    id: 3,
    value: '250+',
    label: 'Partners',
    icon: Handshake,
  },
  {
    id: 4,
    value: '24/7',
    label: 'Global Support',
    icon: Headphones,
  },
];

export const networkHubs = [
  {
    id: 'na-east',
    name: 'North America Hub (New York / Miami)',
    x: 24,
    y: 36,
    major: true,
  },
  {
    id: 'na-west',
    name: 'Pacific Hub (Los Angeles)',
    x: 16,
    y: 40,
    major: false,
  },
  {
    id: 'sa',
    name: 'South America Hub (Santos / Panama)',
    x: 32,
    y: 68,
    major: true,
  },
  {
    id: 'eu-rotterdam',
    name: 'European Hub (Rotterdam / Hamburg)',
    x: 51,
    y: 30,
    major: true,
  },
  {
    id: 'eu-med',
    name: 'Mediterranean Hub (Valencia / Genoa)',
    x: 48,
    y: 38,
    major: false,
  },
  {
    id: 'me-dubai',
    name: 'Middle East Hub (Dubai / Jebel Ali)',
    x: 62,
    y: 42,
    major: true,
  },
  {
    id: 'af-cape',
    name: 'African Hub (Durban / Cape Town)',
    x: 54,
    y: 74,
    major: false,
  },
  {
    id: 'asia-sg',
    name: 'Southeast Asia Hub (Singapore)',
    x: 75,
    y: 56,
    major: true,
  },
  {
    id: 'asia-sh',
    name: 'East Asia Hub (Shanghai / Tokyo)',
    x: 82,
    y: 38,
    major: true,
  },
  {
    id: 'asia-in',
    name: 'South Asia Hub (Mumbai / JNPT)',
    x: 67,
    y: 46,
    major: true,
  },
  {
    id: 'au-syd',
    name: 'Oceania Hub (Sydney / Melbourne)',
    x: 88,
    y: 78,
    major: false,
  },
];
