import React, {Fragment} from 'react';
import {withRouteData} from 'react-static';
import {Link} from '@reach/router';
import convert from 'htmr';

import {getDateString} from './BlogPost';
import Layout from '../components/Layout';

import './blog.css'

const getPostSnippet = (content) => {
    let i = 0;
    const allowed = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    return convert(content, {
        transform: {
            _: (node, props, children) => {
                if (props === undefined) {
                    return <Fragment key={i++}>{node}</Fragment>;
                } else if (allowed.includes(node)) {
                    return React.createElement('p', props, children);
                }
            }
        }
    });
};

const PostSummery = ({ post }) => (
    <>
        <div className="post-summery-header">
            <span className="post-summery-title">{post.title}</span>
            <span className="post-summery-date">{getDateString(post.date || new Date())}</span>
            <i className="icon fas fa-dot-circle"></i>
            <span className="post-summery-author">{post.author || 'No Author'}</span>
        </div>
        <div className="post-summery-content">
            {getPostSnippet(post.content)}
        </div>
    </>
);

const Blog = ({ posts }) => posts ? (
    <Layout>
        <div className="blog-listing">
            {posts.map((post) =>
                <Link
                    className="post-summery"
                    to={`/blog/${post.slug}`}
                    key={post.slug}
                >
                    <PostSummery post={post}/>
                </Link>
            )}
        </div>
    </Layout>
) : <Layout/>;

const MockBlog = () => Blog({ posts: [JSON.parse(`{"slug":"my-first-post","index":"my-first-post.md","assets":["test_image.png"],"date":"02/01/2019","title":"My First Post","author":"Kanoa Haley","markdown":"# My First Post\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur porta neque at feugiat. Aenean efficitur mi eu aliquam pharetra. Fusce commodo nisi in ligula consectetur, ut lobortis est venenatis. Cras vulputate tincidunt volutpat. Curabitur quis quam lorem. Pellentesque tristique blandit iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tortor elementum vestibulum ultrices. Donec ac dapibus nulla. Vivamus dignissim ligula vel risus commodo, sed venenatis nisi blandit. Quisque volutpat consequat posuere.\\r\\n\\r\\nCras ullamcorper sed ligula id consectetur. Phasellus sed pulvinar lectus, sed ultrices ipsum. Praesent euismod maximus bibendum. Morbi auctor volutpat mi, eget malesuada nibh sagittis vel. In semper ac purus eu euismod. Nulla at bibendum urna, id pretium nibh. In hac habitasse platea dictumst. Maecenas a elit a leo tristique interdum.\\r\\n\\r\\nMauris libero ligula, gravida vitae diam vitae, consequat sollicitudin mauris. Aliquam bibendum tortor id est tristique semper. Vivamus aliquet, leo sed facilisis congue, velit purus dapibus purus, id sodales ipsum nisi id leo. Sed ornare sagittis mollis. In ipsum eros, tincidunt vel aliquet dignissim, convallis quis magna. Cras convallis sed ante vitae mattis. Nullam sed felis ac urna finibus porttitor. Fusce in turpis viverra, dapibus turpis et, mollis purus. Duis tempus scelerisque lectus, et congue massa vehicula sit amet. Nullam mauris massa, tincidunt sed massa vitae, congue faucibus sapien. Nam eu eros mauris.\\r\\n\\r\\nIn gravida tincidunt velit, eget elementum lectus dapibus vel. Nunc at justo tempus, tincidunt nibh at, vestibulum tortor. Ut sed pulvinar turpis, sagittis lobortis urna. Suspendisse interdum leo efficitur dictum sollicitudin. Morbi laoreet luctus massa sed rutrum. Suspendisse at nibh vitae est fringilla ornare. Aliquam ante sem, gravida non elit ut, sodales tempus libero. Morbi tellus massa, eleifend finibus ullamcorper semper, eleifend id leo.\\r\\n\\r\\nAenean mattis pulvinar maximus. Duis suscipit neque sodales libero feugiat feugiat quis eget mauris. Vestibulum mollis efficitur leo eget consectetur. Nam tempor sapien eu erat auctor porta. Phasellus in blandit ipsum. Fusce maximus dolor vel diam placerat sollicitudin. Donec facilisis ipsum ac enim lobortis auctor. Nunc at ornare quam. Nulla nec nisi congue, mattis orci in, iaculis tellus. Donec interdum ut arcu eu mollis. Integer quis vestibulum elit. Suspendisse blandit ex a felis accumsan egestas. Donec suscipit pellentesque sapien, eu porta sem vulputate eget. Pellentesque pretium ex id ante ornare, rutrum sollicitudin arcu venenatis.\\r\\n\\r\\n### Test Image\\r\\n\\r\\n![](./test_image.png)\\r\\n","content":"<h1 id=\\"my-first-post\\">My First Post</h1>\\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur porta neque at feugiat. Aenean efficitur mi eu aliquam pharetra. Fusce commodo nisi in ligula consectetur, ut lobortis est venenatis. Cras vulputate tincidunt volutpat. Curabitur quis quam lorem. Pellentesque tristique blandit iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tortor elementum vestibulum ultrices. Donec ac dapibus nulla. Vivamus dignissim ligula vel risus commodo, sed venenatis nisi blandit. Quisque volutpat consequat posuere.</p>\\n<p>Cras ullamcorper sed ligula id consectetur. Phasellus sed pulvinar lectus, sed ultrices ipsum. Praesent euismod maximus bibendum. Morbi auctor volutpat mi, eget malesuada nibh sagittis vel. In semper ac purus eu euismod. Nulla at bibendum urna, id pretium nibh. In hac habitasse platea dictumst. Maecenas a elit a leo tristique interdum.</p>\\n<p>Mauris libero ligula, gravida vitae diam vitae, consequat sollicitudin mauris. Aliquam bibendum tortor id est tristique semper. Vivamus aliquet, leo sed facilisis congue, velit purus dapibus purus, id sodales ipsum nisi id leo. Sed ornare sagittis mollis. In ipsum eros, tincidunt vel aliquet dignissim, convallis quis magna. Cras convallis sed ante vitae mattis. Nullam sed felis ac urna finibus porttitor. Fusce in turpis viverra, dapibus turpis et, mollis purus. Duis tempus scelerisque lectus, et congue massa vehicula sit amet. Nullam mauris massa, tincidunt sed massa vitae, congue faucibus sapien. Nam eu eros mauris.</p>\\n<p>In gravida tincidunt velit, eget elementum lectus dapibus vel. Nunc at justo tempus, tincidunt nibh at, vestibulum tortor. Ut sed pulvinar turpis, sagittis lobortis urna. Suspendisse interdum leo efficitur dictum sollicitudin. Morbi laoreet luctus massa sed rutrum. Suspendisse at nibh vitae est fringilla ornare. Aliquam ante sem, gravida non elit ut, sodales tempus libero. Morbi tellus massa, eleifend finibus ullamcorper semper, eleifend id leo.</p>\\n<p>Aenean mattis pulvinar maximus. Duis suscipit neque sodales libero feugiat feugiat quis eget mauris. Vestibulum mollis efficitur leo eget consectetur. Nam tempor sapien eu erat auctor porta. Phasellus in blandit ipsum. Fusce maximus dolor vel diam placerat sollicitudin. Donec facilisis ipsum ac enim lobortis auctor. Nunc at ornare quam. Nulla nec nisi congue, mattis orci in, iaculis tellus. Donec interdum ut arcu eu mollis. Integer quis vestibulum elit. Suspendisse blandit ex a felis accumsan egestas. Donec suscipit pellentesque sapien, eu porta sem vulputate eget. Pellentesque pretium ex id ante ornare, rutrum sollicitudin arcu venenatis.</p>\\n<h3 id=\\"test-image\\">Test Image</h3>\\n<p><img src=\\"./test_image.png\\" alt=\\"\\"></p>\\n"}`)]});

export default withRouteData(Blog);
