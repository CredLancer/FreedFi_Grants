'use client';
import React from 'react';
import { Lexend, Prosto_One, IBM_Plex_Sans } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });
const prostoOne = Prosto_One({ subsets: ['latin'], weight: ['400'] });
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '300'],
});

const DashboardCard = ({
  emoji,
  title,
  subtitle,
  amount,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section
      className={`w-full h-96 px-6 pt-10 pb-5 bg-zinc-900 rounded-3xl flex flex-col gap-8 justify-between ${lexend.className}`}>
      <header className="flex items-center gap-2">
        <span className={`text-5xl font-medium ${ibmPlexSans.className}`}>
          {emoji}
        </span>
        <div>
          <h3 className="text-zinc-200 text-[22px] font-semibold">{title}</h3>
          <p className="text-stone-300 text-xs">{subtitle}</p>
        </div>
      </header>
      <div
        className={`flex flex-col items-center gap-1 bg-neutral-800 rounded-2xl p-5 ${prostoOne.className}`}>
        <p className="text-zinc-400 text-base font-medium">
          All accounts • USD
        </p>
        <p className="text-zinc-200 text-[32px]">${amount}</p>
      </div>
      <footer className="self-stretch">
        <button
          onClick={onButtonClick}
          className="w-full px-4 py-3 rounded-2xl border border-zinc-600 text-zinc-200 text-base font-medium bg-transparent hover:bg-zinc-800 cursor-pointer transition-colors">
          {buttonText}
        </button>
      </footer>
    </section>
  );
};

export default DashboardCard;
