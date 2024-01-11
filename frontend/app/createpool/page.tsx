'use client'

import React, { useState } from 'react';
import { useContractWrite } from 'wagmi'
import AlloImplementationAbi from '../../abi/AlloImplementation.json'
import { AlloImplementationAddress, appNonce } from '../../lib/utils'
import { parseEther } from 'viem';

const CreatePool = () => {

  const meta = {
    protocol: 1,  // Example value for the protocol field (IPFS = 1)
    pointer: 'your_ipfs_hash_here',  // Example IPFS hash as a string
  };

  const [profileId, setProfileId] = useState('48656c6c6f2c20457468657265756d21')
  const [strategy, setStrategy] = useState('0xD13ec67938B5E9Cb05A05D8e160daF02Ed5ea9C9')
  const [initStrategyData, setInitStrategyData] = useState('0xD13ec67938B5E9Cb05A05D8e160daF02Ed5ea9C9')
  const [token, setToken] = useState('0xC3436dFF46812cf0A9705a0D3bCbe26fd3901961')
  const [amount, setAmount] = useState('0.003')
  const [metadata, setMetadata] = useState(meta)
  const [managers, setManagers] = useState(['0xC3436dFF46812cf0A9705a0D3bCbe26fd3901961'])

  const {
    data: createPoolData,
    isLoading: createPoolLoading,
    writeAsync: createPoolWrite,
  } = useContractWrite({
    address: AlloImplementationAddress,
    abi: AlloImplementationAbi.abi,
    functionName: 'createPool',
    args: [
      profileId,  
      strategy, 
      initStrategyData,
      token,
      parseEther(amount),
      metadata,
      managers
    ],
    value: parseEther(amount)
  })

  const createPoolHandler = async () => {
    try {
   
      createPoolWrite()
 console.log(createPoolData)
      if (!createPoolLoading) {
       
        console.log('createPoolData')
        console.log(createPoolData)
      }
    } catch (error) {
      console.log('Could not invest: ', error)
    }
  }

  return (
    <>
      <div className="container mx-auto p-4 px-6 md:px-10 pb-12 flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center">
          Create Pool With <br />{' '}
          <span className="text-blue-400">Allo Protocol</span>
        </h1>
        <form className="w-1/2">
          <div className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-white mb-4 text-xs font-bold"
                  for="company">
                  Grant Name *
                </label>
                <input
                  className="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="OTC Swap"
                />
                <div>
                  <span className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="title">
                  Tagline *
                </label>
                <input
                  className="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="Cross Chain Swap"
                />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-white mb-4 text-xs font-bold"
                  for="company">
                  Grant ID *
                </label>
                <input
                  className="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="0x12"
                />
               
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="title">
                  Total amount *
                </label>
                <input
                  className="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="2000$"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="application-link">
                  Logo Link*
                </label>
                <input
                  className="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link"
                  type="text"
                  placeholder="http://...."
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="location">
                  Strategy *
                </label>
                <div>
                  <select
                    className="w-full bg-black mt-2 text-white border text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location">
                    <option>Direct</option>
                    <option>Enugu</option>
                    <option>Lagos</option>
                  </select>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="job-type">
                  aMOUNT rANGE *
                </label>
                <div>
                  <select
                    className="w-full bg-black mt-2 text-white border text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="job-type">
                    <option>10K -- 50K</option>
                    <option>100K -- 150K</option>
                    <option>200K -- 250K</option>
                  </select>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="department">
                  project type *
                </label>
                <div>
                  <select
                    className="w-full bg-black mt-2 text-white border text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="department">
                    <option>DEFI</option>
                    <option>NFT PLACE</option>
                    <option>DAO's</option>
                  </select>
                </div>
              </div>
            </div>

            
            <div className="-mx-3 md:flex mt-4">
              <div className="md:w-full px-3">
                <button type="button" onClick={createPoolHandler} className="w-full px-4 py-3 rounded-2xl border border-zinc-600 text-zinc-200 text-base font-medium bg-transparent hover:bg-zinc-800 cursor-pointer transition-colors">
                  Create Pool
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePool;
