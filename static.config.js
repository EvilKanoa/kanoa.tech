import {md} from './src/modules/blog';

const config = {
    siteRoot: 'https://kanoa.tech',
    devServer: {
        port: 8080,
        host: '127.0.0.1'
    }
};

const getSiteData = async () => ({
    title: `Kanoa's Site`
});

const getRoutes = async () => {
    const posts = await md('blog');

    return [
        {
            path: '/',
            component: 'src/pages/Home'
        },
        {
            path: '/about',
            component: 'src/pages/About'
        },
        {
            path: '404',
            component: 'src/pages/NotFound'
        },
        {
            path: '/blog',
            component: 'src/pages/Blog',
            getData: async () => ({ posts }),
            children: posts.map((post) => ({
                path: post.slug,
                component: 'src/pages/BlogPost',
                getData: async () => ({ post })
            }))
        }
    ];
};

export default {
    ...config,
    getSiteData,
    getRoutes
};
