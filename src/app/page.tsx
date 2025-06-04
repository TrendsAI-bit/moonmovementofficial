'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import HolderStats from '@/components/HolderStats';
import { Leaderboard } from '@/components/Leaderboard';
import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="stars absolute inset-0" />
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-24 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold gradient-text">
                Join the Lunar Revolution
              </h1>
              <p className="text-xl text-gray-400">
                Hold strong, earn rewards, reach for the stars
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <HolderStats />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <CountdownTimer />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Leaderboard />
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
