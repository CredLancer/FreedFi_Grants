import { Lexend, Prosto_One } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });
const prostoOne = Prosto_One({ subsets: ['latin'], weight: ['400'] });

const CreditFactor = ({ percentage, label }) => {
  return (
    <div className="grow shrink basis-0 self-stretch p-5 bg-neutral-800 rounded-2xl flex-col justify-start items-start gap-1 inline-flex">
      <div
        className={`self-stretch text-zinc-200 text-2xl font-normal ${prostoOne.className} leading-loose`}>
        {percentage}
      </div>
      <div
        className={`self-stretch text-zinc-400 text-base font-medium ${lexend.className} leading-normal`}>
        {label}
      </div>
    </div>
  );
};

export default CreditFactor;
