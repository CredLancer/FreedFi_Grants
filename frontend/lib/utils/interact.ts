import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import { getContract } from 'viem'
import { publicClient } from '../wagmi'
// import LendingPlatform from '../../../contracts/out/GetALoan.sol/LendingPlatform.json'
// import PoolController from '../../../contracts/out/PoolController.sol/PoolController.json'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY
const web3 = createAlchemyWeb3(alchemyKey)

export const LPcontractAddress = '0x1E758656f3Ba1aC562b6D93D08E2ffE0DbE347B0'
export const PCcontractAddress = '0x6Cc97B5BfE61d1B985D80a71fB785e35933148a0'
export const RegisteryAddress = '0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3'
export const AlloProxy = '0x1133eA7Af70876e64665ecD07C0A0476d09465a1'

// export const getContractInstance = (isPoolController?: boolean) => {
//   let contractABI
//   let contractAddress

//   if (isPoolController) {
//     contractABI = PoolController.abi
//     contractAddress = PCcontractAddress
//   } else {
//     contractABI = LendingPlatform.abi
//     contractAddress = LPcontractAddress
//   }
//   return getContract({
//     address: '0x6Cc97B5BfE61d1B985D80a71fB785e35933148a0',
//     abi: contractABI,
//     client: publicClient,
//   })
// }


