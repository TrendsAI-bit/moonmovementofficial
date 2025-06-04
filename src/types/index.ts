export interface Winner {
  address: string;
  amount: number;
  timestamp: string;
}

export interface Holder {
  address: string;
  percentage: number;
  duration: number;
}

export interface HolderStatsData {
  holdingPercentage: number;
  holdingSince: Date;
  isEligible: boolean;
  hasSold: boolean;
}

export interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
} 