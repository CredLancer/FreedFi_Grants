import React from 'react';
import ThemeSwitch from '../components/ThemeSwitch';
import { Lexend } from 'next/font/google';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit'


const lexend = Lexend({ subsets: ['latin'] });

const NavBar = () => {
  return (
    <div className="w-full h-fit container px-6 md:px-10 mx-auto fixed inset-0 top-5 z-[100]">
      <div className=" flex items-center justify-between px-6 md:px-8 md:py-2 bg-neutral-800 rounded-[40px] h-[72px] ">
        <Link href={'/'}>
          <div className="text-white text-[40px] active:scale-90 transition-all duration-200 ease-in-out font-MXWasgard leading-9">
            FreedFi
          </div>
        </Link>
        <div className={`flex items-center gap-6 ${lexend.className}`}>
          <Link
            href="/marketplace"
            className="text-zinc-200 px-2 py-2 transition-all duration-200 ease-in-out hover:scale-110 text-base font-medium  leading-normal">
            Marketplace
          </Link>
          <ConnectButton accountStatus={'avatar'} />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
