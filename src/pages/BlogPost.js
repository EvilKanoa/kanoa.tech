import React from 'react';
import {withRouteData, Head} from 'react-static';
import convert from 'htmr';

import Layout from '../components/Layout';

import './blogPost.css';

export const getDateString = (date) => new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    day: '2-digit',
    month: 'long'
});

const BlogPost = ({ post }) => post ? (
    <Layout>
        <Head>
            <title>{post.title}</title>
        </Head>
        <div className="post-header">
            {getDateString(post.date || new Date())} <i className="icon fas fa-dot-circle"></i> {post.author || 'No Author'}
        </div>
        <div className="post-content">
            {convert(post.content)}
        </div>
    </Layout>
) : <Layout/>;

export default withRouteData(BlogPost);
