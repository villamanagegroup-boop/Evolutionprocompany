export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  cityState: string;
  discipline: string;
  bio: string;
}

export interface Show {
  season: string;
  performanceMonth: string;
  trainingMonths: string;
  description: string;
  theme: string;
  color: string;
}

export interface MembershipTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
}

export interface AuditionTier {
  name: string;
  ages: string;
  description: string;
  requirements: string[];
  payout: string;
  color: string;
}
