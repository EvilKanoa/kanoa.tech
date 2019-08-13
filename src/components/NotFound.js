import React from "react";

import Layout from "../components/Layout";

const NotFound = () => (
  <Layout>
    <div
      style={{
        textAlign: "center",
        marginTop: "2em",
        fontSize: "24pt"
      }}
    >
      We couldn't find that page, better luck next time!
    </div>
  </Layout>
);

export default NotFound;
