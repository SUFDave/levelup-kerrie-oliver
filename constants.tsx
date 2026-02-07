import React from 'react';
import { Instagram, Youtube, Mail, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { CreatorProfile, Product } from './types';

export const PROFILE_DATA: CreatorProfile = {
  name: "Kerrie Oliver",
  username: "@levelupwithkerrieoliver",
  bio: "Helping creators build profitable digital businesses from scratch. ✨ Get my free guides & premium resources below!",
  avatarUrl: "/profile.jpg",
  socials: [
    { platform: 'instagram', url: 'https://instagram.com/levelupwithkerrieoliver' },
    { platform: 'tiktok', url: 'https://tiktok.com/@levelupwithkerrieoliver' },
    { platform: 'twitter', url: 'https://x.com/levelupwithkerrie' },
    { platform: 'youtube', url: 'https://youtube.com/@levelupwithkerrieoliver' },
    { platform: 'email', url: 'mailto:hello@levelupwithkerrieoliver.com' }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: "The Ultimate Stan Store Guide",
    subtitle: "A complete masterclass for setting up a high-converting digital storefront.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=400",
    link: "/product/stan-store-guide",
    linkType: 'internal',
    badge: "Bestseller",
    price: "£27",
    description: "Everything you need to launch a polished, profitable Stan Store-style site in a weekend.",
    highlights: [
      "Launch checklist + templates",
      "Pricing and product stack",
      "Conversion optimization guide"
    ]
  },
  {
    id: '2',
    title: "100+ Viral Reel Hooks",
    subtitle: "Copy + paste hooks that drive clicks, saves, and shares.",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400&h=400",
    link: "https://levelupwithkerrieoliver.com/viral-reel-hooks",
    linkType: 'external',
    badge: "Free"
  },
  {
    id: '3',
    title: "Digital Product Blueprint",
    subtitle: "Your step-by-step roadmap to a profitable digital product launch.",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400&h=400",
    link: "/product/digital-product-blueprint",
    linkType: 'internal',
    price: "£97",
    description: "Create, validate, and launch a digital product that sells consistently.",
    highlights: [
      "Offer clarity framework",
      "Launch plan + swipe files",
      "Sales page teardown"
    ]
  },
  {
    id: '4',
    title: "1:1 Strategy Coaching",
    subtitle: "A private 60-minute audit of your brand and growth strategy.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=400",
    link: "https://levelupwithkerrieoliver.com/strategy-coaching",
    linkType: 'external',
    price: "£197"
  }
];

export const getSocialIcon = (platform: string) => {
  const size = 18;
  switch (platform) {
    case 'instagram': return <Instagram size={size} />;
    case 'tiktok': return <MessageCircle size={size} />;
    case 'youtube': return <Youtube size={size} />;
    case 'twitter': return <Twitter size={size} />;
    case 'linkedin': return <Linkedin size={size} />;
    case 'email': return <Mail size={size} />;
    default: return <Instagram size={size} />;
  }
};
