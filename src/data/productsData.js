import { Leaf, ShieldCheck, Shirt, Settings, Award, CheckCircle } from 'lucide-react';

export const featuredProducts = [
  {
    id: 'mangos',
    name: 'Organic Mangos',
    origin: 'India',
    destination: 'UAE',
    moq: 'MOQ: 1000 KG',
    image: '/mangoes.jpg',
    badgeText: 'FRESH &\nNATURAL',
    badgeBg: '#15803D', // Dark green
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Premium Quality', icon: Award },
      { label: 'Farm Fresh', icon: Leaf },
      { label: 'Chemical Free', icon: CheckCircle },
    ]
  },
  {
    id: 'decor',
    name: 'Handcrafted Decor',
    origin: 'India',
    destination: 'USA',
    moq: 'MOQ: 300 Pcs',
    image: '/decor.jpg',
    badgeText: 'HANDCRAFTED',
    badgeBg: '#0F172A', // Charcoal slate
    badgeTextColor: '#FAAE2B', // Gold text
    badgePosition: 'top-left',
    benefits: [
      { label: 'Artisan Made', icon: CheckCircle },
      { label: 'Unique Designs', icon: Award },
      { label: 'Sustainable', icon: Leaf },
    ]
  },
  {
    id: 'garments',
    name: 'Cotton Garments',
    origin: 'India',
    destination: 'Europe',
    moq: 'MOQ: 2000 Pcs',
    image: '/garments.jpg',
    badgeText: 'PREMIUM\nFABRIC',
    badgeBg: '#0F172A', // Charcoal slate
    badgeTextColor: '#FFFFFF',
    badgePosition: 'bottom-right',
    benefits: [
      { label: 'Soft & Durable', icon: Shirt },
      { label: 'Export Quality', icon: Award },
      { label: 'Trendy Styles', icon: ShieldCheck },
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive Parts',
    origin: 'India',
    destination: 'Germany',
    moq: 'MOQ: 1000 Pcs',
    image: '/automotive.jpg',
    badgeText: 'PRECISION\nENGINEERED',
    badgeBg: '#0F172A', // Charcoal slate
    badgeTextColor: '#FFFFFF',
    badgePosition: 'right',
    benefits: [
      { label: 'High Precision', icon: Settings },
      { label: 'OEM Standards', icon: ShieldCheck },
      { label: 'Reliable Quality', icon: CheckCircle },
    ]
  }
];
