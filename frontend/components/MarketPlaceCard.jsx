import ProfileImg from '@/assets/profile-img.png';
import Image from 'next/image';

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
          <h2 className="grow shrink basis-0 text-white text-[22px] font-semibold font-['Lexend']">
            {title}
          </h2>
          <span className="px-3 py-1 bg-slate-200 rounded-[13px] flex justify-center items-center">
            <div className="text-gray-900 text-xs font-medium font-['Lexend']">
              {projectTag}
            </div>
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-zinc-300 text-sm font-normal font-['Lexend']">
            {daysLeft} days left
          </span>
          <div className="flex items-center">
            <span className="text-zinc-500 text-sm font-normal font-['Lexend']">
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
        <p className="text-stone-300 text-xs font-normal font-['Lexend']">
          {description}
        </p>
        <a
          href={proposalLink}
          className="text-zinc-400 text-xs font-normal font-['Lexend'] underline">
          Proposal Link
        </a>
      </div>
      <div className="flex w-full justify-between px-5 py-3 bg-neutral-800 rounded-2xl items-center">
        <div className="flex flex-col  gap-1">
          <div className="text-zinc-400 text-xs font-medium font-['Lexend']">
            Pool Grant: • USD
          </div>
          <div className="text-zinc-200 text-2xl font-normal font-['Prosto One']">
            ${grantAmount}
          </div>
        </div>
        <div className="flex flex-col  gap-1">
          <div className="text-zinc-400 text-xs font-medium font-['Lexend']">
            Max per Application: • USD
          </div>
          <div className="text-zinc-200 text-2xl font-normal font-['Prosto One']">
            ${maxPerApplication}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-4">
        <span className="text-stone-300 text-sm font-normal font-['Lexend']">
          Key Tags:
        </span>
        <div className="flex justify-start items-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 ${tag.bgColor} rounded-[13px] text-gray-900 text-xs font-medium font-['Lexend']`}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
