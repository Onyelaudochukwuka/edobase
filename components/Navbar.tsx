import React, { FC, useState } from 'react';

export interface INavbarProps {
  className: string
}

const Navbar: FC<INavbarProps> = ({ className }) => {
  const state = useState();
  return (
    <nav className={`${className} `}>
      <h1>Edobase</h1>
    </nav>
  );
};
export default Navbar;
