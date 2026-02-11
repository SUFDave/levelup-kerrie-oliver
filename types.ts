
export interface Product {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  linkType: 'internal' | 'external';
  badge?: string;
  price?: string;
  description?: string;
  highlights?: string[];
}

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'youtube' | 'email' | 'twitter' | 'linkedin';
  url: string;
}

export interface CreatorProfile {
  name: string;
  mainHeading: string;
  username: string;
  bio: string;
  avatarUrl: string;
  socials: SocialLink[];
}
