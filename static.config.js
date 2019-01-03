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

export default {
    ...config,
    getSiteData
};
