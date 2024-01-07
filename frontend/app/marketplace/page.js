import React from 'react';
import MarketPlaceCard from '@/components/MarketPlaceCard';
import ProfileImg from '@/assets/profile-img.png';
import NavBar from '@/components/NavBar';

const MarketPlace = () => {
  const cardData = [
    {
      title: 'Aztec Grants',
      projectTag: 'Project',
      daysLeft: '21',
      applications: '20',
      applicationImages: [ProfileImg, ProfileImg, ProfileImg],
      description:
        'The Aztec Grants Program supports developers building with, and contributing to, the Noir programming language and the Aztec network.',
      proposalLink: '/path/to/proposal',
      grantAmount: "500'000",
      maxPerApplication: "20'000",
      tags: [
        { name: 'Data', bgColor: 'bg-purple-300' },
        { name: 'DAO', bgColor: 'bg-yellow-100' },
        { name: 'NFT', bgColor: 'bg-green-200' },
        { name: 'Gaming', bgColor: 'bg-green-200' },
      ],
    },
    {
      title: 'Aztec Grants',
      projectTag: 'Project',
      daysLeft: '21',
      applications: '20',
      applicationImages: [ProfileImg, ProfileImg, ProfileImg],
      description:
        'The Aztec Grants Program supports developers building with, and contributing to, the Noir programming language and the Aztec network.',
      proposalLink: '/path/to/proposal',
      grantAmount: "500'000",
      maxPerApplication: "20'000",
      tags: [
        { name: 'Data', bgColor: 'bg-purple-300' },
        { name: 'DAO', bgColor: 'bg-yellow-100' },
        { name: 'NFT', bgColor: 'bg-green-200' },
        { name: 'Gaming', bgColor: 'bg-green-200' },
      ],
    },
    {
      title: 'Aztec Grants',
      projectTag: 'Project',
      daysLeft: '21',
      applications: '20',
      applicationImages: [ProfileImg, ProfileImg, ProfileImg],
      description:
        'The Aztec Grants Program supports developers building with, and contributing to, the Noir programming language and the Aztec network.',
      proposalLink: '/path/to/proposal',
      grantAmount: "500'000",
      maxPerApplication: "20'000",
      tags: [
        { name: 'Data', bgColor: 'bg-purple-300' },
        { name: 'DAO', bgColor: 'bg-yellow-100' },
        { name: 'NFT', bgColor: 'bg-green-200' },
        { name: 'Gaming', bgColor: 'bg-green-200' },
      ],
    },
    {
      title: 'Aztec Grants',
      projectTag: 'Project',
      daysLeft: '21',
      applications: '20',
      applicationImages: [ProfileImg, ProfileImg, ProfileImg],
      description:
        'The Aztec Grants Program supports developers building with, and contributing to, the Noir programming language and the Aztec network.',
      proposalLink: '/path/to/proposal',
      grantAmount: "500'000",
      maxPerApplication: "20'000",
      tags: [
        { name: 'Data', bgColor: 'bg-purple-300' },
        { name: 'DAO', bgColor: 'bg-yellow-100' },
        { name: 'NFT', bgColor: 'bg-green-200' },
        { name: 'Gaming', bgColor: 'bg-green-200' },
      ],
    },
    {
      title: 'Aztec Grants',
      projectTag: 'Project',
      daysLeft: '21',
      applications: '20',
      applicationImages: [ProfileImg, ProfileImg, ProfileImg],
      description:
        'The Aztec Grants Program supports developers building with, and contributing to, the Noir programming language and the Aztec network.',
      proposalLink: '/path/to/proposal',
      grantAmount: "500'000",
      maxPerApplication: "20'000",
      tags: [
        { name: 'Data', bgColor: 'bg-purple-300' },
        { name: 'DAO', bgColor: 'bg-yellow-100' },
        { name: 'NFT', bgColor: 'bg-green-200' },
        { name: 'Gaming', bgColor: 'bg-green-200' },
      ],
    },
    {
      title: 'Aztec Grants',
      projectTag: 'Project',
      daysLeft: '21',
      applications: '20',
      applicationImages: [ProfileImg, ProfileImg, ProfileImg],
      description:
        'The Aztec Grants Program supports developers building with, and contributing to, the Noir programming language and the Aztec network.',
      proposalLink: '/path/to/proposal',
      grantAmount: "500'000",
      maxPerApplication: "20'000",
      tags: [
        { name: 'Data', bgColor: 'bg-purple-300' },
        { name: 'DAO', bgColor: 'bg-yellow-100' },
        { name: 'NFT', bgColor: 'bg-green-200' },
        { name: 'Gaming', bgColor: 'bg-green-200' },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4 px-6 md:px-10 pb-12">
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[7rem]">
        {cardData.map((data, index) => (
          <MarketPlaceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
