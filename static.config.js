import { rebuildRoutes } from "react-static/node";
import chokidar from "chokidar";
import debounce from "lodash.debounce";
import { md } from "./src/modules/blog";

if (process.env.REACT_STATIC_ENV === "development") {
  const rebuild = debounce(rebuildRoutes, 1000, {
    leading: true,
    trailing: false
  });
  chokidar
    .watch("./blog/**/*", { ignoreInitial: true })
    .on("all", (_event, path) => {
      console.info(`File changed: ${path}`);
      rebuild();
    });
}

const config = {
  siteRoot: "https://kanoa.tech",
  devServer: {
    port: 8080,
    host: "127.0.0.1"
  },
  paths: {
    public: "public"
  }
};

const getSiteData = async () => ({
  title: "Kanoa's Blog"
});

const getRoutes = async ({ stage }) => {
  const dev = stage === "dev";

  const posts = await md(
    "blog",
    config.paths.public,
    dev ? null : config.siteRoot
  );

  return [
    {
      path: "404",
      template: "src/components/NotFound"
    },
    { path: "/loading", template: "src/components/Loading" },
    {
      path: "/",
      template: "src/components/Blog",
      getData: () => ({ posts }),
      children: posts.map(post => ({
        path: `blog/${post.slug}`,
        template: "src/components/BlogPost",
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
