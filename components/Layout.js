import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import DakieksteLogoWhite from "@/Icons/DakieksteLogoWhite";
import DakieksteLogoBlack from "@/Icons/DakieksteLogoBlack";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    // Check if the user is on the homepage
    setIsHomepage(router.pathname === "/");
  }, [router.pathname]);

  return (
    <div>
      <header>
        <NavBar />
        <Header
          src="/images/Head_Image.jpg"
          headlineThin="BILDWELTEN"
          headlineBold="FÜR EURE VISION"
        />
        {/* <Navigation /> */}
      </header>
      <StyledMain>{children}</StyledMain>
      <Footer />
    </div>
  );
};

const StyledLogoWrapper = styled.div`
  margin-left: 2.6rem;

  margin-top: 0.4rem;
`;

const StyledMain = styled.main`
  margin-top: -1.8rem;
`;

export default Layout;
