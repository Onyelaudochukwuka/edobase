import React, { FC } from 'react';

import Link from 'next/link';
import Clock from 'react-live-clock';

import { Search } from '../assets';

export interface INavbarProps {
  className: string
}
const links: string[] = ['Trending', 'Recent', 'Topics'];
const Navbar: FC<INavbarProps> = ({ className }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const linked = ['Politics', 'Sports', 'Buisness', 'Religion', 'Fashion', 'Education', 'Real Estate', 'Job/Vacancy', 'Health', 'Entertainment', 'Technology', 'Lifestyle', 'Travel', 'Food', 'Music', 'Art', 'Culture', 'News'];
  return (
    <nav
      className={`${className} bg-primary h-fit py-3 flex flex-col gap-4 w-full`}
    >
      <h1 className="text-center font-bold text-black text-xl">Edobase</h1>
      <div className="flex justify-between items-center px-12 flex-col lg:flex-row gap-4">
        <label htmlFor="search" className="relative block basis-3/12">
          <input
            type="text"
            id="search"
            className="bg-black lg:block rounded-xl w-64 h-10 px-4 pl-12 text-base placeholder-white text-white focus:outline-none "
            placeholder="Search"
          />
          <span className="absolute inset-y-0 left-1 flex items-center pl-2">
            <Search className="h-5 w-5" />
          </span>
        </label>
        <div className="flex justify-between basis-3/12 gap-4">
          {links.map((value) => (
            <Link href={`/${value.toLowerCase()}`} key={value}>
              <span className="text-base font-semibold">{value}</span>
            </Link>
          ))}
        </div>
        <div className="flex basis-3/12 justify-between gap-4">
          <button
            type="button"
            className="px-6 py-2 basis-2/5 bg-action hover:bg-basic text-white rounded-full transition-colors duration-500 ease-in"
          >
            Register
          </button>
          <button
            type="button"
            className="px-6 py-2 basis-2/5 bg-basic hover:bg-action text-white rounded-full transition-colors duration-500 ease-in"
          >
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-around font-semibold">
        <p className="basis-2/12" suppressHydrationWarning>
          {' '}
          <Clock
            format="h:mm:ssa"
            className="text-lg font-semibold"
            ticking
          />
        </p>
        <h2 className="lg:basis-6/12 font-bold">EDOBASE NIGERIAN FORUMS</h2>
      </div>
    </nav>
  );
};
export default Navbar;
