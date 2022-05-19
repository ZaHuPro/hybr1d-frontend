import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <nav className="bg-white py-2 mb-5 flex justify-center items-center mx-auto border-b-2 border-zinc-200">
        <div className="font-mono text-base text-zinc-700 uppercase font-semibold">
          Hacker News
        </div>
      </nav>
      <div className="flex justify-center bg-zinc-700 px-5 py-20">
        <div className="w-3/5">
          <div className="input-group relative flex items-stretch w-full">
            <input
              type="search"
              className="font-mono block w-full px-4 py-2 text-base font-normal text-zinc-700 bg-zinc-200 transition ease-in-out m-0 focus:text-zinc-700 focus:bg-white focus:border-zinc-100 focus:outline-none"
              placeholder="Enter text to search"
            />
            <button
              className="font-mono btn inline-block px-6 py-2 border-2 border-zinc-100 text-zinc-100 font-medium text-xs leading-tight uppercase  hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="button"
              id="button-addon3"
            >
              Search
            </button>
          </div>
            <p className="text-zinc-300 text-sm py-2 text-center font-mono">About 2001022 results found.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
