import React from 'react';
import {Head} from 'react-static';
import {Link} from '@reach/router';

const Header = ({ title, className }) => (
    <div className={`header ${className || ''}`}>
        <Head><title>{title || 'Kanoa Haley'}</title></Head>
        <Link className="header-logo" to="/">
            <span>KH</span>
        </Link>
        <div className="header-title">
            <span>{title || 'Kanoa Haley'}</span>
        </div>
        <Link className="header-action" to="/blog">
            <span>Blog</span>
        </Link>
    </div>
);

export default Header;
