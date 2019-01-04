const fs = require('fs-extra');
const path = require('path');
const fm = require('front-matter');
const marked = require('marked');

export const validate = async (folder, slug) => {
    const resolved = path.resolve(folder, slug);
    const stat = await fs.stat(resolved);

    if (!stat.isDirectory()) throw Error('Post must be within a directory named by slug');

    const files = await fs.readdir(resolved);
    let post = '';
    const assets = [];
    files.forEach(async (name) => {
        if (name === 'index.md' || name === `${slug}.md`) {
            post = name;
        } else {
            assets.push(name);
        }
    });

    if (!post || !post.length) throw Error(`Unable to find ${slug}.md or index.md for ${slug}`);

    return {
        slug,
        index: post,
        assets
    };
};

export const copyAssets = async (folder, meta, publicDir) => {
    if (!meta || !meta.slug || !meta.assets || !publicDir) throw Error('Insufficient metadata to copy assets');

    // eslint-disable-next-line no-restricted-syntax
    for (const asset of meta.assets) {
        // eslint-disable-next-line no-await-in-loop
        await fs.copy(path.resolve(folder, meta.slug, asset), path.resolve(publicDir, folder, meta.slug, asset));
    }
};

export const parse = async (folder, slug, siteRoot) => {
    const meta = await validate(folder, slug);
    if (!meta) throw Error(`Failed validation for ${slug}`);

    const postData = fm(await fs.readFile(path.resolve(folder, slug, meta.index), 'utf8'));
    if (!postData) throw Error(`Unable to parse frontmatter for ${slug}`);

    const { date, title, author } = postData.attributes;
    if (!date || !title || !author) throw Error(`Insufficient frontmatter for ${slug}`);

    const content = marked(postData.body, {
        baseUrl: siteRoot ? `${siteRoot}/${folder}/${slug}/` : slug
    });

    return {
        ...meta,
        ...postData.attributes,
        markdown: postData.body,
        content
    };
};

export const md = async (folder, publicDir, siteRoot) => {
    const slugs = await fs.readdir(path.resolve(folder));
    const posts = [];

    if (publicDir) {
        await fs.remove(path.resolve(publicDir, folder));
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const slug of slugs) {
        try {
            // eslint-disable-next-line no-await-in-loop
            const post = await parse(folder, slug, siteRoot);
            posts.push(post);
            // eslint-disable-next-line no-await-in-loop
            if (publicDir) await copyAssets(folder, post, publicDir);
        } catch (err) {
            console.error(err);
        }
    }

    return posts.sort((a, b) => new Date(a.date) > new Date(b.date));
};
