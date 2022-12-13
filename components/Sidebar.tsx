import React, { FC } from 'react';

export interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = () => <aside>Sidebar</aside>;
export default Sidebar;
