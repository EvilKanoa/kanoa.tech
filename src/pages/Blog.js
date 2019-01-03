import React from 'react';
import {withRouteData} from 'react-static';

import Layout from '../components/Layout';

const Blog = (props) => {
    console.log(props);
    return (<Layout>
        Welcome to my blog!
    </Layout>
);}

export default withRouteData(Blog);
