export interface Winner {
  address: string;
  amount: number;
  timestamp: number;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface HolderStats {
  totalHolders: number;
  totalSupply: string;
  circulatingSupply: string;
  marketCap: string;
  price: string;
}

export interface LeaderboardEntry {
  rank: number;
  address: string;
  holdings: string;
  percentage: string;
} 