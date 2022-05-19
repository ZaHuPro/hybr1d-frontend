import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto md:px-4 mb-14">
      <nav className="bg-white py-2 md:mb-5 flex justify-center items-center mx-auto md:border-b-2 border-zinc-200">
        <div className="font-mono text-base text-emerald-700 uppercase font-semibold">
          Hacker News
        </div>
      </nav>
      <div className="flex justify-center bg-emerald-700 px-5 py-14 md:py-28 mb-5">
        <div className="md:w-3/5 w-full">
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
          <p className="text-zinc-300 text-sm py-2 font-mono absolute">
            About 2001022 results found.
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-col gap-5 bg-white">
        <div className="w-full text-emerald-800 text-sm font-mono">
          {Array(20)
            .fill(1)
            .map((e, i) => (
              <div
                key={i}
                className="py-2 px-4 border-b border-zinc-300 w-full hover:bg-zinc-200 cursor-pointer flex justify-center md:justify-between"
              >
                <span className="">
                  Stephen Hawking has died
                </span>
                <span className="border-l border-zinc-300 pl-2 md:pl-4 hidden md:block">
                  Cogito - Jan 20, 2020
                </span>
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item disabled">
                <button className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-zinc-500 pointer-events-none focus:shadow-none">
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-zinc-800 hover:text-zinc-800 hover:bg-zinc-200 focus:shadow-none">
                  1
                </button>
              </li>
              <li className="page-item active">
                <button className="page-link relative block py-1.5 px-3  border-0 bg-emerald-600 outline-none transition-all duration-300 text-white hover:text-white hover:bg-emerald-800 shadow-md focus:shadow-md">
                  2
                </button>
              </li>
              <li className="page-item">
                <button className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-zinc-800 hover:text-zinc-800 hover:bg-zinc-200 focus:shadow-none">
                  3
                </button>
              </li>
              <li className="page-item">
                <button className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-zinc-800 hover:text-zinc-800 hover:bg-zinc-200 focus:shadow-none">
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
