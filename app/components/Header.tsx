'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Image from 'next/image';

const Header: React.FC = () => {
  const { connected } = useWallet();

  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12">
            <Image
              src="/moon.svg"
              alt="Moon Movement Logo"
              layout="fill"
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold brand-text brand-glow">Moon Movement</h1>
        </div>
        <div className="flex items-center space-x-4">
          <WalletMultiButton className="connect-wallet-btn" />
        </div>
      </div>
    </header>
  );
};

export default Header; 