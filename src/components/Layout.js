import React from "react";
import Header from "./Header";

import "./layout.css";

const Layout = ({ title, metaTitle, children, ...rest }) => (
  <div className="layout" {...rest}>
    <Header title={title} metaTitle={metaTitle} />
    <div className="content-pane">
      <div className="content">{children}</div>
    </div>
  </div>
);

export default Layout;
