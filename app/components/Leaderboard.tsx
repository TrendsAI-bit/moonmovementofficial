'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LeaderboardEntry } from '@/app/types';

// Mock data for MVP
const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    address: '0x1234...5678',
    holdings: '1,000,000',
    percentage: '10%'
  },
  {
    rank: 2,
    address: '0x8765...4321',
    holdings: '750,000',
    percentage: '7.5%'
  },
  {
    rank: 3,
    address: '0x9876...1234',
    holdings: '500,000',
    percentage: '5%'
  }
];

const Leaderboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-6 rounded-xl w-full max-w-4xl mx-auto mt-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Top Holders</h2>
      <div className="space-y-4">
        {MOCK_LEADERBOARD.map((entry) => (
          <motion.div
            key={entry.address}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-white">#{entry.rank}</span>
              <span className="font-mono text-white">{entry.address}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">{entry.holdings} MOON</span>
              <span className="text-green-400">{entry.percentage}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Leaderboard; 