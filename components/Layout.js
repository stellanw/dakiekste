import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AugeIcon from "@/Icons/AugeIcon";

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
            <StyledLogoH1
            // isHomepage={isHomepage}
            >
              DAKIEKSTE
            </StyledLogoH1>
            <StyledIconWrapper
            // isHomepage={isHomepage}
            >
              <AugeIcon />
            </StyledIconWrapper>
          </StyledLogoWrapper>
        </Link>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  padding-top: 1rem;
`;

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
