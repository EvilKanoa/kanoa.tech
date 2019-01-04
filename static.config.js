import {md} from './src/modules/blog';

const config = {
    siteRoot: 'https://kanoa.tech',
    devServer: {
        port: 8080,
        host: '127.0.0.1'
    },
    paths: {
        public: 'public'
    }
};

const getSiteData = async () => ({
    title: `Kanoa Haley`
});

const getRoutes = async ({ dev }) => {
    const posts = await md('blog', config.paths.public, dev ? null : config.siteRoot);

    return [
        {
            path: '/',
            component: 'src/pages/Home'
        },
        {
            path: '404',
            component: 'src/pages/NotFound'
        },
        {
            path: 'blog',
            component: 'src/pages/Blog',
            getData: () => ({ posts }),
            children: posts.map((post) => ({
                path: post.slug,
                component: 'src/pages/BlogPost',
                getData: () => ({ post })
            }))
        }
    ];
};

export default {
    ...config,
    getSiteData,
    getRoutes
};
