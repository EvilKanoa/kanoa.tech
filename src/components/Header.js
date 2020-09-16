import React from "react";
import { useSiteData, Head } from "react-static";
import { Link } from "@reach/router";

const Header = ({ title, metaTitle }) => {
  const { title: siteTitle } = useSiteData();
  return (
    <div className="header">
      <Head>
        <title>{metaTitle || title || siteTitle}</title>
      </Head>
      <Link className="header-button" to="/">
        <i className="fas fa-home" />
      </Link>
      <div className="header-title">
        <span>{title || siteTitle}</span>
      </div>
      <a className="header-button" href="KanoaHaleyResume.pdf" download>
        <i className="fas fa-address-card" />
      </a>
    </div>
  );
};

export default Header;
