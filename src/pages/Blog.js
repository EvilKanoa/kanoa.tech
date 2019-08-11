import React, { Fragment, useMemo } from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import convert from "htmr";

import { getDateString } from "./BlogPost";
import Layout from "../components/Layout";

import "./blog.css";

const SNIPPET_LENGTH = 1200;

const allowedNodes = new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6"]);
const stripNodes = new Set(["a"])
const getPostSnippet = content => {
  let i = 0;
  let length = 0;

  return convert(content, {
    transform: {
      _: (node = "", props, children) => {
        if (props === undefined) {
          const trimmed = node.substring(0, SNIPPET_LENGTH - length);
          length += trimmed.length;
          return trimmed;
        } else if (allowedNodes.has(node)) {
          return React.createElement("p", { key: i++ }, children);
        } else if (stripNodes.has(node)) {
          return React.createElement(Fragment, { key: i++ }, children);
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
        <div className="post-summery-details">
          {dateString}
          <i className="icon fas fa-dot-circle" />
          {author || "No Author"}
        </div>
      </div>
      <hr />
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
