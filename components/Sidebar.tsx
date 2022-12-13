import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISidebarProps {
    className?: string;
}

const Sidebar: FC<ISidebarProps> = () => <aside>Sidebar</aside>;
export default Sidebar;
