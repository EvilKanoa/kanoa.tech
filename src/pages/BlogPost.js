import React, { useMemo } from "react";
import { useRouteData } from "react-static";
import convert from "htmr";

import Layout from "../components/Layout";

import "./blogPost.css";

export const getDateString = date =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "long"
  });

const BlogPost = () => {
  const {
    post: { title, date = new Date(), author = "No Author", content }
  } = useRouteData();
  const dateString = useMemo(() => getDateString(date), [date]);
  const postContent = useMemo(() => convert(content), [content]);

  return (
    <Layout id="top" metaTitle={title}>
      <div className="post-header">
        {dateString} <i className="icon fas fa-dot-circle" /> {author}
      </div>
      <div className="post-content">{postContent}</div>
      <a className="scroll-up-button" href="#top">
        <i className="fas fa-arrow-alt-circle-up" />
      </a>
    </Layout>
  );
};

export default BlogPost;
