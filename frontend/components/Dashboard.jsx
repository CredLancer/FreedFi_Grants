'use client';
import React from 'react';
import DashboardCard from './DashboardCard';
import SkillSvg from '../assets/skills.svg';
import Image from 'next/image';
import CreditFactor from './CreditFactor';
import { Lexend, Prosto_One } from 'next/font/google';
import { useContractWrite, useAccount } from 'wagmi'
import { RegistryAddress, appNonce } from '../lib/utils'
import RegistryAbi from '../abi/Registry.json'
import toast, { Toaster } from 'react-hot-toast'

const lexend = Lexend({ subsets: ['latin'] });
const prostoOne = Prosto_One({ subsets: ['latin'], weight: ['400'] });

const Dashboard = () => {
  const { address } = useAccount()

  const metadata = {
    protocol: 1,  // Example value for the protocol field (IPFS = 1)
    pointer: 'your_ipfs_hash_here',  // Example IPFS hash as a string
  };
  
    const {
      data: createProfileData,
      isLoading: createProfileLoading,
      writeAsync: createProfileWrite,
    } = useContractWrite({
      address: RegistryAddress,
      abi: RegistryAbi.abi,
      functionName: 'createProfile',
      args: [appNonce(), 'thename', metadata, address, [address]]
    })
  
    const createProfileHandler = async () => {
      try {
   
        await createProfileWrite()
        setTimeout(() => {
          toast.success('Profile created!')
          window.location.href = '/createpool'
        }, 3000)
  
      } catch (error) {
        // setShowModal(false)
        // toast.error('Are you an investor? Contact the support team')
        console.log('Could not invest: ', error)
      }
    }


  return (
    <main className="px-6 md:px-10 flex flex-col gap-10 h-full pb-16">
      <Toaster />
      <div className=" w-full mt-[8rem] h-full sm:h-96 gap-5 flex flex-col lg:flex-row ">
        <section className="w-full basis-[50%] flex-1 sm:h-96 px-6 py-10 bg-zinc-900 rounded-3xl flex-col justify-center items-center gap-10 flex">
          <header className="flex-col  items-center gap-2 flex">
            <h1
              className={`${prostoOne.className} text-purple-500  text-[28px] font-normal leading-10`}>
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
            buttonText={createProfileLoading ? 'Requesting ... ' : 'Request Grant'}
            onButtonClick={createProfileHandler}
          />
          <DashboardCard
            emoji="🚀"
            title="Invested"
            subtitle="Your applications"
            amount="20,000"
            buttonText="Invest Now"
            onButtonClick={() => console.log('Loan request clicked.')}
          />
        </aside>
      </div>
      <section className="w-full min-h-[400px] h-full p-4 md:p-10 bg-zinc-900 rounded-3xl flex flex-col lg:flex-row justify-start items-center gap-10">
        <div className="w-full md:basis-[50%] p-5 bg-neutral-800 rounded-2xl flex flex-col justify-center  gap-10">
          <div
            className={`text-lime-400 text-[28px] font-normal ${prostoOne.className} leading-10`}>
            Trust credit score
          </div>
          <div className="w-60 h-[200px] relative mx-auto">
            <div
              className={`text-center text-white text-[28px] font-normal ${prostoOne.className} leading-[30.07px]`}>
              90%
            </div>
          </div>
        </div>
        <div className="w-full md:basis-[50%] flex flex-col justify-center  gap-5">
          <div className={`h-[42px] text-left ${lexend.className}`}>
            <div className="text-zinc-200 text-md md:text-[22px] font-semibold leading-normal text-left">
              Credit Factors
            </div>
            <div className="text-stone-300 text-xs font-normal leading-[18px]">
              Your credit factors are
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            <CreditFactor percentage="30%" label="Wallet Address" />
            <CreditFactor percentage="30%" label="Wallet Address" />
            <CreditFactor percentage="30%" label="Wallet Address" />
            <CreditFactor percentage="30%" label="Wallet Address" />
            <CreditFactor percentage="30%" label="Wallet Address" />
            <CreditFactor percentage="30%" label="Wallet Address" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
