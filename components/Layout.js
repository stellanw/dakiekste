import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AugeIcon from "@/Icons/AugeIcon";
import DakieksteLogo from "@/Icons/Dakiekste_Logo";

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
        <Link href="/">
          <StyledLogoWrapper>
            <StyledDakieksteLogo />
          </StyledLogoWrapper>
        </Link>
        <Navigation />
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

const StyledDakieksteLogo = styled(DakieksteLogo)``;

const StyledLogoH1 = styled.h3`
  /* color: ${(props) => (props.isHomepage ? "white" : "black")}; */
  color: white;
`;

const StyledIconWrapper = styled.div`
  padding-left: 0.2rem;
  .logo-path {
    /* stroke: ${(props) => (props.isHomepage ? "white" : "black")}; */
    stroke: white;
  }
  .logo-fill {
    /* fill: ${(props) => (props.isHomepage ? "white" : "black")}; */
    fill: white;
  }
`;

export default Layout;
