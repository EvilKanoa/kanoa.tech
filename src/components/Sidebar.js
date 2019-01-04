import React from 'react';

const Sidebar = ({ children, className }) => (
    <div className={`sidebar ${className || ''}`}>
        {children}
    </div>
);

export default Sidebar;
