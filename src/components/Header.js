import React from 'react';
import {Head} from 'react-static';

const Header = ({ title }) => (
    <div>
        <Head><title>{title || 'Kanoa Haley'}</title></Head>
        {title || 'Kanoa Haley'}
    </div>
);

export default Header;
