import { Leaf, ShieldCheck, Sparkles, Shirt, Settings, Award, CheckCircle } from 'lucide-react';

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
    badgeBg: '#082653', // Dark navy
    badgeTextColor: '#FAAE2B', // Gold text
    badgePosition: 'top-left',
    benefits: [
      { label: 'Artisan Made', icon: Sparkles },
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
    badgeBg: '#082653', // Dark navy
    badgeTextColor: '#FFFFFF',
    badgePosition: 'bottom-right',
    benefits: [
      { label: 'Soft & Durable', icon: Shirt },
      { label: 'Export Quality', icon: Award },
      { label: 'Trendy Styles', icon: Sparkles },
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
    badgeBg: '#082653', // Dark navy
    badgeTextColor: '#FFFFFF',
    badgePosition: 'right',
    benefits: [
      { label: 'High Precision', icon: Settings },
      { label: 'OEM Standards', icon: ShieldCheck },
      { label: 'Reliable Quality', icon: CheckCircle },
    ]
  }
];
