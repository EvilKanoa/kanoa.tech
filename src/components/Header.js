import React from 'react';
import {Head} from 'react-static';
import {Link} from '@reach/router';

const Header = ({ title }) => (
    <div>
        <Head><title>{title || 'Kanoa Haley'}</title></Head>
        {title || 'Kanoa Haley'}
        <Link
            to="/blog"
        >
            Blog
        </Link>
    </div>
);

export default Header;
