import React from "react";

import "./loading.css";

const Loading = () => (
  <div className="loading">
    <div className="header">
      <span className="header-title">Kanoa's Blog</span>
    </div>
    <div className="spinner">
      <div />
      <div />
    </div>
    <div className="hint">Loading...</div>
  </div>
);

export default Loading;
