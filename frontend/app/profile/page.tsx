// function createProfile(
//         uint256 _nonce,
//         string memory _name,
//         Metadata memory _metadata,
//         address _owner,
//         address[] memory _members
//     ) external returns (bytes32) {

'use client'

import { useAccount, useContractWrite } from 'wagmi'
import { RegisteryAddress } from '../../lib/utils'
import RegistryAbi from '../../abi/Registery.json'

const Profile = () => {

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
    address: RegisteryAddress,
    abi: RegistryAbi.abi,
    functionName: 'createProfile',
    args: [1222, 'thename', metadata, address, [address]]
  })

  const createProfileHandler = async () => {
    try {
      await createProfileWrite()

      if (!createProfileLoading) {
       
        // toast.success('Successfully Deposited!')
        // router.push('/dashboard')
        console.log(createProfileData)
      }
    } catch (error) {
      // setShowModal(false)
      // toast.error('Are you an investor? Contact the support team')
      console.log('Could not invest: ', error)
    }
  }

  return (

    <div>
      <button onClick={createProfileHandler} >Create Profile</button>
    </div>
  )
}

export default Profile