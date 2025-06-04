'use client';

import React from 'react';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import HolderStats from './components/HolderStats';
import Leaderboard from './components/Leaderboard';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CountdownTimer />
          <HolderStats />
        </div>
        <Leaderboard />
      </main>
    </div>
  );
} 