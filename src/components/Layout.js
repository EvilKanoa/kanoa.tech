import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ sidebar, title, children }) => (
    <div>
        <Header title={title}/>
        {sidebar &&
            <Sidebar>
                {sidebar}
            </Sidebar>
        }
        {children}
    </div>
);

export default Layout;
