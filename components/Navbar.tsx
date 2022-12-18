import React, {
  FC,
} from 'react';

export interface INavbarProps {
  className: string
}

const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <nav className={`${className} bg-primary h-fit py-3`}>
      <h1 className="text-center font-bold text-black text-xl">Edobase</h1>
      <div className="flex">
        <label>
          <input
            type="text"
            className="bg-white border-2 border-gray-300 rounded-lg w-64 h-10 px-4 text-base placeholder-gray-500 text-gray-900 focus:outline-none focus:border-primary"
            placeholder="Search"
          />
          
      </label>
      </div>
    </nav>
  );
};
export default Navbar;
