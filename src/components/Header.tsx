'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-6 backdrop-blur-xl bg-black/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold gradient-text">
              Moon Movement
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button className="glass px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
              Connect Wallet
            </button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
} 