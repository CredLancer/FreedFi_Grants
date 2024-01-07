import React from 'react';
import ThemeSwitch from '@/components/ThemeSwitch';

const NavBar = () => {
  return (
    <div className="w-full  container px-6 md:px-10 mx-auto fixed inset-0 top-5">
      <div className=" flex items-center justify-between px-6 md:px-8 md:py-2 bg-neutral-800 rounded-[40px] h-[72px] ">
        <div className="text-white text-[40px] font-MXWasgard leading-9">
          FreedFi
        </div>
        <div className="flex items-center gap-6">
          <div className="text-zinc-200 px-2 py-2 text-sm font-medium font-Lexend leading-normal">
            About us
          </div>
          <div className="text-zinc-200 px-2 py-2 text-sm font-medium font-Lexend leading-normal">
            Documentation
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
