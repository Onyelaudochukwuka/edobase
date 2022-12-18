import React, { FC } from 'react';

export interface ISidebarProps {
  className: string
}

const Sidebar: FC<ISidebarProps> = ({ className }) => <aside className={`${className}`}>Sidebar</aside>;
export default Sidebar;
