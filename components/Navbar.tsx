import React, { FC } from 'react';

import Link from 'next/link';

import { Search } from '../assets';

export interface INavbarProps {
  className: string
}
const links: string[] = ['Trending', 'Recent', 'Topics'];
const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <nav className={`${className} bg-primary h-fit py-3`}>
      <h1 className="text-center font-bold text-black text-xl">Edobase</h1>
      <div className="flex justify-between items-center px-12">
        <label htmlFor="search" className="relative block basis-3/12">
          <input
            type="text"
            id="search"
            className="bg-black rounded-xl w-64 h-10 px-4 pl-12 text-base placeholder-white text-white focus:outline-none "
            placeholder="Search"
          />
          <span className="absolute inset-y-0 left-1 flex items-center pl-2">
            <Search className="h-5 w-5" />
          </span>
        </label>
        <div className="flex justify-between basis-3/12">
          {links.map((value) => (
            <Link href={`/${value.toLowerCase()}`}>
              <span className="text-base font-semibold">{value}</span>
            </Link>
          ))}
        </div>
        <div className="flex basis-3/12 justify-between">
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
    </nav>
  );
};
export default Navbar;
