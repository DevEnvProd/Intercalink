export interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  welcomeBonus: string;
  visitUrl: string;
  bonusUrl: string;
  license: string;
  categories: string[];
  description: string;
  pros: string[];
  cons: string[];
  paymentMethods: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  linkCount: number;
}

export interface Bonus {
  id: string;
  casinoId: string;
  casinoName: string;
  casinoLogo: string;
  title: string;
  code?: string;
  wagering: string;
  url: string;
  type: 'Welcome' | 'Reload' | 'No Deposit' | 'Free Spins' | 'Cashback';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  isSponsored?: boolean;
}
