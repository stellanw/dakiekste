// import React from "react";
// import Link from "next/link";
// import styled from "styled-components";

// export default function Navigation() {
//   return (
//     <StyledNavigation>
//       <StyledUl>
//         <StyledNavButton>
//           <Link href="/">dakiekste</Link>
//         </StyledNavButton>
//         <StyledNavButton>
//           <Link href="/leistung">wat</Link>
//         </StyledNavButton>
//         <StyledNavButton>
//           <Link href="/team">team</Link>
//         </StyledNavButton>
//         <StyledNavButton>
//           <Link href="/kontakt">kontakt</Link>
//         </StyledNavButton>
//       </StyledUl>
//     </StyledNavigation>
//   );
// }

// const StyledNavigation = styled.nav`
//   display: flex;
//   position: fixed;
//   right: 2rem;
//   top: 2rem;
//   width: 300px;
//   background-color: white;
//   box-shadow: 10px 0 5px 50% black;
//   border: 1px solid;
// `;

// const StyledUl = styled.ul`
//   display: flex;
//   justify-content: space-evenly;
//   list-style: none;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   padding-top: 1rem;
//   padding-bottom: 1rem;
// `;

// const StyledNavButton = styled.li`
//   font-size: 0.9rem;
//   font-family: "Bricolage Grotesque", sans-serif;
// `;

import React, { useState } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNavigation menuOpen={menuOpen}>
      <StyledMenuToggle onClick={handleMenuToggle}>
        <StyledIconWrapper>
          <svg
            width="36"
            height="16"
            viewBox="0 0 56 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.618 22.9866C17.5779 22.9872 17.5377 22.9875 17.4974 22.9875C13.36 22.9875 10.006 19.6335 10.006 15.4961C10.006 11.3587 13.36 8.00467 17.4974 8.00467C20.2203 8.00467 22.604 9.45747 23.9155 11.6302C23.2412 6.20152 18.6112 2 13 2C6.9248 2 2 6.92487 2 13C2 19.0751 6.9248 24 13 24C14.6493 24 16.2139 23.637 17.618 22.9866ZM26 13C26 5.8203 20.1797 0 13 0C5.82031 0 0 5.8203 0 13C0 20.1797 5.82019 26 13 26C20.1797 26 26 20.1797 26 13ZM43 2C48.6112 2 53.2412 6.20152 53.9155 11.6302C52.604 9.45747 50.2203 8.00467 47.4974 8.00467C43.36 8.00467 40.006 11.3587 40.006 15.4961C40.006 19.6335 43.36 22.9875 47.4974 22.9875L47.5645 22.9872L47.618 22.9866C46.2139 23.637 44.6493 24 43 24C36.9248 24 32 19.0751 32 13C32 6.92487 36.9248 2 43 2ZM56 13C56 5.8203 50.1797 0 43 0C35.8203 0 30 5.8203 30 13C30 20.1797 35.8202 26 43 26C50.1797 26 56 20.1797 56 13Z"
              fill="white"
            />
          </svg>
        </StyledIconWrapper>
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

const StyledNavigation = styled.nav`
  display: flex;
  position: fixed;
  right: ${({ menuOpen }) => (menuOpen ? "-15.5rem" : "-2px")};
  top: 2rem;
  width: 300px;
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
  padding: 0.5rem;
  transition: transform 0.3s ease; /* Add transition for smooth effect */
  &:hover {
    transform: scale(1.2); /* Scale up the SVG icon slightly on hover */
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledNavButton = styled.li`
  font-size: 0.9rem;
  font-family: "Bricolage Grotesque", sans-serif;
`;

const StyledLink = styled(Link)`
  color: white;
`;

// Custom Burger Icon
const CustomBurgerIcon = styled.div`
  /* Define your custom burger icon styles here */
`;
