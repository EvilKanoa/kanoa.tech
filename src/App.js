import React, { Suspense } from "react";
import { Router } from "@reach/router";
import { Root, Routes } from "react-static";

import Loading from "./components/Loading";

import "./index.css";

const App = () => (
  <Root>
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes path="*" />
      </Router>
    </Suspense>
  </Root>
);

export default App;
