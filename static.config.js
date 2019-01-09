import {reloadRoutes} from 'react-static/node';
import chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import {md} from './src/modules/blog';

if (process.env.REACT_STATIC_ENV === 'development') {
    const debouncedReload = debounce(reloadRoutes, 1000, { leading: true, trailing: false });
    chokidar.watch('./blog').on('all', (event, path) => {
        console.info(`${path} has changed, rebuilding...`);
        debouncedReload();
    });
    reloadRoutes();
}

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
            component: 'src/pages/Blog'
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
