import React from 'react';
import {withRouteData} from 'react-static';
import convert from 'htmr';

import Layout from '../components/Layout';

const BlogPost = ({ post }) => post ? (
    <Layout title={post.title}>
        {convert(post.content)}
    </Layout>
) : null;

export default withRouteData(BlogPost);
