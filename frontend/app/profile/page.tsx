
'use client'

import { useAccount, useContractWrite, useContractEvent } from 'wagmi'
import { RegistryAddress, appNonce } from '../../lib/utils'
import RegistryAbi from '../../abi/Registry.json'
import { useEffect, useState } from 'react'

const Profile = () => {

  const { address } = useAccount()

  const [profileName, setProfileName] = useState('')

  const metadata = {
  protocol: 1,  // Example value for the protocol field (IPFS = 1)
  pointer: 'your_ipfs_hash_here',  // Example IPFS hash as a string
};

  const {
    data: createProfileData,
    isLoading: createProfileLoading,
    write: createProfileWrite,
  } = useContractWrite({
    address: RegistryAddress,
    abi: RegistryAbi.abi,
    functionName: 'createProfile',
    args: [appNonce(), 'thename', metadata, address, [address]]
  })

  const createProfileHandler = async () => {
    try {
      
      createProfileWrite()
 console.log(createProfileData)
      if (!createProfileLoading) {
       
        // toast.success('Successfully Deposited!')
        // router.push('/dashboard')
        console.log('createProfileData')
        console.log(createProfileData)
      }
    } catch (error) {
      // setShowModal(false)
      // toast.error('Are you an investor? Contact the support team')
      console.log('Could not invest: ', error)
    }
  }

    // Use the contract event hook to listen for the ProfileCreated event
    const contractEventHook = useContractEvent({
      address: RegistryAddress,
      abi: RegistryAbi.abi,
      eventName: 'ProfileCreated',
    });
    const profileCreatedEventData = contractEventHook?.data || {};
    useEffect(() => {
      // Check if the ProfileCreated event data is available
      if (profileCreatedEventData) {
        console.log('Profile Created Event Data:', profileCreatedEventData);
  
        // You can extract relevant information from the event data
        const profileId = profileCreatedEventData.profileId;
        const owner = profileCreatedEventData.owner;

        console.log(profileCreatedEventData)
  
        // Perform actions or show notifications based on the event
        // toast.success(`Profile ${profileId} created by ${owner}!`);
        // router.push('/dashboard'); // Redirect to the dashboard after creating a profile
      }
    }, [profileCreatedEventData]);
  
      return (
    <>
      <div className="container mx-auto p-4 px-6 md:px-10 pb-12 flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center">
          Create Profile With <br />{' '}
          <span className="text-blue-400">Allo Protocol</span>
        </h1>
        <form className="w-1/2">
          <div className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-white mb-4 text-xs font-bold"
                  for="company">
                  Profile Name *
                </label>
                <input
                  className="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="Profile Name"
                  onChange={e => setProfileName(e.target.value)}
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
                <button type="button" onClick={createProfileHandler} className="w-full px-4 py-3 rounded-2xl border border-zinc-600 text-zinc-200 text-base font-medium bg-transparent hover:bg-zinc-800 cursor-pointer transition-colors">
                  Create Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile