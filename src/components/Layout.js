import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

import './layout.css';

const Layout = ({ sidebar, title, children, className, ...layoutProps }) => (
    <div className={`layout ${className || ''} ${sidebar ? 'withSidebar' : ''}`} {...layoutProps}>
        <Header title={title}/>
        <div className="content-pane">
            <div className="content">
                {children}
            </div>
            {sidebar &&
                <Sidebar>
                    {sidebar}
                </Sidebar>
            }
        </div>
    </div>
);

export default Layout;
