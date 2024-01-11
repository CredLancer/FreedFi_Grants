import React from 'react';

const CreatePool = () => {
  return (
    <>
      <div className="container mx-auto p-4 px-6 md:px-10 pb-12 flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center">
          Create Pool With <br />{' '}
          <span className="text-blue-400">Aloo Protocol</span>
        </h1>
        <form className="w-1/2">
          <div class="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="uppercase tracking-wide text-white mb-4 text-xs font-bold"
                  for="company">
                  Grant Name *
                </label>
                <input
                  class="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="OTC Swap"
                />
                <div>
                  <span class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </span>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="title">
                  Tagline *
                </label>
                <input
                  class="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="Cross Chain Swap"
                />
              </div>
            </div>

            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="uppercase tracking-wide text-white mb-4 text-xs font-bold"
                  for="company">
                  Grant ID *
                </label>
                <input
                  class="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  disabled
                  type="text"
                  placeholder="0x12"
                />
               
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="title">
                  Total amount *
                </label>
                <input
                  class="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="2000$"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="application-link">
                  Logo Link*
                </label>
                <input
                  class="w-full bg-black mt-2 text-white border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link"
                  type="text"
                  placeholder="http://...."
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-2 flex-wrap">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="location">
                  GRANT DISTRIBUTION METHOD *
                </label>
                <div>
                  <select
                    class="w-full bg-black mt-2 text-white border text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location">
                    <option>Direct</option>
                    <option>Indirect</option>
                    <option>Lagos</option>
                  </select>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="job-type">
                  aMOUNT rANGE *
                </label>
                <div>
                  <select
                    class="w-full bg-black mt-2 text-white border text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="job-type">
                    <option>10K -- 50K</option>
                    <option>100K -- 150K</option>
                    <option>200K -- 250K</option>
                  </select>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="department">
                  project type *
                </label>
                <div>
                  <select
                    class="w-full bg-black mt-2 text-white border text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="department">
                    <option>DEFI</option>
                    <option>NFT PLACE</option>
                    <option>DAO's</option>
                  </select>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="department">
                  Current Date *
                </label>
                <div>
                <input datepicker type="date" className="mt-2 bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:placeholder-gray-400 dark:text-white " placeholder="Select date"/>
                </div>
              </div>
            </div>

            
            <div class="-mx-3 md:flex mt-4">
              <div class="md:w-full px-3">
                <button className="w-full px-4 py-3 rounded-2xl border border-zinc-600 text-zinc-200 text-base font-medium bg-transparent hover:bg-zinc-800 cursor-pointer transition-colors">
                  Create Pool
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePool;
