const fs = require('fs').promises;
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

export const parse = async (folder, slug) => {
    const meta = await validate(folder, slug);
    if (!meta) throw Error(`Failed validation for ${slug}`);

    const postData = fm(await fs.readFile(path.resolve(folder, slug, meta.index), 'utf8'));
    if (!postData) throw Error(`Unable to parse frontmatter for ${slug}`);

    const { date, title, author } = postData.attributes;
    if (!date || !title || !author) throw Error(`Insufficient frontmatter for ${slug}`);

    return {
        ...meta,
        ...postData.attributes,
        markdown: postData.body,
        content: marked(postData.body)
    };
};

export const md = async (folder) => {
    const slugs = await fs.readdir(path.resolve(folder));
    const posts = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const slug of slugs) {
        try {
            // eslint-disable-next-line no-await-in-loop
            posts.push(await parse(folder, slug));
        } catch (err) {
            console.error(err);
        }
    }

    return posts;
};
