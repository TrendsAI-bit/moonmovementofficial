'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Winner, TimeLeft } from '@/app/types';

// Mock data for MVP
const MOCK_PAST_WINNERS: Winner[] = [
  {
    address: '0x1234...5678',
    amount: 1000,
    timestamp: Date.now() - 86400000
  },
  {
    address: '0x8765...4321',
    amount: 750,
    timestamp: Date.now() - 172800000
  }
];

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [winners] = useState<Winner[]>(MOCK_PAST_WINNERS);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date('2024-12-31T23:59:59').getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6 space-y-6 h-full"
    >
      <h2 className="text-xl font-semibold gradient-text">
        Next Draw
      </h2>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="glass rounded-lg p-4">
          <div className="text-3xl font-mono font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="text-sm text-gray-400 mt-1">Days</div>
        </div>
        <div className="glass rounded-lg p-4">
          <div className="text-3xl font-mono font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-sm text-gray-400 mt-1">Hours</div>
        </div>
        <div className="glass rounded-lg p-4">
          <div className="text-3xl font-mono font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-sm text-gray-400 mt-1">Minutes</div>
        </div>
        <div className="glass rounded-lg p-4">
          <div className="text-3xl font-mono font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-sm text-gray-400 mt-1">Seconds</div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Last Winners</h3>
        <div className="space-y-2">
          {winners.map((winner, index) => (
            <motion.div
              key={winner.address + winner.timestamp}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <span className="font-mono text-white">{winner.address}</span>
                <div className="text-xs text-gray-400">{new Date(winner.timestamp).toLocaleString()}</div>
              </div>
              <span className="text-green-400 font-medium">+{winner.amount} SOL</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer; 