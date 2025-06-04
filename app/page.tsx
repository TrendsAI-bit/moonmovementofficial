'use client';

import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import HolderStats from './components/HolderStats';
import Leaderboard from './components/Leaderboard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-purple-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
          Moon Movement
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CountdownTimer />
          <HolderStats />
        </div>
        <Leaderboard />
      </div>
    </main>
  );
} 