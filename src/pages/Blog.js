import React, { Fragment, useMemo } from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import convert from "htmr";

import { getDateString } from "./BlogPost";
import Layout from "../components/Layout";

import "./blog.css";

const getPostSnippet = content => {
  let i = 0;
  const allowed = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
  return convert(content, {
    transform: {
      _: (node, props, children) => {
        if (props === undefined) {
          return <Fragment key={i++}>{node}</Fragment>;
        } else if (allowed.includes(node)) {
          return React.createElement("p", props, children);
        }
      }
    }
  });
};

const PostSummery = ({ date, content, title, author }) => {
  const dateString = useMemo(() => getDateString(date || new Date()), [date]);
  const snippet = useMemo(() => getPostSnippet(content), [content]);
  return (
    <>
      <div className="post-summery-header">
        <span className="post-summery-title">{title}</span>
        <span className="post-summery-date">{dateString}</span>
        <i className="icon fas fa-dot-circle" />
        <span className="post-summery-author">{author || "No Author"}</span>
      </div>
      <div className="post-summery-content">{snippet}</div>
    </>
  );
};

const Blog = () => {
  const { posts } = useRouteData();
  return (
    <Layout>
      <div className="blog-listing">
        {posts.map(post => (
          <Link
            className="post-summery"
            to={`/blog/${post.slug}`}
            key={post.slug}
          >
            <PostSummery {...post} />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
