'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HolderStats as HolderStatsType } from '@/app/types';

// Mock data for MVP
const MOCK_HOLDING_PERCENTAGE = 1.5;
const MOCK_HOLDING_SINCE = new Date(Date.now() - 25 * 60 * 60 * 1000);

const MOCK_STATS: HolderStatsType = {
  totalHolders: 1234,
  totalSupply: '1,000,000,000',
  circulatingSupply: '750,000,000',
  marketCap: '$10,000,000',
  price: '$0.01'
};

const HolderStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6"
    >
      <h2 className="text-xl font-bold brand-text mb-6">Holder Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="glass p-4">
          <div className="text-sm text-gray-400 mb-1">Total Holders</div>
          <div className="text-xl font-bold brand-text">{MOCK_STATS.totalHolders.toLocaleString()}</div>
        </div>
        <div className="glass p-4">
          <div className="text-sm text-gray-400 mb-1">Total Supply</div>
          <div className="text-xl font-bold brand-text">{MOCK_STATS.totalSupply}</div>
        </div>
        <div className="glass p-4">
          <div className="text-sm text-gray-400 mb-1">Circulating Supply</div>
          <div className="text-xl font-bold brand-text">{MOCK_STATS.circulatingSupply}</div>
        </div>
        <div className="glass p-4">
          <div className="text-sm text-gray-400 mb-1">Market Cap</div>
          <div className="text-xl font-bold brand-text">{MOCK_STATS.marketCap}</div>
        </div>
        <div className="glass p-4">
          <div className="text-sm text-gray-400 mb-1">Price</div>
          <div className="text-xl font-bold brand-text">{MOCK_STATS.price}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default HolderStats; 