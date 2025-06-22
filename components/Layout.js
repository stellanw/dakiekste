import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import BackToTopButton from "./BackToTopButton";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    setIsHomepage(router.pathname === "/");
  }, [router.pathname]);

  return (
    <div>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
