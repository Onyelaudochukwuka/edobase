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
  const topics = [
    'Politics',
    'Sports',
    'Buisness',
    'Religion',
    'Fashion',
    'Education',
    'Real Estate',
    'Job/Vacancy',
    'Health',
    'Entertainment',
    'Travel',
    'True Confessions',
    'General',
  ];
  return (
    <nav
      className={`${className} bg-primary h-fit py-3 flex flex-col gap-4 w-full`}
    >
      <Link href="/">
        <h1 className="text-center font-bold text-black text-xl">Edobase</h1>
      </Link>
      <div className="flex justify-between items-center px-12 flex-col lg:flex-row gap-4">
        <label htmlFor="search" className="relative block basis-3/12">
          <input
            type="search"
            inputMode="search"
            id="search"
            className="bg-white lg:block rounded-xl w-64 h-10 px-4 pl-12 text-base placeholder-black text-black focus:outline-none"
            placeholder="Search"
          />
          <span className="absolute inset-y-0 left-1 flex items-center pl-2">
            <Search className="h-5 w-5 fill-black" />
          </span>
        </label>
        <div className="flex justify-between basis-3/12 gap-4">
          {links.map((value) => (
            <Link href={`/forums/${value.toLowerCase()}`} key={value}>
              <span className="text-base font-semibold">{value}</span>
            </Link>
          ))}
        </div>
        <div className="flex basis-3/12 justify-between gap-4">
          <Link href="/signup">
            <button
              type="button"
              className="px-6 py-2 basis-2/5 bg-action hover:bg-basic text-white rounded-full transition-colors duration-500 ease-in"
            >
              Register
            </button>
          </Link>
          <Link href="/login">
            <button
              type="button"
              className="px-6 py-2 basis-2/5 bg-basic hover:bg-action text-white rounded-full transition-colors duration-500 ease-in"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-around font-semibold">
        <p className="basis-2/12" suppressHydrationWarning>
          {' '}
          <Clock format="h:mm:ssa" className="text-lg font-semibold" ticking />
        </p>
        <h2 className="lg:basis-6/12 font-bold">EDOBASE NIGERIAN FORUMS</h2>
      </div>
      <div className="flex  px-12 flex-wrap gap-6 w-full py-3 justify-between leading-5">
        {topics.map((value) => (
          <span
            key={value}
            className="after:w-full after:h-1 w-fit after:left-0 relative after:absolute after:-bottom-2 after:bg-basic after:rounded-full after:transition-transform after:duration-200 after:ease-in after:scale-x-0 hover:after:scale-x-100 hover:after:origin-right after:origin-left"
          >
            <Link href={`/forums/${value.toLowerCase()}`}>{value}</Link>
          </span>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
