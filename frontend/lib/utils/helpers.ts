import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import { type ClassValue, clsx } from 'clsx'
// import { twMerge } from 'tailwind-merge'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY
const web3 = createAlchemyWeb3(alchemyKey)

// export const cn = (...inputs: ClassValue[]) => {
//   return twMerge(clsx(inputs))
// }

export const convertToWei = (value: number) => {
  return web3.utils.toWei(String(value), 'ether')
}

export const appNonce = () => {
  const randomNumbers = [];

  for (let i = 0; i < 6; i++) {
      // Generate a random number between 1 and 49 (inclusive)
      const randomNumber = Math.floor(Math.random() * 49) + 1;

      // Add the random number to the array if it's not already present
      if (!randomNumbers.includes(randomNumber)) {
          randomNumbers.push(randomNumber);
      } else {
          // If the number is already present, decrement the loop counter to try again
          i--;
      }
  }

  return randomNumbers;
}
