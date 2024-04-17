import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Link href="/">
          <StyledLogoWrapper>
            <h3>DAKIEKSTE</h3>
            <StyledIconWrapper>
              <svg
                width="15"
                height="15"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 0.999999C6.37258 0.999999 1 6.37258 1 13Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M11.0064 15.4961C11.0064 19.0812 13.9127 21.9875 17.4978 21.9875C21.0829 21.9875 23.9893 19.0812 23.9893 15.4961C23.9893 11.911 21.0829 9.00467 17.4978 9.00467C13.9127 9.00467 11.0064 11.911 11.0064 15.4961Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M23.493 15.4965C23.493 18.8102 20.8067 21.4965 17.493 21.4965C14.1793 21.4965 11.493 18.8102 11.493 15.4965C11.493 12.1828 14.1793 9.4965 17.493 9.4965C20.8067 9.4965 23.493 12.1828 23.493 15.4965Z"
                  fill="#000000"
                />
              </svg>
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
`;

const StyledIconWrapper = styled.div`
  padding-left: 0.2rem;
`;

export default Layout;
