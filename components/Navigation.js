import React, { useState } from "react";
import Link from "next/link";
import styled, { keyframes, css } from "styled-components";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setAnimationActive(!menuOpen);
  };

  // const handleCloseMenu = () => {
  //   setMenuOpen(false);
  //   setAnimationActive(false);
  // };

  return (
    <StyledNavigation menuOpen={menuOpen}>
      <StyledMenuToggle onClick={handleMenuToggle}>
        <StyledIconsWrapper>
          <StyledIconWrapper animationActive={animationActive}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 0.999999C6.37258 0.999999 1 6.37258 1 13Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M11.0064 15.4961C11.0064 19.0812 13.9127 21.9875 17.4978 21.9875C21.0829 21.9875 23.9893 19.0812 23.9893 15.4961C23.9893 11.911 21.0829 9.00467 17.4978 9.00467C13.9127 9.00467 11.0064 11.911 11.0064 15.4961Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M23.493 15.4965C23.493 18.8102 20.8067 21.4965 17.493 21.4965C14.1793 21.4965 11.493 18.8102 11.493 15.4965C11.493 12.1828 14.1793 9.4965 17.493 9.4965C20.8067 9.4965 23.493 12.1828 23.493 15.4965Z"
                fill="#ffffff"
              />
            </svg>
          </StyledIconWrapper>
          <StyledIconWrapper animationActive={animationActive}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 0.999999C6.37258 0.999999 1 6.37258 1 13Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M11.0064 15.4961C11.0064 19.0812 13.9127 21.9875 17.4978 21.9875C21.0829 21.9875 23.9893 19.0812 23.9893 15.4961C23.9893 11.911 21.0829 9.00467 17.4978 9.00467C13.9127 9.00467 11.0064 11.911 11.0064 15.4961Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M23.493 15.4965C23.493 18.8102 20.8067 21.4965 17.493 21.4965C14.1793 21.4965 11.493 18.8102 11.493 15.4965C11.493 12.1828 14.1793 9.4965 17.493 9.4965C20.8067 9.4965 23.493 12.1828 23.493 15.4965Z"
                fill="#ffffff"
              />
            </svg>
          </StyledIconWrapper>
        </StyledIconsWrapper>
      </StyledMenuToggle>
      <StyledUl>
        <StyledNavButton>
          <StyledLink href="/">dakiekste</StyledLink>
        </StyledNavButton>
        <StyledNavButton>
          <StyledLink href="/leistung">wat</StyledLink>
        </StyledNavButton>
        <StyledNavButton>
          <StyledLink href="/team">team</StyledLink>
        </StyledNavButton>
        <StyledNavButton>
          <StyledLink href="/kontakt">kontakt</StyledLink>
        </StyledNavButton>
      </StyledUl>
    </StyledNavigation>
  );
}

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(105deg);
  }
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.3rem;
  &:hover {
    transform: scale(1.1); /* Scale up the SVG icon slightly on hover */
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  position: fixed;
  right: ${({ menuOpen }) => (!menuOpen ? "-15.5rem" : "-2px")};
  top: 0.5rem;
  width: 300px;
  height: 50px;
  background-color: white;
  box-shadow: 10px 0 5px 50% black;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  transition: right 0.5s ease; /* Transition for menu animation */
  background-color: #11a984;
  color: white;
`;

const StyledMenuToggle = styled.div`
  margin: auto;
  cursor: pointer;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.1rem;
  transition: transform 0.5s ease;

  ${({ animationActive }) =>
    animationActive &&
    css`
      animation: ${rotateAnimation} 0.8s linear forwards;
    `}
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledNavButton = styled.li`
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  font-size: 0.9rem;
  font-family: "Bricolage Grotesque", sans-serif;
  &:hover {
    font-size: 1rem;
    transition: font-size 0.3s ease;
  }
`;

const StyledLink = styled(Link)`
  color: white;
`;
