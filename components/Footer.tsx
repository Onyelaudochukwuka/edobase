import React, { FC } from 'react';

export interface IFooterProps {
  className: string
}

const Footer: FC<IFooterProps> = ({ className }) => <footer className={`${className} `}>Footer</footer>;
export default Footer;
