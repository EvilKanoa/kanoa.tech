import React from 'react';
import {withRouteData} from 'react-static';
import { Link } from '@reach/router';

import Layout from '../components/Layout';

const Blog = ({ posts }) => (
    <Layout>
        Welcome to my blog!
        {posts.map((post) =>
            <Link
                to={`/blog/${post.slug}`}
            >
                {post.title}
            </Link>
        )}
    </Layout>
);

export default withRouteData(Blog);
