'use client';
import React from 'react';
import DashboardCard from './DashboardCard';
import SkillSvg from '../assets/skills.svg';
import Image from 'next/image';
import { Lexend, Prosto_One, IBM_Plex_Sans } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });
const prostoOne = Prosto_One({ subsets: ['latin'], weight: ['400'] });
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '300'],
});

const Dashboard = () => {
  return (
    <div className="px-6 md:px-10 flex flex-col gap-10">
      <main className=" w-full mt-[7rem]  h-96 gap-5 flex flex-col lg:flex-row ">
        <section className="w-full basis-[50%] flex-1 sm:h-96 px-6 py-10 bg-zinc-900 rounded-3xl flex-col justify-center items-center gap-10 flex">
          <header className="flex-col justify-center items-center gap-2 flex">
            <h1
              className={`${prostoOne.className} text-center text-purple-500 text-[28px] font-normal leading-10`}>
              Your skill match score
            </h1>
            <div className="w-[200px] h-[203.38px] relative">
              <div className="p-1 left-[43px] top-[73.03px] absolute bg-purple-500 justify-center items-center gap-1 inline-flex">
                <span
                  className={`text-center text-white text-[44px] font-normal ${prostoOne.className} leading-[50px]`}>
                  90%
                </span>
              </div>
              <Image src={SkillSvg} alt="Skill Score" />
            </div>
          </header>
          <div
            className={`w-full md:px-10 xl:px-10 justify-center items-center gap-5 flex ${lexend.className}`}>
            <button className="grow shrink basis-0 h-12 px-4 py-3 bg-purple-500 rounded-2xl justify-center items-center gap-3 flex hover:scale-105 ease-in-out transition-all duration-150 text-white text-base font-medium leading-normal">
              Upgrade My Score
            </button>
            <button className="grow shrink basis-0 h-12 px-4 py-3 bg-gray-100 rounded-2xl justify-center items-center gap-3 flex hover:scale-105 ease-in-out transition-all duration-150 text-zinc-900 text-base font-medium leading-normal">
              My Proofs of Skills
            </button>
          </div>
        </section>
        <aside className="w-full basis-[50%] flex-1 h-96 justify-start items-start gap-5 flex flex-col sm:flex-row">
          <DashboardCard
            emoji="💰"
            title="Funded"
            subtitle="Your applications"
            amount="20,000"
            buttonText="Request Loan"
            onButtonClick={() => console.log('Loan request clicked')}
          />
          <DashboardCard
            emoji="🚀"
            title="Invested"
            subtitle="Your applications"
            amount="20,000"
            buttonText="Invest Now"
            onButtonClick={() => console.log('Loan request clicked')}
          />
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;
