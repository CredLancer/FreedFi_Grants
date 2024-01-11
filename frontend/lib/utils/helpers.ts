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
  let randomNumbers = "";

  while (randomNumbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 49) + 1;
    const randomNumberString = String(randomNumber);

    if (!randomNumbers.includes(randomNumberString)) {
      randomNumbers += randomNumberString;
    }
  }

  return randomNumbers;
};

