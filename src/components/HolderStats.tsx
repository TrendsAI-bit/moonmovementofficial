'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HolderStatsData } from '@/types';

// Mock data for MVP
const MOCK_HOLDING_PERCENTAGE = 1.5;
const MOCK_HOLDING_SINCE = new Date(Date.now() - 25 * 60 * 60 * 1000);

export default function HolderStats() {
  const [stats] = React.useState<HolderStatsData>({
    holdingPercentage: MOCK_HOLDING_PERCENTAGE,
    holdingSince: MOCK_HOLDING_SINCE,
    isEligible: MOCK_HOLDING_PERCENTAGE >= 1,
    hasSold: false,
  });

  const holdingDuration = stats.holdingSince
    ? Math.floor((Date.now() - stats.holdingSince.getTime()) / (1000 * 60 * 60))
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6 space-y-6 h-full"
    >
      <h2 className="text-xl font-semibold gradient-text">
        Your Holdings
      </h2>
      
      <div className="space-y-4">
        <div className="glass rounded-lg p-4 flex justify-between items-center">
          <span className="text-gray-400">Amount</span>
          <span className="font-mono text-white">{stats.holdingPercentage.toFixed(2)}% of supply</span>
        </div>
        
        <div className="glass rounded-lg p-4 flex justify-between items-center">
          <span className="text-gray-400">Duration</span>
          <span className="font-mono text-white">{holdingDuration}h</span>
        </div>

        <div className="glass rounded-lg p-4 flex justify-between items-center">
          <span className="text-gray-400">Status</span>
          <span className={`font-medium ${stats.isEligible ? 'text-green-400' : 'text-yellow-400'}`}>
            {stats.isEligible ? '✨ Eligible' : '⏳ Hold more tokens'}
          </span>
        </div>

        {stats.hasSold && (
          <div className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500/20 text-red-400">
            ⚠️ You have sold tokens and are no longer eligible
          </div>
        )}
      </div>
    </motion.div>
  );
} 