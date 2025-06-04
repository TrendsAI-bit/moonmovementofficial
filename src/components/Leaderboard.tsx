'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Holder } from '@/types';

// Mock data for MVP
const MOCK_HOLDERS: Holder[] = [
  { address: '7xKX...Pj9k', percentage: 5.2, duration: 48 },
  { address: '3mNR...L4vX', percentage: 4.8, duration: 72 },
  { address: '9qWZ...H2nM', percentage: 3.5, duration: 36 },
  { address: '5tYB...K8sR', percentage: 2.9, duration: 60 },
  { address: '2vPL...Q6wJ', percentage: 2.1, duration: 24 },
];

export function Leaderboard() {
  const [holders] = useState<Holder[]>(MOCK_HOLDERS);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6 space-y-6"
    >
      <h2 className="text-xl font-semibold gradient-text">
        Top Holders
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="pb-4 font-medium">Rank</th>
              <th className="pb-4 font-medium">Address</th>
              <th className="pb-4 font-medium text-right">Holding</th>
              <th className="pb-4 font-medium text-right">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {holders.map((holder, index) => (
              <motion.tr
                key={holder.address}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm"
              >
                <td className="py-4 text-purple-400 font-medium">#{index + 1}</td>
                <td className="py-4 font-mono text-white">{holder.address}</td>
                <td className="py-4 text-right text-white">{holder.percentage.toFixed(1)}%</td>
                <td className="py-4 text-right text-gray-400">{holder.duration}h</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center text-sm text-gray-500">
        Updated every minute
      </div>
    </motion.div>
  );
} 