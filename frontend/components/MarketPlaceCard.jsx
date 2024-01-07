import Image from 'next/image';
import { Lexend, Prosto_One } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });
const prostoOne = Prosto_One({ subsets: ['latin'], weight: ['400'] });

export default function MarketPlaceCard({
  title,
  projectTag,
  daysLeft,
  applications,
  applicationImages,
  description,
  proposalLink,
  grantAmount,
  maxPerApplication,
  tags,
}) {
  return (
    <div className="w-full h-full p-5  bg-zinc-900 rounded-3xl flex flex-col justify-center items-start gap-5">
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex w-full justify-between items-center gap-3">
          <h2
            className={`grow shrink basis-0 text-white text-[22px] font-semibold ${lexend.className}`}>
            {title}
          </h2>
          <span className="px-3 py-1 bg-slate-200 rounded-[13px] flex justify-center items-center">
            <div
              className={`text-gray-900 text-xs font-medium ${lexend.className}`}>
              {projectTag}
            </div>
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span
            className={`text-zinc-300 text-sm font-normal ${lexend.className}`}>
            {daysLeft} days left
          </span>
          <div className="flex items-center">
            <span
              className={`text-zinc-500 text-sm font-normal ${lexend.className}`}>
              {applications} Applications
            </span>
            <div className="flex -space-x-2 ml-2">
              {applicationImages.map((image, index) => (
                <Image
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-zinc-900"
                  src={image}
                  alt="Application avatar"
                />
              ))}
            </div>
          </div>
        </div>
        <p className={`text-stone-300 text-xs font-normal ${lexend.className}`}>
          {description}
        </p>
        <a
          href={proposalLink}
          className={`text-zinc-400 text-xs font-normal ${lexend.className} underline`}>
          Proposal Link
        </a>
      </div>
      <div className="flex w-full justify-between px-4 gap-3 py-3 bg-neutral-800 rounded-2xl items-center">
        <div className="flex flex-col  gap-1">
          <div
            className={`text-zinc-400 text-xs font-medium whitespace-nowrap ${lexend.className}`}>
            Pool Grant: • USD
          </div>
          <div
            className={`text-zinc-200 text-2xl font-normal ${prostoOne.className} `}>
            ${grantAmount}
          </div>
        </div>
        <div className="flex flex-col  gap-1">
          <div
            className={`text-zinc-400 text-xs font-medium whitespace-nowrap ${lexend.className}`}>
            Max per Application: • USD
          </div>
          <div
            className={`text-zinc-200 text-2xl font-normal ${prostoOne.className} `}>
            ${maxPerApplication}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-4">
        <span
          className={`text-stone-300 text-sm font-normal ${lexend.className}`}>
          Key Tags:
        </span>
        <div className="flex justify-start items-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 ${tag.bgColor} rounded-[13px] text-gray-900 text-xs font-medium ${lexend.className}`}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
